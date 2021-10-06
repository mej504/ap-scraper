const cheerio = require('cheerio');

class Extractor {

	html = null;

	constructor( html='' ) {
		this.html = html;
	}

	/**
	 * Cuts the GMT timezone off the end of AP's timestamps
	 * 
	 * @param String | timestamp | The timestamp pulled from AP
	 * @returns String | Formatted timestamp
	 * 
	 */

	trimGMT( timestamp ) {
		let gmtStart = timestamp.indexOf('GMT');
		return timestamp.slice(0, (gmtStart - 1) );
	}
	
	/**
	 * Extracts a properly-formatted slug from the story link provided by AP
	 * 
	 * @param String | link | Link pulled from news card
	 * @returns String | The story slug needed to fetch a specific news story
	 * 
	 */

	pullSlug( link ) {
		return link.split('/')[2];
	}

	/**
	 * Extract text content contained in anchor tag
	 * 
	 * @param LoadedCheerio | paragraphEl | Paragraph object produced by cheerio
	 * @returns String | Final paragraph text
	 * 
	 */

	resolveAnchorTag( paragraphEl ) {
		let $ = cheerio.load(paragraphEl);
		return $('p').text();
	}

	/**
	 * Extracts the necessary data from individual news listings on apnews.com/hub/<category>
	 * 
	 * @param LoadedCheerio | mainDiv | The individual card loaded from cheerio
	 * @returns Object | Object containing all needed data points from individual card
	 * 
	 */

	getCardData( cardContainer ) {

		const loader = cheerio.load(cardContainer);
		const html = loader.html();
		const $ = cheerio.load(html);

		let headlineContainer = $('.CardHeadline');
		let byline = $('[class*="bylines"]').text() === '' ? 'By The Associated Press' : $('[class*="bylines"]').text();
		let timestampRaw = $('.Timestamp').text();
		let timestamp = this.trimGMT( timestampRaw );
		let headline = headlineContainer.find('[class*="heading"]').text();
		let slug;

		let edgeAnchorTag = $('[class*="Component-link"]');

		if( edgeAnchorTag.length > 0 ) {
			slug = this.pullSlug( edgeAnchorTag.attr('href') );
		} else {
			let a = headlineContainer.find('a');
			slug = this.pullSlug( a.attr('href') );
		}

		return {
			headline,
			slug,
			timestamp,
			byline
		}

	}

	// * EDGE CASE
	// * Occassionally AP will insert links to other stories inside a paragraph, which can interfere with
	// * paragraph extraction.
	// * An example of this can be found at: https://apnews.com/article/coronavirus-pandemic-lifestyle-health-race-and-ethnicity-elections-7f85de394efbacec5f1ce2a3335681b9
	// * |---> First two paragraphs have multiple anchor tags embedded in the <p> elements

	getNewsAssets() {

		const $ = cheerio.load( this.html );
		let headlineContainer = $('.CardHeadline');
		let storyParagraphs = $('.Article p').splice(0,3);

		// Initialize story object
		let story = {
			headline: headlineContainer.find('h1').text(),
			bylines: null,
			timestamp: null,
			copy: []
		};

		// Pull all children from headline container
		let bylineEls = headlineContainer.find('[class*="Component-signature"]').children();

		// Extract text from each element based on its class name
		bylineEls.each(function() {
			let className = this.attribs.class;
			if( className.includes('bylines') ) story.bylines = $(this).text();
			if( className.includes('Timestamp') ) story.timestamp = $(this).text();
		})

		// Trim GMT off timestamp
		story.timestamp = this.trimGMT(story.timestamp);

		// Push text from each paragraph element into story.copy[]
		storyParagraphs.forEach((p) => {
			let anchorExists = $(p).find('a').index() === 0;
			let text;
			anchorExists ? text = this.resolveAnchorTag(p) : text = p.children[0].data;
			story.copy.push(text);
		})

		return story;

	}

}

module.exports = Extractor;
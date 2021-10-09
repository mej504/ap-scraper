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

		// Trim GMT if it exists in the string, otherwise return the original string
		// Sometimes AP's timestamps can be "yesterday"
		return gmtStart > -1 ? timestamp.slice(0, (gmtStart - 1) ) : timestamp;
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
	 * Extracts paragraph elements from an article
	 * 
	 * @returns Array | Array of Cheerio nodes describing paragraph elements
	*/

	getArticleParagraphs() {

		let { html } = this;
		let $ = cheerio.load(html);

		// In seemingly rare cases, AP might not have a div.Article element, and instead put a story
		// inside an <article> element. This ensures the paragraphs are pulled regardless
		// of its component structure

		// If the html contains an .Article class, get the first three paragraph elements,
		// otherwise pull the same number of paragraphs from the <article> element
		if( $('.Article').index() > -1 ) {
			return $('.Article').find('p').splice(0,3);
		} else if( $('article').index() === 0 ) {
			return $('article').find('p').splice(0,3);
		}

		// I'm sure there's a better way to handle this, but it's better than nothing at the moment
		return "Article's story contents could not be retrieved. Please try again, or select another story."

	}

	/**
	 * Extracts bylines from an article
	 * 
	 * @returns String | The article's author(s)
	 */

	getBylines() {

		let { html } = this;
		let $ = cheerio.load(html);

		// So far I've witness two class names for the byline container:
		// Component-bylines-n-n-nn || byline-n-n-nn (where n = some random digit)
		if( $('[class*="Component-bylines"]').index() > -1 ) {
			return $('[class*="Component-bylines"]').text().trim();
		} else {
			return $('[class*="byline"]').text().trim();
		}

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

	/**
	 * Pulls the necessary story components from the article page
	 * 
	 * @returns Object | Object containing a story's headline, bylines, timestamp and the first three paragraphs
	 * 
	 */

	getNewsAssets() {

		const $ = cheerio.load( this.html );
		let paragraphs = this.getArticleParagraphs();

		// Initialize story object
		let story = {
			headline: $('h1').text().trim(),
			bylines: this.getBylines(),
			timestamp: $('.Timestamp').text(),
			copy: []
		};

		// Trim GMT off timestamp
		story.timestamp = this.trimGMT(story.timestamp);

		// Push text from each paragraph element into story.copy[]
		paragraphs.forEach((p) => {
			let anchorExists = $(p).find('a').index() === 0;
			let text;
			anchorExists ? text = this.resolveAnchorTag(p) : text = p.children[0].data;
			story.copy.push(text.trim().replaceAll('���', "'"));
		})

		return story;

	}

}

module.exports = Extractor;
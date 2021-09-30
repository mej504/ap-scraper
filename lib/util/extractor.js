const cheerio = require('cheerio');
const { TypeErrorWithCode } = require('../error/customerror');

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

		if( typeof link !== 'string' ) throw TypeErrorWithCode(`Invalid type passed to pullSlug. Expected string, received ${typeof link}`);
		return link.split('/')[2];

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

		// * EDGE CASE
		// * AP will occasionally include an "Eyebrow" component on a feed card. These components
		// * include a special label, such as "AP Exclusive"
		
		// * EDGE CASE
		// * AP also will sometimes lead a particular category with a feature-like news card. The primary
		// * difference being the component structure differs from a standard news card. More specific
		// * selectors solve this

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

	getNewsAssets() {

		if(typeof this.html !== 'string') {
			throw TypeErrorWithCode(`Invalid type as argument for parseNewsPage. Expecting string, received ${typeof this.rawHtml}`, 400);
		}

		const $ = cheerio.load( this.html );
		let headlineContainer = $('.CardHeadline');
		let featureImageContainer = $('.LeadFeature');
		let storyParagraphs = $('.Article p').splice(0,3);

		let story = {
			headline: headlineContainer.find('h1').text(),
			bylines: null,
			timestamp: null,
			copy: []
		};

		let bylineEls = headlineContainer.find('[class*="Component-signature"]').children();

		bylineEls.each(function() {
			let className = this.attribs.class;
			if( className.includes('bylines') ) story.bylines = $(this).text();
			if( className.includes('Timestamp') ) story.timestamp = $(this).text();
		})

		story.timestamp = this.trimGMT(story.timestamp);

		storyParagraphs.forEach((p) => {
			story.copy.push(p.children[0].data);
		})

		return story;

	}

}

module.exports = Extractor;
const cheerio = require('cheerio');
const Extractor = require('../util/extractor');
const { TypeErrorWithCode } = require('../error/customerror');

class Parser {

	/**
	 * 
	 * Parses individual cards pulled from AP's /hub/:category path
	 * 
	 * @param String | rawHtml | Raw markup fetched from AP
	 * @returns Array | An array of story objects containing a story's headline, bylines, timestamp and slug
	 * 
	 */

	parseCards( rawHtml ) {

		const extractor = new Extractor();
		const $ = cheerio.load( rawHtml );

		// Only desire a max of 20 story cards
		const cards = $( '.FeedCard' ).splice(0,20);

		// Filter cards based on whether the classes include 'wireStory', which weeds
		// out any non-wire story cards
		const filteredCards = cards.filter((card) => {

			let hed = $(card).find('h3').text();
			let className = card.attribs.class;

			// Stories with AP PHOTOS in the headline are simply image galleries, and we aren't
			// using those in this app
			if( hed.includes('AP PHOTOS') ) return false;

			return className.includes('wireStory') ? true : false;

		})

		return filteredCards.map(( card ) => {
			return extractor.getCardData( card );
		});

	}

	/**
	 * 
	 * Parses the markup of a specific news story
	 * 
	 * @param String | rawHtml | Raw markup fetched from a specific article path
	 * @returns Object | An object containing a story's headline, bylines, timestamp and story copy
	 * 
	 */

	parseNewsPage( rawHtml ) {
		const extractor = new Extractor( rawHtml );
		return extractor.getNewsAssets();
	}

}

module.exports = Parser;
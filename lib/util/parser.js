const cheerio = require('cheerio');
const extractCardData = require('../util/extractor');
const { TypeErrorWithCode } = require('../error/customerror');

class Parser {

	parseCards( rawHtml ) {

		return new Promise((resolve, reject) => {

			if(typeof rawHtml !== 'string' ) {
				reject( TypeErrorWithCode(`Invalid type as argument for parseHtml. Expecting string, received ${typeof rawHtml}`, 400));
			}

			const $ = cheerio.load( rawHtml );
			const cards = $( '.FeedCard' );

			// Only use the first 20 news listings
			const splitCards = cards.splice( 0, 20 );

			// Filter cards based on whether the classes include 'wireStory', which weeds
			// out any non-wire story cards
			const filteredCards = splitCards.filter((card) => {

				let className = card.attribs.class;
				if( className.includes('wireStory') ) return true;
				return false;

			})

			let mappedCards = filteredCards.map(( card ) => {
				return extractCardData( card );
			})

			resolve(mappedCards);

		})


	}

}

module.exports = Parser;
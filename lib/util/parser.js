const cheerio = require('cheerio');
const extractCardData = require('../util/extractor');

class Parser {

	parseCards( rawHtml ) {

		return new Promise((resolve, reject) => {

			if(typeof rawHtml !== 'string' ) {
				reject(new TypeError(`Invalid type as argument for parseHtml. Expecting string, received ${typeof rawHtml}`))
			}

			const $ = cheerio.load( rawHtml );
			const cards = $( '.FeedCard' );

			// Only use the first 20 news listings
			const splitCards = cards.splice( 0, 20 );

			let mappedCards = splitCards.map(( card ) => {
				return extractCardData( card );
			})

			resolve(mappedCards);

		})


	}

}

module.exports = Parser;
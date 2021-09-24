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

			// Filter cards based on whether the classes include 'wireStory', which weeds
			// out any non-wire story cards
			const filteredCards = splitCards.filter((card) => {

				let className = card.attribs.class;
				if( className.includes('wireStory') ) return true;
				return false;

			})

			let mappedCards = filteredCards.map(( card,index ) => {
				return extractCardData( card,index );
			})

			resolve(mappedCards);

		})


	}

}

module.exports = Parser;
const cheerio = require('cheerio');

/**
 * Cuts the GMT timezone off the end of AP's timestamps
 * 
 * @param String | haystack | The timestamp pulled from AP
 * @returns String | Formatted timestamp
 */

const trimGMT = ( haystack ) => {
	let gmtStart = haystack.indexOf('GMT');

	// end one step before gmtStart to eliminate floating space
	// avoids need to trim() resultant string
	return haystack.slice(0, (gmtStart - 1));
}


/**
 * Extracts the necessary data from individual news listings on apnews.com/hub/<category>
 * 
 * @param LoadedCheerio | mainDiv | The individual card loaded from cheerio
 * @returns Object | Object containing all needed data points from individual card
 * 
 */

const extractCardData = ( mainDiv ) => {

	// This seems wrong, but it works for now =D
	const loader = cheerio.load(mainDiv);
	const html = loader.html();
	const $ = cheerio.load(html);

	// Target the headline container, which has all the elements we need for this
	let headlineContainer = $('.CardHeadline');
	let signatureElements = headlineContainer.children()[1].children;

	// Initialization
	let timestamp;
	let byline;

	// Sometimes a news listing doesn't have a byline, but it always has a timestamp
	// If the length is greater than 1, the byline exists, otherwise only a timestamp exists
	if( signatureElements.length > 1 ) {
		byline = signatureElements[0].children[0].data;
		timestamp = signatureElements[1].children[0].data;
	} else {
		timestamp = signatureElements[0].children[0].data;
	}

	// Extracts necessary data from the headline container, which includes the story link
	// and headline text
	let a = headlineContainer.find('a');
	let link = a.attr('href');
	let headlineEl = a.find('h3');
	let headline = headlineEl.text();

	// Trims GMT off the end of the AP timestamp
	timestamp = trimGMT( timestamp );

	// Accounts for possibility of a missing byline
	return {
		headline,
		link,
		timestamp,
		byline: byline === undefined ? null : byline
	}

}

module.exports = extractCardData;
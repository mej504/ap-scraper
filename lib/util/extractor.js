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

const extractCardData = ( mainDiv, index ) => {

	// This seems wrong, but it works for now =D
	const loader = cheerio.load(mainDiv);
	const html = loader.html();
	const $ = cheerio.load(html);


	// Target the headline container, which has all the elements we need for this
	
	// * EDGE CASE
	// * AP will occasionally include an "Eyebrow" component on a feed card. These components
	// * include a special label, such as "AP Exclusive". I need to be more specific about finding
	// * the elements I need rather than just checking the headline container's children

	let headlineContainer = $('.CardHeadline');
	let byline = $('[class*="bylines"]').text() === '' ? null : $('[class*="bylines"]').text();
	let timestampRaw = $('.Timestamp').text();
	let timestamp = trimGMT( timestampRaw );
	let headline = headlineContainer.find('[class*="heading"]').text();
	let link;

	// TODO: Check container for this class before attempting to select it. This isn't the optimal solution
	let edgeAnchorTag = $('[class*="Component-link"]');


	if(index === 1 ) {
	}

	if( $.contains('[class*="Component-link"]') ) {
		link = $('[class*="Component-link"]').attr('href');
		console.log(link);
	} else {
		let a = headlineContainer.find('a');
		link = a.attr('href');
	}

	// Accounts for possibility of a missing byline
	return {
		headline,
		link,
		timestamp,
		byline
	}

}

module.exports = extractCardData;
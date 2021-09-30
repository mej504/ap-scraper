const Extractor = require('./extractor');
const Parser = require('./parser');
const { fetchNewsItems, fetchNewsPage } = require('./fetcher');

let parser = new Parser();

let testSlug = 'climate-change-science-animals-wildlife-fish-b6e61676548a1d7b2f81a6512cbed7a7';

test('should return headline, slug, timestamp and byline', () => {

	return fetchNewsItems('politics').then((data) => {

		let cards = parser.parseCards(data);
		let { headline, slug, timestamp, byline } = cards[0];

		expect(headline).toBeDefined();
		expect(slug).toBeDefined();
		expect(timestamp).toBeDefined();
		expect(byline).toBeDefined();

	})


})

test('should return headline, byline, timestamp and story copy', () => {

	return fetchNewsPage(testSlug).then((data) => {

		let { headline, timestamp, bylines, copy } = parser.parseNewsPage(data);

		expect(headline).toBeDefined();
		expect(timestamp).toBeDefined();
		expect(bylines).toBeDefined();

		expect(copy).toBeDefined();
		expect(copy.length).toBeGreaterThan(0);

	})

})


let extractor = new Extractor();

test('Trims GMT from string', () => {
	expect(extractor.trimGMT('September 30, 2017 GMT')).toBe('September 30, 2017');
})
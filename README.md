# AP News Scraper

A personal project, this utility fetches a handful of Associated Press stories from a range of available categories.

Categories so far include:
- U.S.
- World
- Politics
- Business
- Science
- Entertainment
- Religion

Users are offered the first three paragraphs of whichever story the select. A link is provided to continue reading the full story on Associated Press' website.

Pictures were deliberately excluded from this project. While web scraping is a notoriously gray area, it would become a great deal less gray in this context since Associated Press images are available only to subscribers of its wire service. It's not a bear I was willing to poke, frankly.

## Goals with this project

To better familiarize myself with React, as well as Node.js web scraping using the Cheerio module for parsing markup.

## Front-end

The front-end is built with React, and incorporates the react-router-dom module for basic routing functions. Styles are written in SCSS.

## Todos

[X] Implement implement placeholder cards while fetching news listings

[X] Create hamburger menu

[X] Remove hamburger for laptops and above

[X] Resolve edge case with unique component structure of some AP stories (e.g. /article/coronavirus-pandemic-nursing-homes-d1befe76a3a0680b57defb6d9f1cfb66)

[X] Add icons to news categories

[X] Replace .png icons with inline SVG

[ ] Tidy up and expand custom CSS properties

[ ] Use IndexedDB to cache stories and reduce requests to server

[ ] Create modal with disclaimer about nature of project

[ ] Use cookie to determine whether modal should render

[ ] Implement notice about cookies?

## Disclaimer

This app serves no purpose other than to showcase, and harden, my front- and back-end development skills. I will make **no profit** off this application. All stories I fetch from Associated Press are reduced to the first three paragraphs, after which a button redirects users to the official Associated Press article.
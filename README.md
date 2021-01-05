# Dungeon Map

![build](https://github.com/stevecochrane/dungeon-map/workflows/build/badge.svg)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/stevecochrane/dungeon-map/master.svg)](https://codecov.io/gh/stevecochrane/dungeon-map/)

This will hopefully, eventually be a web application for mapping out old
videogames, as you would back in the day with Metroid, Phantasy Star, etc. but
for now it's very much a work in progress. I'm mainly doing this as an excuse
to get more practice with React and Redux, but if this is useful/fun for
anyone, even better.

This is inspired by Jeremy Parish's
[Cart-ography](https://www.youtube.com/watch?v=RIUhIfD_bNQ&list=PLd3vJYdenHKH6_-QX1_mJX0WLlw6VeTEe)
series on YouTube, where he live-streams drawing out maps of games on graph paper
while playing them.

Here's how to get it running:

```bash
# Install dependencies
npm install

# Run JavaScript unit tests
npm test

# Lint test JavaScript
npm run lint:js

# Run in development mode
npm start

# Build for production
npm run build
```

## Roadmap

### Must-haves for 1.0

- [x] Add ability to click and drag to quickly select multiple rooms/walls
- [x] Add Door tool
  - Just one color to start should be enough for most cases
- [x] Adjacent active rooms should have connected backgrounds
  - This might be as simple as extending the background halfway into the gaps
    when active
  - Instead, the backgrounds have not been connected but the contrast between
    the lines and backgrounds are lower, so it looks natural
- [x] Add Note tool
  - This allows you to put a marker on any square with a custom note
  - When hovering over a marker, the note appears in a tooltip
- [ ] Find a clean way to allow for editing of Notes
  - This likely requires separate eraser tools to maintain consistency
- [ ] Style the tool palette
- [ ] Add ability to save to and load from local storage
- [ ] Add ability to customize the width and height of the map grid

## Architecture Notes

This is currently a 100% client-side-rendered React single page
application. The CSS is currently all from [Tailwind](https://tailwindcss.com/),
and the CSS is injected into the HTML so that there's no blocking HTTP request
for an external CSS file. For what the application is now, this works well and
rendering performance is very good.

However, I have considered a couple other approaches, and this is why I've not
pursued them yet.

### CSS-in-JS

I tried using CSS-in-JS, mainly to try out
[twin.macro](https://github.com/ben-rogerson/twin.macro) (a Babel plugin that
converts usage of Tailwind utilities to styled-components/Emotion CSS-in-JS).
But when compared to what I had before with Lighthouse, First Contentful Paint
and Time to Interactive both got a little slower on mobile, and they stayed the
same on desktop.

CSS-in-JS doesn't have much to offer for an app like this compared to Tailwind:
for example, one big benefit of CSS-in-JS is dead code elimination, but Tailwind
also achieves this through its "purge" feature. If I was to add more pages to
the app, or add significantly more styles to the current page, I can then see
some benefits because I could utilize code splitting to keep the initial styles
down to just what is needed for the initial view. But this app isn't there yet.

### Server-side Rendering with Next.js

The current app's HTML is a simple container element, and the actual DOM is
built out once the client-side JS bundle is downloaded and executed. If I had
server-side rendering in place, the initial view HTML could be in the initial
payload, which would speed up initial rendering times.

I tried a proof of concept using Next.js, because in my experience server-side
rendering adds a lot of complexity without it, but it wasn't a good fit for this
project yet either, because when using its static export the resulting JS bundle
is significantly larger (and split across significantly more HTTP requests) than
what I have now, and it includes a lot of features that aren't necessary for a
small, single-page app. But like above with CSS-in-JS, if this app expands to
need multiple pages with routing, then it might be a good fit.

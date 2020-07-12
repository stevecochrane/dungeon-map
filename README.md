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

# Lint test CSS
npm run lint:css

# Lint test JavaScript
npm run lint:js

# Run in development mode
npm run start

# Build for production
npm run build

# Run in production mode
npm run server
```

## Roadmap

### Must-haves for 1.0

- Add ability to click and drag to quickly select multiple rooms/walls
- Add Door tool
  - Just one color to start should be enough for most cases
- Adjacent active rooms should have connected backgrounds
  - This might be as simple as extending the background halfway into the gaps
    when active
- Add Note tool
  - This allows you to put a marker on any square with a custom note
  - When hovering over a marker, the note appears in a tooltip
- Add ability to save to and load from local storage
- Add ability to customize the width and height of the map grid

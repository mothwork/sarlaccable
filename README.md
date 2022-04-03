# Sarlaccable

Created by Brett Hageft using the SWAPI API

Have you ever wondered if someone in the Star Wars universe could be eaten and digested by the Sarlacc Pit? No longer must you guess at it, as Sarlaccable is the DEFINITVE answer to the question:

>*Can this character be eaten by the Sarlacc?*

### Features

Currently it used the SWAPI API to load all of the people, and then detemine if the person is edible and digestible by the Sarlacc Pit, it then displays the result in a grid with an eye catching yes or no.

### Technical Implementation

The SWAPI API returns paged JSON, so to load all of characters in one array- Sarlaccable loads an concatinates each page to a single array until it receives null as the next page. This was simple to implement as the SWAPI API functions as a doubly linked list.

### Tests

Tests are located in App.test.js, they can be run using `npm run test`.

## Future Features

Would be nice to add a search feature with debouncing to interact with the search feature of the API.

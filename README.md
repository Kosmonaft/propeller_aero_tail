# Propello Aero Challenge

## Installation
Install browser-sync globally
`npm install -g browser-sync`

Install Gulp-cli globally
`npm install -g gulp-cli`

Install All packages for this repository
`npm install`

## Start the program
Open your terminal and type (It will start the build and a localserver)
`gulp`

## Descriptions
The app is displaying the tiles from "tiled" folder.
It has the basic functionality of zooming (it's limited to 3 as the tiled folders are up to 3) and scrolling.
There are 3 buttons under the map which have the following functionality:

* __Locate the drone__ - create a polygon layer over the dron on the map, center the map with zoom 1
* __Locate the flower__ - create circle layer over the flower on the map, center the map with zoom 1
* __Reset__ - Remove the __drone__ and __flowe__ layer, center the map with zoom 1

The reason why I decide to implement such feature is because the main purpose of using a map is to locate different objects (or for navigation).


## Notes
For this challenge I decided to use [leaflet.js](https://leafletjs.com)
Didn't want to use any frameworks such as Vue.js, Angular or React as I wanted to keep it as simple as possible.

If I had more time (more than 2-3 hours) I would implement some tests.

# Virtual Vacay Vacation App

An App that allows you take a virtual vacation wherever you are.

## Overview

The Virtual Vacation App will allow the user to search for a location of their choosing and view a high definition
video along with a Soundcloud embedded track. The user also has the option to add their own vacation with a YouTube 
video of their choice and a SoundCloud embedded track. 

Disclaimer: This project is mainly built for learning purposes and not intended for production use.

## Installation
```
>   git clone https://github.com/brianmsj/vacation_app.git
>   cd vacation_app
>   npm install
```
### Launching
```
>   npm run dev
```
Then open [`localhost:8000`](http://localhost:8000) in a browser.
### Testing
```
>   npm run test
```
Note on compatibility: The API relies on NodeJS v6.3.1.  All other dependencies are listed in the _package.json_ file. Although the API might run on alternative versions, it has not been tested.

## About
Today, Americans and people around the world. In fact, a recent study from <a href="http://news.harvard.edu/gazette/story/2011/01/eight-weeks-to-a-better-brain/">Harvard</a> showed that meditation can lead to changes in brain structure that provide cognitive and psychological benefits. Breathe is an experimental application that seamlessly combines API data from YouTube and SoundCloud to help the user find peace of mind by presenting relaxing imagery and sounds in full-screen format.

## How it Works
Users are able to choose between 4 different scenes, each with its own accompanying audio. Although the video is embedded from YouTube and the audio is embedded from SoundCloud, the files were handpicked and carefully edited to provide the user with a seamless experience.
<img src="./images/breathe_wireframe.JPG">
After 5 second of inactivity, all components (including the mouse but excluding the video) will fade out to really help immerse the user in the currently selected scene.

### Caveat
Due to the experimental design of the application and the inability of mobile devices to autoload video and audio media, an image that kindly requests the user to view the application on a larger viewport has been implemented below a width of 600px.

## Technology
* HTML5
* CSS3
* JavaScript
* jQuery
* React
* Redux
* React-Router
* <a href="https://mochajs.org/">Mocha</a> + <a href="http://chaijs.com/">Chai</a> (testing)
* Continuous integration and deployment with <a href="https://travis-ci.org/">Travis CI</a>

### API
* YouTube
* SoundCloud

# Presidential Pinterest

By _Brittany Kerr_ [e-mail me](<mailto:kerrbrittany9@gmail.com>)

## Description

What has Barack Obama been doing since he left office? Pinning! Or perhaps you can help him pin. The user an enter a title and topic to pin and it will appear on his feed. It will also appear on Michelle's feed too! What a couple.

![Home](src/assets/img/intro.png)
Users can add a pin to Mr Obama's page.

![Start Pinning Barry](src/assets/img/barry.png)
Users can add or delete and the list will show on his page!

![Oh that Barry](src/assets/img/michelle.png)
Wait! It will also get routed to Michelle's page too!


## Prerequisites

You will need the following things properly installed on your computer:
* [Node.js](https://nodejs.org/) (with NPM)

## Installation

* Open Github site in your browser and copy: https://github.com/kerrbrittany9/pinterest
* Open Terminal on your computer and follow these steps:
  * `$ cd desktop`
  * `$ git clone <paste repository-url>`
  * `$ cd pinterest`
  * `$ npm install`

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.


## Technologies Used

React.js, Redux, JavaScript, Babel, Jest, react-hot-loader, webpack, Node.js, CSS, HTML

## Process

This web app is meant to be a practice in integrating Redux into a React.js project. The first step was to put component architecture in place, which meant allowing for presentational components to show a profile and pin list. The Board Component is data source, thus holds state as a container component. This state is passed to it's children. I utilized Jest unit testing to test the add-pin function. Lastly, I implemented a route to Michelle's Pinterest page and passed state by connecting to React Redux via connect() in order to allow for Barry's posts to be evident on her page. 

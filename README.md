# Country app v.1.0

This repository contains a React application that displays a list of countries and some of their details. The app uses the `useFetch` custom hook to fetch data from a public API and `useReducer` to manage the state of the countries.

## Installation and Usage

1.  Clone this repository using `git clone https://github.com/signal-tenet/countries-app.git`
2.  Navigate into the project directory using `cd countries-app`
3.  Install dependencies using `npm install`
4.  Run the application using `npm start`
5.  Access the application by visiting `http://localhost:3000` in your browser

## Functionality

This React application allows users to search, sort, and view country data from a REST API. The app fetches the country data using a custom hook called `useFetch` and displays it in a table. Users can search for countries by name or capital city, sort the table in ascending or descending order by country name, and delete countries from the app (not the API).

## Technologies

This application was built using the following technologies:

-   React
-   React Hooks
-   HTML
-   CSS
-   RESTful APIs

## Components

The application is composed of the following components:

-   `Header`: Displays the header of the application.
-   `Countries`: Renders the list of countries and their details.
-   `Country`: Renders the details of a single country.
-   `Footer`: Displays the footer of the application.

## API

This application uses the [REST Countries API](https://restcountries.com/) to fetch data about countries. The data is fetched using the `useFetch` custom hook and stored in the application state using `useReducer`.

## Deploy link:

[https://scintillating-smakager-9d7c2e.netlify.app/](https://scintillating-smakager-9d7c2e.netlify.app/)

## Contributors

This application was created by:

-   [Roman Ivaniuk](https://github.com/theRomeo505)
-   [Oleh Yashtulov](https://github.com/signal-tenet/)
-   [Georgios Tsompanidis](https://github.com/Georgios11)

## License

This project is licensed under the MIT License.

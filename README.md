[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<br />

  <h3 align="center">Searching Books</h3>

  <p align="center">
    Get books data from the Google Books API.
    <br />
    



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#available-scripts">Available Scripts</a>
      <ul>
        <li><a href="#npm-start">npm start</a></li>
        <li><a href="#npm-test">npm test</a></li>
        <li><a href="#npm-run-build">npm run build</a></li>
        <li><a href="#npm-run-eject">npm run eject</a></li>
        <li><a href="#learn-more">Learn more</a></li>
      </ul>
    </li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A simple single page app developed with React and Redux, starting with create-react-app with the redux template, that get and display books data from the Google Books API.

### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [ReactRouterDom](https://reactrouter.com/)
* [MDBootstrapReact](https://mdbootstrap.com/docs/b5/react/)
* [Lodash](https://lodash.com/)
* [Axios](https://github.com/axios/axios)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [Google](https://developers.google.com/books/docs/v1/using)
2. Clone the repo
   ```sh
   git clone https://github.com/OmarManganese/searching-books.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a .env file in the root folder and write(as in env.example)
   ```JS
   REACT_APP_GOOGLE_API_KEY = your API key
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
## Demo
You can try a demo at [this link](https://searching-books-320206.web.app/).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Omar Manganese - [Facebook](https://www.facebook.com/omar.manganese) - omarmanganese@gmail.com

Project Link: [https://github.com/OmarManganese/searching-books](https://github.com/OmarManganese/searching-books)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Google Books APIs](https://developers.google.com/books)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)



[contributors-shield]: https://img.shields.io/github/contributors/OmarManganese/searching-books?style=for-the-badge
[contributors-url]: https://github.com/OmarManganese/searching-books/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/OmarManganese/searching-books?style=for-the-badge
[forks-url]: https://github.com/OmarManganese/searching-books/network/members
[stars-shield]: https://img.shields.io/github/stars/OmarManganese/searching-books?style=for-the-badge
[stars-url]: https://github.com/OmarManganese/searching-books/stargazers
[issues-shield]: https://img.shields.io/github/issues/OmarManganese/searching-books?style=for-the-badge
[issues-url]: https://github.com/OmarManganese/searching-books/issues
[license-shield]: https://img.shields.io/github/license/OmarManganese/searching-books?style=for-the-badge
[license-url]: https://github.com/OmarManganese/searching-books/blob/main/LICENSE.txt
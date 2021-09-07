## About-Me

TweetWorld 

A single-page-application which serves as a resume website, built with Vue 2, JavaScript, and CSS/SASS.

---

## Installation and Setup Instructions

### Project Installation
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Features

* SPA built with Vue2
* Responsive design
* PWA (init status) 
<br><br>
* Bootstrap / Bootstrap-Vue / Bootstrap-Icon
* Cloudinary media library
* Firebase 
* Axios
<br><br>
* Animated background
* Page loading ovelay
* Progress animation
* Image gallery
* Message board
<br><br>

---

## Project Status

This project is currently in development. Users can visit the home, work and life pages. 

Page structure and home page are almost done. 

### TODOs:
* Global
  * ~~Icons~~ & Font
  * ~~Boostrap~~
  * ~~Page overlay when loading~~
  * ~~Import only used bootstrap components~~
  * ~~Vuex globally import~~
  * Authentication (Firebase access)
  * PWA
  * Testing
* Work page:
  * Add project icons
* Life page: 
  * ~~Message board~~ (form validation, firebase, ref: https://webmobtuts.com/frontend-development/vuejs-tutorials/building-a-simple-forum-with-vue-js-vuex-and-firebase-part1-authentication/)
  * ~~Image gallery (lazyload)~~
  * ~~Backgroud~~
  * Add two background mode (switcher toggle https://vuejsexamples.com/a-customizable-rocker-switch-component-for-vue-js/) -> Unify background css
  * generate video from images in image gallery with FFmpeg

---

## NPM package update notes
* Please do not update following packages to avoid incompatibilitiy (06.09.2021)
* sass-loader   ^10.1.1 
* bootstrap     ^4.5.3
* swiper        ^6.8.2
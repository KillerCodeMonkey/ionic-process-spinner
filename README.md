# ionic-process-spinner

ionic-process-spinner is an [Angular.js](http://angularjs.org/) and [Ionic Framework](http://ionicframework.com/) extension. It provides the ionProcessSpinner directive to show a loading spinner until a process has finished. It replaces the child content with a loading spinner while processing.

Installation
============
- run `bower install ionic-process-spinner`
- or run `npm install ionic-process-spinner`
- or download zip from release page: https://github.com/KillerCodeMonkey/ionic-process-spinner/releases

Demo
====
![ionic-process-spinner](https://cloud.githubusercontent.com/assets/2264672/9417552/9409205c-484d-11e5-9364-7e2ab0f0c293.png)
![ionic-process-spinner-active](https://cloud.githubusercontent.com/assets/2264672/9417551/93f86136-484d-11e5-8bb8-45b4525df3d2.png)

Usage
=====
- load ionic, ionic-process-spinner scripts in your index.html
- add dependency to your app module `var myAppModule = angular.module('ionicProcessSpinnerTest', ['ionic', 'ionicProcessSpinner']);`
- use directive in your html --> ion-content-loader
- `<ion-process-spinner css-class="spinner-calm" spinner="crescent" processing="isProcessing"><b>My Content Loader</b></ion-process-spinner>`
- the content of the ion-process-spinner element is hidden until the associated processing attribute is false
- during processing is true a loading spinner is shown
- an usecase example: You do not want to block the whole view vie $ionicLoading if a request is processing after a user clicked on a button to send previously filled out inputs. IonProcessSpinner only hides the submit button and shows a loading spinner.

Configuration
=============
- set spinner: `spinner="crescent"` (optional, default: platform dependent)
- set if processing: `processing="isProcessing"` (required), a scope variable to switch content with loading spinner
- css-class: `css-class="spinner calm"` (optional), a optional css-class to style the spinner

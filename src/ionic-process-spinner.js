/* global angular */
(function () {
    'use strict';
    var app;
    // declare ionicScroller module
    app = angular.module('ionicProcessSpinner', ['ionic']);

    app.directive('ionProcessSpinner', [
        function () {
            return {
                scope: {
                    'cssClass': '@?',
                    'processing': '=',
                    'spinner': '@?'
                },
                restrict: 'E',
                transclude: true,
                template: '<div ng-transclude="" ng-if="!processing"></div><ion-spinner ng-if="processing" ng-class="cssClass" class="center" icon="{{spinner || \'crescent\'}}"></ion-spinner>'
            };
        }
    ]);
}).call(this);

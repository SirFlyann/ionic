angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('quiz', {
    url: '/page1',
    templateUrl: 'templates/quiz.html',
    controller: 'quizCtrl'
  })

  .state('criarConta', {
    url: '/page2',
    templateUrl: 'templates/criarConta.html',
    controller: 'criarContaCtrl'
  })

  .state('page3', {
    url: '/page3',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('pontuaEs', {
    url: '/page4',
    templateUrl: 'templates/pontuaEs.html',
    controller: 'pontuaEsCtrl'
  })

  .state('bemVindo', {
    url: '/page5',
    templateUrl: 'templates/bemVindo.html',
    controller: 'bemVindoCtrl'
  })

  .state('quePena', {
    url: '/page8',
    templateUrl: 'templates/quePena.html',
    controller: 'quePenaCtrl'
  })

  .state('muitoBem', {
    url: '/page9',
    templateUrl: 'templates/muitoBem.html',
    controller: 'muitoBemCtrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});
angular.module('civic.event')
  .controller('GeneCtrl', GeneCtrl)
  .config(geneConfig);

// @ngInject
function GeneCtrl($scope, $rootScope, $stateParams, $resource, $log, $http) {
  'use strict';
  $log.info('GeneCtrl loaded.');
  var geneId = $stateParams.geneId;

  $rootScope.viewTitle = 'Gene ' + geneId;
  $rootScope.navMode = 'sub';
  $scope.gene = {};


  var Api = $resource('/geneDataMock');
  Api.get({ 'id': geneId }, function(data) {
    $scope.gene = data.result;
  });
}

// @ngInject
function geneConfig($stateProvider) {
  'use strict';
  console.log('geneConfig called');
  $stateProvider
    .state('gene', {
      url: '/gene/:geneId',
      controller: 'GeneCtrl',
      templateUrl: '/civic-client/views/gene/gene.tpl.html'
    });
}
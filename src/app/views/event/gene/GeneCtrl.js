(function() {
  'use strict';
  angular.module('civic.event')
    .controller('GeneCtrl', GeneCtrl);

// @ngInject
  function GeneCtrl($scope, $rootScope, $stateParams, Genes, $log) {
    $log.info('GeneCtrl loaded.');
    var geneId = $stateParams.geneId;

    $rootScope.setNavMode('sub');
    $rootScope.setTitle('Event ' + geneId + ' / ');

    $scope.gene = Genes.query({ geneId: $stateParams.geneId });
  }
})();
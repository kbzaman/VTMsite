var app = angular.module("site");

app.controller("LoadController",
['LoadService', '$scope',
 function(LoadService, $scope){

  this.loadPage = "./characterData/load.html";


  this.loadClick = loadClick;
  function loadClick(charName){
    LoadService.loadClick(charName);
  }

  var self = this;
  this.loadChars = loadChars;
  function loadChars(){
    LoadService.loadChars();
    setTimeout(function(){
      $scope.$apply();
    }, 600);
  }

  this.userCharacters = userCharacters();
  function userCharacters(){
    return LoadService.userCharacters;
  }
}]);

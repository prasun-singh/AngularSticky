//"use strict";

var noteApp = angular.module('noteApp', ['ngStorage']);

noteApp.controller('noteController', function($scope,$localStorage) {
    
    'use Strict';
 
    if($localStorage.note !=null){
            $scope.toDoNotes = $localStorage.note;
    }
    else{
        $scope.toDoNotes = [];
    }


        
    /*
     add a new note and stored into localstorage
    */
    $scope.addNote = function(){
        var date = new Date();
        var timestamp = date.getTime() + (date.getTimezoneOffset() * 60000);
        var newDate = new Date(timestamp + (3600000*(+5.5)));
        var noteObject = {
           title : $scope.title ,
           content  : $scope.content,
           timestamp : newDate.toLocaleString()
        }
        $scope.toDoNotes.unshift(noteObject);
        saveToDoNote();
        $scope.title = "";
        $scope.content  = "";
    }
    
    
    //saving the toDoNotes to localstorage after crud operations
    function saveToDoNote(){
        $localStorage.note = $scope.toDoNotes;
        return false;
      }
    
    /*updtae a note*/
    $scope.updateNote = function(note){
        $scope.toDoNotes.indexOf(note).title = $scope.title ;
        $scope.toDoNotes.indexOf(note).content = $scope.content;
        saveToDoNote();
    }
    
    /*deletes a note*/
    $scope.deleteNote = function(note){
        $scope.toDoNotes.splice($scope.toDoNotes.indexOf(note), 1);
        saveToDoNote();
    }
    

    });
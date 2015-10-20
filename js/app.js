

(function(){
'use strict';

angular.module('moviesList', [])

.controller('MoviesListController', function(){
  this.movies = movies;
  this.genres = genres;
  this.showForm = false;
})

.directive('movieGenres', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/movie-genres.html',
    scope: {
      genres: '='
    }
  }
})

.directive('moviePoster', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/movie-poster.html',
    replace: true
  }
})

.directive('reviewForm', function(){
  return {
    restrict: 'E',
    templateUrl: 'partials/review-form.html',
    replace: true,
    controller: function(){
      this.movies = {genres:{}};

      this.addReview = function(form){
        movies.push(this.movie);
        this.movie = {genres:{}};
        form.$setPristine();
      }
    },
    controllerAs: 'reviewFormCtrl',
    scope: {
      movies: '=',
      genres: '='
    }
  }
});


var genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

var movies = [
  {
    title: 'Bahubali',
    directedBy: 'SS.Rajamouli',
    cast:'Prabhas,Rana,Anushka,Tammanna,RamyaKrishnan,Naser',
    year:'2015',
    language:'Telugu',
    review: "The most inventive and entertaining fantasy movie. Highest revenue film in India known for graphics",
    rating: 5,
    genres: { fiction: true, fantasy: true }
  },{
    title: 'Taare Jameen Par',
    directedBy: 'Amir Khan',
    cast :'Darsheel Safary',
    year: '2007',
    language: 'Hindi',
    review: "An educative movie about parents and children in India.",
    rating: 5,
    genres: { fiction: true }
  }
];
})();

"use strict";

// 1)
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

// 2)
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// 3)

let answerFirstHowFilmIsWatched = prompt('Один из просмотренных фильмов?',''),
    answerFirstFilmsNote = prompt('Какую оценку поставите?',''),
    answerSecondHowFilmIsWatched = prompt('Один из просмотренных фильмов?',''),
    answerSecondFilmsNote = prompt('Какую оценку поставите?','');

personalMovieDb.movies[answerFirstHowFilmIsWatched] = answerFirstFilmsNote;
personalMovieDb.movies[answerSecondHowFilmIsWatched] = answerSecondFilmsNote;

console.log(personalMovieDb);
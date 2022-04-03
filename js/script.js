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

for(let i = 1; i <= personalMovieDb.count; i++){

    let answerHowFilmIsWatched,
    answerFilmsNote;

    answerHowFilmIsWatched = prompt(`Как называется фильм №${i}?`,'');

    if(answerHowFilmIsWatched == null || answerHowFilmIsWatched.length == 0 || answerHowFilmIsWatched.length > 50){
        i--;
        alert('Название не может быть пустым, или иметь длину, превышающую 50 символов')
        continue;
    }

    answerFilmsNote = prompt(`Оцените фильм №${i}`,'');

    personalMovieDb.movies[answerHowFilmIsWatched] = answerFilmsNote;
}

let definition = '';

personalMovieDb.count > 30 
    ? definition = 'Вы киноман' 
    : (personalMovieDb.count > 10 
        ? definition = 'Вы классический зритель' 
        : definition = 'Просмотрено довольно мало фильмов');

console.log(personalMovieDb.movies);
console.log(definition);
"use strict";


let numberOfFilms,
    definition;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

function rememberMyFilms(){
    for(let i = 1; i <= personalMovieDb.count; i++){

        let answerHowFilmIsWatched,
        answerFilmsNote;
    
        answerHowFilmIsWatched = prompt(`Как называется фильм №${i}?`,'');
    
        if(answerHowFilmIsWatched == null || answerHowFilmIsWatched.length == 0 || answerHowFilmIsWatched.length > 50){
            i--;
            continue;
        }
    
        answerFilmsNote = prompt(`Оцените фильм №${i}`,'');
    
        personalMovieDb.movies[answerHowFilmIsWatched] = answerFilmsNote;
    }
}

function detectPersonalLevel(){
    if(personalMovieDb.count > 30){
        definition = 'Вы киноман';
    } else if (personalMovieDb.count > 10 ){
        definition = 'Вы классический зритель';
    }
    else if(personalMovieDb.count <= 10){
        definition = 'Просмотрено довольно мало фильмов';
    }
    else{
        definition = 'Ошибка';
    }
}

start();
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    personalLevel: ''
};
rememberMyFilms();
detectPersonalLevel();
personalMovieDb.personalLevel = definition;

function showMyDB(){
    if(personalMovieDb.private){
        console.log('Внимание, нет прав для просмотра объекта');
    } else{
        console.log(personalMovieDb);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        personalMovieDb.genres[i] = prompt(`Ваш любимый жанр под номером ${i}?`,'');
    }
}
writeYourGenres();
showMyDB();
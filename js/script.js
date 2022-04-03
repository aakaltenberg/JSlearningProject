"use strict";


const personalMovieDb = {
    count: +'',
    movies: {},
    actors: {},
    genres: [],
    private: false,
    personalLevel: '',
    start: function () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 1; i <= this.count; i++) {

            let answerHowFilmIsWatched,
                answerFilmsNote;

            answerHowFilmIsWatched = prompt(`Как называется фильм №${i}?`, '');

            if (answerHowFilmIsWatched == null || 
                answerHowFilmIsWatched.length == 0 || 
                answerHowFilmIsWatched.length > 50) {
                i--;
                continue;
            }

            answerFilmsNote = prompt(`Оцените фильм №${i}`, '');

            this.movies[answerHowFilmIsWatched] = answerFilmsNote;
        }
    },
    detectPersonalLevel: function () {
        if (this.count > 30) {
            this.personalLevel = 'Вы киноман';
        } else if (this.count > 10) {
            this.personalLevel = 'Вы классический зритель';
        } else if (this.count <= 10) {
            this.personalLevel = 'Просмотрено довольно мало фильмов';
        } else {
            this.personalLevel = 'Ошибка';
        }
    },
    showMyDB: function () {
        if (this.private) {
            console.log('Внимание, нет прав для просмотра объекта');
        } else {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let tmpGenres = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
            if(tmpGenres == null || tmpGenres =='' || tmpGenres.isNaN){
                i--;
                continue;
            }
            this.genres[i] = tmpGenres;
        }
        this.genres.forEach(function(item, index){
            console.log(`Любимый жанр №${index+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        this.private = !this.private;
    }
};

personalMovieDb.start();
personalMovieDb.rememberMyFilms();
personalMovieDb.writeYourGenres();
personalMovieDb.detectPersonalLevel();
personalMovieDb.showMyDB();
personalMovieDb.toggleVisibleMyDB();
personalMovieDb.showMyDB();
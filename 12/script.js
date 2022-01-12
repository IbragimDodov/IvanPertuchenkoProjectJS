"use strict";


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
  
    while (personalMovieDB.count == '' || personalMovieDB.count == 'null' || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
    
      if (a != 'null' && b != 'null' && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log("просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >=10 && personalMovieDB.count < 30) {
      console.log('вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('вы киноман');
    } else {
      console.log('произошла ошибка');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if(genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вообще');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};






// let options = {
//   name: 'alex',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red',
//     overHead: {
//       tv: 'plazma',
//       header: 'wood',
//     },
//     stack: 'flow',
//   },
//   main: 'teacher',
//   round: ['led', 1, 7, 54, 'oon'],
//   makeTest: function() {
//     console.log('how are you');
//   }
// }


// поверхностная копия объекта
// function copy(mainObj) {
//   let objCopy = {};

//   for (let key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }
// const newNumbers = copy(options);
// console.log(newNumbers);

// console.log(options.colors.overHead);
// console.log(Object.keys(options).length);
// const {tv, header } = options.colors.overHead;
// console.log(tv);
// console.log(header);
// console.log(Object.keys(options).length);
// деструктуризация
// const {border, bg} = options.colors;
// console.log(border);


// let round = ['led', 1, 7, 54, 'oon'];

// round.forEach(function(item, i, round) {
//   console.log(`${i} : ${item} в массиве ${round}`);
// })
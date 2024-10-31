"use strict";
let friends1 = ['halima', 'sadia'];
let friends2 = ['samira', 'meherin'];
friends1.push(...friends2);
let mentor1 = {
    next: "tonmoy bhai"
};
let mentor2 = {
    typescript: "mezba bhai"
};
let mentors = Object.assign(Object.assign({}, mentor1), mentor2);

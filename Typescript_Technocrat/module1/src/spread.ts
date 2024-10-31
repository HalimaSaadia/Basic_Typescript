let friends1 : string [] = ['halima', 'sadia']
let friends2 : string [] = ['samira' , 'meherin']
friends1.push(...friends2)

let mentor1 = {
    next: "tonmoy bhai"
}
let mentor2 = {
    typescript: "mezba bhai"
}

let mentors = {
    ...mentor1, 
    ...mentor2
}

"use strict";
const greetingFriends = (...friends) => {
    friends.forEach(friend => console.log(` Hi ${friend}`));
};
greetingFriends("Halima", "Sadia", "Jannat", "Arshi");

const greetingFriends = (...friends : string []) => {
    friends.forEach(friend => console.log(` Hi ${friend}`))
}

greetingFriends("Halima", "Sadia", "Jannat", "Arshi")
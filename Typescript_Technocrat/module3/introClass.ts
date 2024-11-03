{
    class Animal {
       

        constructor(public name:string, public sound:string){ }

        makeSound(){
            console.log(`${this.name} says ${this.sound}`)
        }
    }

    const cat = new Animal("cat", "Mew Mew")
    cat.makeSound()
}
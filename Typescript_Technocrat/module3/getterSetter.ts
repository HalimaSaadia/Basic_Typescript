{
    class BankAccount {
        constructor(public readonly id : number, public name: string, public balance: number){}

        // setter
       set addDeposite(amount:number){
             this.balance = this.balance + amount
        }

        // getter

        get getBalance(){
           return this.balance
        }
    }

    const poorPerson = new BankAccount(111, "Poor Person", 50 )
    poorPerson.addDeposite = 50
    // console.log(poorPerson.getBalance())
    
}
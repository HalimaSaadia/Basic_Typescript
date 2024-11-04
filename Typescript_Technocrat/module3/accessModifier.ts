{
    class Bankaccount {
        constructor(public id:number ,public name: string, private _balance:number ){}
        addDeposite(amount:number){
          return   this._balance = this._balance + amount
        }
    }

    const getBankAccount = new Bankaccount(111, "Halima", 20)
    const balance =  getBankAccount.addDeposite(20)
    console.log(balance)

}
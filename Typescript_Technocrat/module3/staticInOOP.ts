{
    class Count {
       static balance:number = 0

      static increment(){
        return Count.balance = Count.balance + 1
       }
      
    }

    const instance = new Count()
    console.log(Count.increment())
    console.log(Count.increment())
    console.log(Count.increment())
}
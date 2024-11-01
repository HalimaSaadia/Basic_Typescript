{
    type User = {
        name:string;
        address : {
            presentAddress:string;
            parmanentAddress?:string
        }
      
    }

    const user1 : User = {
        name: "Halima",
       address: {
         presentAddress: "Adabor 3"
       }
    } 

    const {address:{parmanentAddress}} = user1
    const result = parmanentAddress ?? "Not Found Parmanet Address"
    console.log({result})
}
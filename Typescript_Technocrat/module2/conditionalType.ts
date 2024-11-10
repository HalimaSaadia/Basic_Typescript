{
    type Sheikh = {
        car:string;
        ship:string;
        plane:string;
    }

    type Vehicle<T> = T extends keyof Sheikh ? true : false
    type hasTractor =  Vehicle<"Tractor">
   const tractor : hasTractor =  false
}
{
    type Student = {
        name: string;
        contact? : string;
        gender : string;
        age ?: number
    }

    const student1 : Student = {
        name: "Halima",
        gender : "Female"
    }

    type Add = (num1:number, num2:number) =>  number

    const add:Add = (num1, num2) =>   num1 + num2
    add(5,5)
} 
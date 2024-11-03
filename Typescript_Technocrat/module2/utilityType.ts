{
    type Person = {
        name : string; 
        age: string;
        email?: string;
        contact:string
    }

    // Pick utility
    type NameAge = Pick<Person, "age" | "name">

    // Omit utilty 
    type Contact = Omit<Person, "age" | "name">

    // Required
    type Person1 = Required<Person>

    // Partial
    type Person2 = Partial<Person>
}
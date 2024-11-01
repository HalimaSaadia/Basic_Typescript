{
  type group1 = "A+" | "O+" | "B+"
  type group2 = "A-" | "O-" | "B-"

    type User = {
        name: string;
        email?:string;
        gender: "male" | "female" ;
        blood: group1 | group2
    }

    const user1 : User = {
        name: "",
        gender: "female",
        blood: "B+"
    }
}
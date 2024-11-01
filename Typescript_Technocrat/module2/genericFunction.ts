{
    const createArray = <T>(value: T) : Array<T> => [value]

    type User = {
        id: number
        name :string;
    }

    const result1 = createArray<string>("x")
    const result2 = createArray<number>(0)
    const result3 = createArray<User>({id:222,name:"Halima"})

    const createArrayWithTuple = <T, Q=5>(num1:T, num2:Q) => [num1, num2]
    createArrayWithTuple<number>(5, 5)
}
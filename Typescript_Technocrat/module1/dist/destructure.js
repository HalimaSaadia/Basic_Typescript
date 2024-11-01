"use strict";
{
    const user = {
        id: 1,
        name: {
            firstName: "Halima",
            midddleName: "Tus",
            lastName: "Sadia",
        },
        contact: "0188000000",
    };
    const { name: { firstName }, } = user;
    console.log(firstName);
}

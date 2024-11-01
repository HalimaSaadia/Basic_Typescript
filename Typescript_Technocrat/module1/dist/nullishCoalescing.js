"use strict";
{
    const user1 = {
        name: "Halima",
        address: {
            presentAddress: "Adabor 3"
        }
    };
    const { address: { parmanentAddress } } = user1;
    const result = parmanentAddress !== null && parmanentAddress !== void 0 ? parmanentAddress : "Not Found Parmanet Address";
    console.log({ result });
}

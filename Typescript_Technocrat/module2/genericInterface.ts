{
    interface Developer<T, X=null> {
        name: string;
        brand: string;
        display: string;
        smartWatch: T
    }

    const poorDeveloper:Developer<{
        name:string;
        price: number
    }> = {
        name: "Folio 9480m",
        brand: "HP",
        display: "Full HD",
        smartWatch: {
            name: "Samsung", 
            price : 5000
        }
    }
    const richDeveloper:Developer<{
        name: "apple";
        sleepTracking: boolean;
        heartTracking: boolean
    }> = {
        name: "Folio 9480m",
        brand: "HP",
        display: "Full HD",
        smartWatch: {
            name: "apple", 
            sleepTracking : true,
            heartTracking: true
        }
    }
}
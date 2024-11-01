{
    type FrontendDeveloper = {
        skills : string[];
        designation1 : "Front End Developer";
    }
    type BackendDeveloper = {
        skills : string[],
        designation2 : "Backend End Developer";
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper


    const developer : FullstackDeveloper = {
        skills : ["html", "css", "js"],
        designation1: "Front End Developer",
        designation2:"Backend End Developer"
    } 
}
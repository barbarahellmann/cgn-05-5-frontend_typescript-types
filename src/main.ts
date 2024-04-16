
// Types & Interfaces


interface Person {
    name: string;
    age: number;
    isAdmin: boolean
}


type Person2 = {   // im Bootcamp werden wir hauptsächlich type verwenden
    name: string;
    age: number;
    isAdmin: boolean
}

const person: Person2 = {
    name: "Martin",
    age: 38,
    isAdmin:true
}


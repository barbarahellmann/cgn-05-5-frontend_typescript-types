
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

// Literals = übergeben mehrere Werte

type TrafficLightLights = "red" | "yellow" | "green"

    let currentTrafficLights: TrafficLightLights = "green"   // Literals verwenden


// Calculator example

type Operator = "add" | "subtract" | "multiply" | "divide"  // Types werden immer groß geschrieben


type Input = {  // Deklarierung der Zahl
    operator:Operator;
    operands: [number, number]  // number kann auch Komma-Zahlen enthalten
}

const input: Input =  {  // Übergabe der Werte
    operator: "add",
    operands: [5,3]
}

function calculate(input:Input): number { //Funktion
    switch (input.operator) {
        case "add":
            return input.operands[0] + input.operands[1];
        case "subtract":
            return input.operands[0] + input.operands[1];
        case "multiply":
            return input.operands[0] + input.operands[1];
        case "divide":
            return input.operands[0] + input.operands[1];
        default:
            throw new Error("Invalid operator")
    }
}

const result: number = calculate(input); // Ausgabe der Ergebnisses
console.log("Result:", result);




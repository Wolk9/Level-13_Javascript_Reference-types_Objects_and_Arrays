// Opdracht: Reference types: Objects & Arrays
// Deel 1 Objecten:

//let Person = {
//  name: "Martin", // 4
//  age: 49, // 5
//  evaluations: [7, 10, 9], // 7
//}

//let dotted_outcome = Person.age; // 6
//let bracket_outcome = Person['name']; // 6

//let outcome = Person.evaluations; // 8

//console.log(Person); // 3
//console.log(Person.name); // 4
//console.log(Person.age); // 5
//console.log(dotted_outcome); // 6
//console.log(bracket_outcome); // 6
//console.log(outcome); // 8

// Deel 2 Arrays:

// let Kleuren = ["groen","blauw","rood"]; // 1, 2

// Kleuren.push("geel"); // 7

// Kleuren.push(5); // 8

// Kleuren.push({greeting: "hi ik ben een object"}); // 9

// let eerste = Kleuren[0]; // 5
// let laatste = Kleuren[Kleuren.length - 1]; // 6

//console.log(Kleuren); // 3
//console.log(Kleuren.length); // 4
//console.log(eerste); // 5
// console.log(laatste.greeting); // 6, 10

// Deel 3: Bekijk een "real-life" object:

const catBreeds = [
  {
    name: "Abyssinian",
    description:
      "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: [
      "Active",
      "Energetic",
      "Independent",
      "Intelligent",
      "Gentle"
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
      favourite_food: "fish",
      medium_liked_food: "dried fruits",
      disliked_food: "walnuts"
    }
  },
  {
    name: "Aegean",
    description:
      "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
      favourite_food: "tuna",
      medium_liked_food: "canned food",
      disliked_food: "all fruits"
    }
  },
  {
    name: "American Bobtail",
    description:
      "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [
      "Intelligent",
      "Interactive",
      "Lively",
      "Playful",
      "Sensitive"
    ],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
      favourite_food: "meaty things",
      medium_liked_food: "tuna",
      disliked_food: "canned food"
    }
  }
];

console.log("Herkomst Laatste kat:", catBreeds[catBreeds.length - 1].name); // 1
console.log("Energy level 1e kat:", catBreeds[0].energy_level); // 2
console.log("1e temperament 2e kat:", catBreeds[1].temperament[0]); // 3
console.log(
  "laatste temperament 3e kat:",
  catBreeds[2].temperament[catBreeds[2].temperament.length - 1]
); // 4
console.log("Favourite food:", catBreeds[2].food.favourite_food); // 5

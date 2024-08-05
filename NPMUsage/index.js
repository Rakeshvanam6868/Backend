//var generateName = require('sillyname');
import generateName from "sillyname";
//import generateSuperHeroes from "superheroes";
var sillyName = generateName();

import superheroes from "superheroes";
 
const superHero = superheroes.random();

console.log(`Here the superHero is ${superHero}`);

console.log(`your sillyname is ${sillyName}`);
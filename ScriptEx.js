// for (let index = 0; index < 11; index++) {
//     console.log("Dans la boucle : "+index);
// }
// console.log("Hors la boucle : "+index);

// let names = "Bayekula Mwadi Hobed";
// if(names.length>1){
//     let a = 12;
//     let b = 24;

//     console.log("Inside "+a);
//     console.log("Inside "+b);
// }
// console.log("Outside "+a);
// console.log("Outside "+b);

// let nom = "Bayekula";
// let postname = "Mwadi";
// let firstname ="Hobed";

// console.log(`Votre nom est ${nom}, votre post nom est ${postname} et votre prénom ${firstname}`);
// console.log("Votre nom est ${nom}, votre post nom est ${postname} et votre prénom ${firstname}");

// const Identi = "Bayekula Mwadi Hobed";
// for (let Id of Identi) {
//     console.log(Id);
// }

// let Perso = ["Hobed", "Mwadi", "Bayekula"];
// for (let Id of Perso) {
//     console.log(Id);
// }
// Perso.forEach(function (eleme, i){
//     console.log(`${i} : ${eleme}`);
// })


const apprenants = [
  { id: 1, nom: "Kiala", prenom: "Bellamard", pays: "Afghanistan" },
  { id: 2, nom: "Mulanga", prenom: "Emmanuella", pays: "Brezil" },
  { id: 3, nom: "Mulaba", prenom: "Merdie", pays: "Ethiopie" },
  { id: 4, nom: "Musafiri", prenom: "Marcos", pays: "Colombie" },
  { id: 5, nom: "Armache", prenom: "Kevin", pays: "Singapour" },
  { id: 6, nom: "Kibala", prenom: "Bonard", pays: "Ethiopie" },
  { id: 7, nom: "Tshibambi", prenom: "manu", pays: "Singapour" },
];
// apprenants.forEach(element => {
//     console.log(element);
// });
// const RessorEthiopie = apprenants.filter(function(element){
//    return element.pays === "Ethiopie";
// })
// console.log(RessorEthiopie);

// const RessorEthiopie = apprenants.filter(function(element){
//    return (element.nom.includes('ma') || element.prenom.includes('ma')) && element.pays === "Singapour";
// })
// console.log(RessorEthiopie);
let Cotes = [10, 27, 20, 12, 15, 22, 30, 25, 27];
// const NumberSupA20 = Cotes.filter(function(element){
//     return element >20;
// });
// console.log(NumberSupA20);
// const Find = Cotes.find(function(element, index){
//     return `${element >20} est à la position ${index}`;
// });
// console.log(Find);

// let TabAuCarre = Cotes.map(function(element){
//     return element**2;
// });
// console.log(TabAuCarre);

// let Somme = Cotes.reduce(function(somme, element){
//     return somme + element;
// }, 0);
// console.log(Somme);

// let nbr1 = 10, nbr2 = 12;
// const Somme = (nomb1=1, nomb2=2)=> nomb1 + nomb2;
// console.log(`Résultat : ${Somme(nbr1, nbr2)}`);

//Exercices
//Exercices 1
const users = [
  { noms: 'Jojo Jack', age: 21 },
  { noms: 'Paul-Jules', age: 45 },
  { noms: 'Pierre Kokolo', age: 67 },
  { noms: 'Gilbert Madesu', age: 39 },
  { noms: 'Simon Pierre', age: 35 },
  { noms: 'Andres Iniesta', age: 70 }
];
let TabUserAge20Et40 = users.filter(function(AgeUsers){
  return AgeUsers.age >= 20 && AgeUsers.age <= 40;
});
let UsersPierre = users.find(function(NomUser){
  return NomUser.noms === "Pierre Kokolo";
});
let ListUsers = users.map(function(NomUsers){
  return NomUsers.noms;
});
console.log(TabUserAge20Et40);
console.log(UsersPierre);
console.log(ListUsers);
//Exercices 2
const Users = [
  {
    id: 1,
    sexe: 'M',
    nom: 'Lisangola',
    prenom: 'Bondjali',
    nationalite: 'Congolaise'
  },
  {
    id: 2,
    sexe: 'M',
    nom: 'Makengo',
    prenom: 'Stanislas',
    nationalite: 'Bresilienne'
  },
  { id: 3, sexe: 'M', nom: 'Kabemba', prenom: 'Joseph', nationalite: 'Russe' },
  {
    id: 4,
    sexe: 'M',
    nom: 'Manzako',
    prenom: 'Jonathan',
    nationalite: 'Congolaise'
  },
  {
    id: 5,
    sexe: 'F',
    nom: 'Lisangola',
    prenom: 'Sarah',
    nationalite: 'Soudanaise'
  },
  {
    id: 6,
    sexe: 'F',
    nom: 'Kingombe',
    prenom: 'Josephine',
    nationalite: 'Bresilienne'
  },
  { id: 7, sexe: 'M', nom: 'Ilali', prenom: 'Axel', nationalite: 'Italienne' },
  {
    id: 8,
    sexe: 'M',
    nom: 'Kangudi',
    prenom: 'Murdoch',
    nationalite: 'Somalienne'
  },
  { id: 9, sexe: 'F', nom: 'Lusevakio', prenom: 'Semia', nationalite: 'Russe' },
  {
    id: 10,
    sexe: 'F',
    nom: 'Bitota',
    prenom: 'Laurene',
    nationalite: 'Algerienne'
  }
];
//Q1
const TabUsers = Users.filter(function (element){
  return element.nationalite === "Algerienne";
});
console.log(`Nombre d'algerienne : ${TabUsers.length}`);
//Q2
const PrenomUsers = Users.filter(function(element){
  return element.prenom.endsWith('a');
});
console.log(PrenomUsers);
//Q3
const ListNoms = Users.map(function(element){
  return element = element.nom;
});
console.log(ListNoms);
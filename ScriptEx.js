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


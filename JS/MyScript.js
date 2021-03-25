// function Div(){
//     let Div = document.createElement("div");
//     Div.setAttribute("class","Div0");
//     DivParent.appendChild(Div);

//     let ImgDiv = document.createElement("img");
//     ImgDiv.setAttribute("class","ImgDiv");
//     ImgDiv.setAttribute("src",document.getElementById("Ficher").files[0] );
    
//     let Div1 = document.createElement("div");
//     Div1.setAttribute("class","SousDiv_Div");

//     let Para1 = document.createElement("p");
//     Para1.setAttribute("class","Para1_SousDiv");
    
//     let Prenom = document.querySelector("#Prenom");
//     let Nom = document.querySelector("#Nom");
//     Para1.textContent = Prenom + " "+Nom;

//     let Para2 = document.createElement("p");
//     Para2.setAttribute("class","Para2_SousDiv");
//     let Groupe = document.querySelector(".Select");
//     Para2.textContent = Groupe;

//     let Para3 = document.createElement("p");
//     Para3.setAttribute("class","Para3_SousDiv");
//     let Bio = document.querySelector("textarea");
//     Para3.textContent = Bio;
    
    
//     Div.appendChild(ImgDiv);
//     Div.appendChild(Div1);

//     Div1.appendChild(Para1);
//     Div1.appendChild(Para2);
//     Div1.appendChild(Para3);
// }

let DivParent = document.getElementsByClassName("Div2");
let Prenom = document.getElementById("Prenom");
let Nom = document.getElementById("Nom");
let Groupe = document.querySelector(".Select");
let Bio = document.getElementById("Bio");
let InputFile = document.getElementById("Ficher").files[0];
let BtnCreer = document.getElementsByClassName("Btn_Creer");

let Personne = [];
let ListPersonne = [];

function InnerHtml(){
    let Div = document.createElement("div");
    Div.setAttribute("class","Div0");

    let ImgDiv = document.createElement("img");
    ImgDiv.setAttribute("class","ImgDiv");
    
    let Div1 = document.createElement("div");
    Div1.setAttribute("class","SousDiv_Div");

    let Para1 = document.createElement("p");
    Para1.setAttribute("class","Para1_SousDiv");
    
    Para1.textContent = `${Prenom.value} ${Nom.value}`;

    let Para2 = document.createElement("p");
    Para2.setAttribute("class","Para2_SousDiv");
    let Choix = Groupe.selectedIndex;
    Para2.textContent = `${Groupe[Choix].value}`;

    let Para3 = document.createElement("p");
    Para3.setAttribute("class","Para3_SousDiv");
    Para3.textContent = `${Bio.value}`;
    
    //Ajout //
    //DivParent.appendChild(Div);
    Div.appendChild(ImgDiv);
    Div.appendChild(Div1);

    Div1.appendChild(Para1);
    Div1.appendChild(Para2);
    Div1.appendChild(Para3);
}
function AddPerso(){
    Personne.push({
        prenom: Prenom.value,
        nom :Nom.value,
        groupe : Groupe.value,
        bio : Bio.value,
        img : InputFile
    })
    console.log(Personne);
    InnerHtml();
}

BtnCreer.addEventListener("click",()=>{
    AddPerso();
});
console.log(Personne);
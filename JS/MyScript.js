// function Div(Evenement){
//     Evenement.preventDefault();


//     let Para0 = document.querySelector(".Para");

//     let Div = document.createElement("div");
//     Div = document.setAttribute("class","Div0");

//     let ImgDiv = document.createElement("img");
//     ImgDiv = document.setAttribute("class","ImgDiv");
//     ImgDiv = document.getElementById("Ficher").files[0];
    
//     let Div1 = document.createElement("div");
//     Div1 = document.setAttribute("class","SousDiv_Div");

//     let Para1 = document.createElement("p");
//     Para1 = document.setAttribute("class","Para1_SousDiv");
//     let Prenom = document.querySelector("#Prenom");
//     let Nom = document.querySelector("#Nom");
//     Para1.textContent = Prenom + " "+Nom;

//     let Para2 = document.createElement("p");
//     Para2 = document.setAttribute("class","Para2_SousDiv");
//     let Groupe = document.querySelector(".Select");
//     Para2.textContent = Groupe;

//     let Para3 = document.createElement("p");
//     Para3 = document.setAttribute("class","Para3_SousDiv");
//     let Bio = document.querySelector("textarea");
//     Para3.textContent = Bio;
    
    
//     Para0.insertBefore(Div, Para0.nextSibling);
//     Div.appendChild(ImgDiv);
//     Div.appendChild(Div1);

//     Div1.appendChild(Para1);
//     Div1.appendChild(Para2);
//     Div1.appendChild(Para3);
// }
let PersonneObjet = {};
let ListPersonne = [];


let Prenom = document.getElementById("Prenom");
let Nom = document.getElementById("Nom");
let Groupe = document.querySelector(".Select");
let Bio = document.querySelector("textarea");
let InputFile = document.getElementById("Ficher").files[0];

let Btn_Form = document.querySelector(".Btn_Creer");
Btn_Form = document.getElementsByClassName("Btn_Creer");
Btn_Form.addEventListener("click", function(e){
    e.preventDefault();
    
    PersonneObjet.Prenom = Prenom.value;
    PersonneObjet.Nom = Nom.value;
    PersonneObjet.Groupe = Groupe.value;
    PersonneObjet.Bio =Bio.value;
    PersonneObjet.InputFile = InputFile.value;
    
    ListPersonne.push(PersonneObjet);

    if(PersonneObjet.length >0){
        let DivParent = document.querySelector(".Div2");

        let Div = document.createElement("div");
        Div.className = "Div0";

        let ImgDiv = document.createElement("img");
        ImgDiv.className = "ImgDiv";
        
        let Div1 = document.createElement("div");
        Div1 = document.setAttribute("class","SousDiv_Div");

        let Para1 = document.createElement("p");
        Para1 = document.setAttribute("class","Para1_SousDiv");
        Para1.textContent = PersonneObjet[(PersonneObjet.length-1)].Prenom + " "+PersonneObjet[(PersonneObjet.length-1)].Nom;

        let Para2 = document.createElement("p");
        Para2 = document.setAttribute("class","Para2_SousDiv");
        Para2.textContent = PersonneObjet[(PersonneObjet.length-1)].Groupe;

        let Para3 = document.createElement("p");
        Para3 = document.setAttribute("class","Para3_SousDiv");
        Para3.textContent =  PersonneObjet[(PersonneObjet.length-1)].Bio;

        
        DivParent.appendChild(Div);
        Div.appendChild(ImgDiv);
        Div.appendChild(Div1);

        Div1.appendChild(Para1);
        Div1.appendChild(Para2);
        Div1.appendChild(Para3);
        document.querySelector("form").reset();
    }
});
console.log(PersonneObjet);
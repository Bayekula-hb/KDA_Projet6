let DivIndex = document.querySelector(".Div2");
let PrenomForm = document.querySelector("#Prenom");
let NomForm = document.querySelector("#Nom");
let SelectForm = document.querySelector("#Groupe");
let ValueSelect = SelectForm.options[document.querySelector("#Groupe").selectedIndex].value;
// let ValueSelect = SelectForm.options[SelectForm.selectedIndex].value;

let TextForm = document.querySelector("#Bio");
let InputForm = document.querySelector("#Ficher");
let BtnCreerForm = document.querySelector(".Btn_Creer");
let BtnReinitForm = document.querySelector(".Btn_Reinit");

let DivInsert = document.querySelector(".Div0");

function Init(){
    PrenomForm.value = "",
    NomForm.value = "",
    SelectForm.value = "",
    TextForm.value = "",
    InputForm.value = ""
}
function AddDom(){
    let ImgDiv = document.createElement("div");
    ImgDiv.setAttribute("class","ImgDiv");
    let Img_Div = document.createElement("img");
    Img_Div.setAttribute('src', InputForm.value);
    Img_Div.setAttribute('alt', "Image Profile");
    
    let Div1 = document.createElement("div");
    Div1.setAttribute("class","SousDiv_Div");

    let Para1 = document.createElement("p");
    Para1.setAttribute("class","Para1_SousDiv");
    Para1.textContent = `${Prenom.value} ${Nom.value}`;

    let Para2 = document.createElement("p");
    Para2.setAttribute("class","Para2_SousDiv");
    Para2.textContent = `${ValueSelect}`;

    let Para3 = document.createElement("p");
    Para3.setAttribute("class","Para3_SousDiv");
    Para3.textContent = `${Bio.value}`;
    
    //Ajout //
    ImgDiv.appendChild(Img_Div);
    DivInsert.appendChild(ImgDiv);
    DivInsert.appendChild(Div1);

    DivInsert.appendChild(Para1);
    DivInsert.appendChild(Para2);
    DivInsert.appendChild(Para3);
}
let Liste = [];
BtnCreerForm.addEventListener('click', function(e){
    e.preventDefault();
    let Personne = {
        Prenom : PrenomForm.value,
        Nom : NomForm.value,
        Select : ValueSelect,
        Text : TextForm.value,
        Input : InputForm.value
    };
    Liste.push(Personne);
    AddDom();
    console.table(Personne);
    console.table(Liste);
    Init();
});
BtnReinitForm.addEventListener('click', ()=>{
    Init();
});
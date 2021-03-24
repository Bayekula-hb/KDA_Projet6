function Div(){
    let Para0 = document.querySelector(".Para");

    let Div = document.createElement("div");
    Div = document.setAttribute("class","Div0");

    let ImgDiv = document.createElement("img");
    ImgDiv = document.setAttribute("class","ImgDiv");
    
    let Div1 = document.createElement("div");
    Div1 = document.setAttribute("class","SousDiv_Div");

    let Para1 = document.createElement("p");
    Para1 = document.setAttribute("class","Para1_SousDiv");

    let Para2 = document.createElement("p");
    Para2 = document.setAttribute("class","Para2_SousDiv");

    let Para3 = document.createElement("p");
    Para3 = document.setAttribute("class","Para3_SousDiv");
    
    
    Para0.insertBefore(Div, Para0.nextSibling);
    Div.appendChild(ImgDiv);
    Div.appendChild(Div1);

    Div1.appendChild(Para1);
    Div1.appendChild(Para2);
    Div1.appendChild(Para3);
}

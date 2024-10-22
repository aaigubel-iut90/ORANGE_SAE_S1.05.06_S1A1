let pos=0;
array_image = ["../images/Bourse.jpg","../images/logo_orange_batiment.jpg"];    
array_links = ["https://www.lefigaro.fr/societes/orange-annonce-se-retirer-de-la-bourse-de-new-york-20240925","https://www.orange.com/fr/cours-de-laction"];   
function swap_image(index_change){
pos=pos+index_change;
image=document.getElementById("image_liste");
if (index_change==1 && pos==array_image.length){
    pos-=array_image.length;
}
else if (index_change==-1 && pos==-1){
    pos+=array_image.length;
}
image.src=array_image[pos];
}

function load(url, callback) {
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
    callback(xhr.response);
    }
};

xhr.open("GET", "https://quote.cnbc.com/quote-html-webservice/restQuote/symbolType/symbol?symbols=ORA-FR&requestMethod=itv&noform=1&partnerId=2&fund=1&exthrs=1&output=json&events=1",true);

xhr.send("");
}
function inserter(result){
    let rs_js=JSON.parse(result);
    //document.write('<div>Price of Orange : Close -  ' + result+ '</div>');
    
    const element = document.getElementById("api_results_holder");
    let vls=rs_js.FormattedQuoteResult.FormattedQuote[0];
    let nom=document.createElement("p");
    let valeur_actuelle=document.createElement("p");
    let taux_dividentes=document.createElement("a");
    let plage_annee=document.createElement("p");
    let place_boursiere_principale=document.createElement("p");
    let ratio_pe=document.createElement("p");

    nom.innerHTML="Nom de bourse: "+vls.symbol;
    valeur_actuelle.innerHTML="Dernier prix d'action : "+vls.last;
    taux_dividentes.innerHTML="Rendement (dividendes): "+vls.dividend;
    plage_annee.innerHTML="Plage sur l'année: "+vls.yrloprice+" - "+ vls.yrhiprice;
    place_boursiere_principale.innerHTML="Place Boursière principale: "+vls.exchange;
    ratio_pe.innerHTML="Ratio cours/bénéfices: "+vls.pe;

    taux_dividentes.href="https://fr.wikipedia.org/wiki/Dividende";


    element.appendChild(nom);
    element.appendChild(valeur_actuelle);
    element.appendChild(taux_dividentes);
    element.appendChild(plage_annee);
    element.appendChild(place_boursiere_principale);
    element.appendChild(ratio_pe);
    //document.write('<div>Price of Orange : Close -  ' + rs_js.FormattedQuoteResult.FormattedQuote[0].symbol+ '</div>');
};
load("",inserter);
function redirect_clic_image(){
    window.open(array_links[pos], '_blank').focus();
}
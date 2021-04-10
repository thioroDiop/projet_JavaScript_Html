let lineCounter = 1;

//recupérer les données du formulaire au clic
document.getElementById("formulaire").addEventListener("submit", function (event) {
    // Cette petite newline pour éviter de raffraichir la page lorsqu'on envoie le formulaire
    event.preventDefault();

    const name = document.getElementById("input").value;

    //ajouter une newline dans le tableau
    const newline = document.createElement("tr");

    //ajouter les cellune
    const td1 = document.createElement("td");
    td1.textContent = "#" + lineCounter;
    newline.appendChild(td1);


    const td2 = document.createElement("td");
    td2.textContent = name;
    newline.appendChild(td2);

    const td3 = document.createElement("td");
    const button = document.createElement("button");
    button.textContent = "Je passe mon tour";
    td3.appendChild(button);
    newline.appendChild(td3);


    // je selection mon tableau
    const table = document.getElementById("table-body");
    //ajouter une ligne au tableau
    table.appendChild(newline);
    lineCounter++;


    // on crée un listener dans le bouton Je passe mon tour
    button.addEventListener("click", function () {
//créer le noeud strike
        const st2 = document.createElement("strike");
        //insérer st2 (le strike) dans td2
        td2.prepend(st2);
        st2.prepend(td2.textContent);//insérer le texte de td2 dans (le strike) st2
        td2.lastChild.remove(); // pour supprimer le dernier élément qui est l'ancier texte dans td2


        const st1 = document.createElement("strike");
        td1.prepend(st1);
        st1.prepend(td1.textContent);
       td1.lastChild.remove();
    })

});


//on crée le button suivant
const buttonSuivant = document.getElementById("suivant");

//on crée un listener dans le bouton "suivant"
buttonSuivant.addEventListener("click", function () {
    document.getElementById("table-body").deleteRow(0);
    lineCounter--;
})


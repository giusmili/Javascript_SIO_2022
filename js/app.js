document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);

    /* all script */
    let nom, prenom, nombre, etat, title, parents, elements, new_element, i, content, title_heading;

    content = `
        HTML5 est la dernière révision majeure du HTML. Cette version a été 
        finalisée le 28 octobre 2014. HTML5 spécifie deux syntaxes d'un modèle 
        abstrait défini en termes de DOM : HTML5 et XHTML5. 
        Le langage comprend également : une couche application avec de nombreuses API
        `;
    /*
      Créer un élement
    ajouter un enfant
    le placer à la fin
    ajouter du texte
    le supprimer
      Asyncrhone
    javascript
    And
    XML
    */
    elements = document.getElementsByTagName("section")[1];
    title_heading = document.getElementsByTagName("h1")[0];
    /* 
    document.querySelector("p > em")
    document.querySelectorAll("element")[1]
    document.getElementsByTagName("section")[1]
      */
    new_element = document.createElement("p");
    elements.appendChild(new_element);
    new_element.innerText += content;
    //supprimer l'élément
    //elements.removeChild(new_element)


    const lang = null;
    nom = "Eich";
    nombre = 10;
    resultat = "7.5";
    etat = !true;
    console.log(nombre % 3);
    //document.title = "Cours js DOM"
    title = document.querySelector("title");
    title.innerText = "Cours Js Dom";
    parents = document.querySelector("body");
    console.log(parents.childNodes[1].parentElement);

    resultat !== nombre ? console.log("vrai") : console.log("faux");
    /*
    opérateurs
    =
    ==
    ===
    !=
    !
    +
    +=
    -=
    %
    */
    //concatenation
    console.log(`Nom : ${nom}\n 
etat : ${etat}\n
resultat : ${resultat}
`);
    /* 
    tableaux est méthodes
    
    
    
    
    push() => ajouter à la fin du tébleau
    pop() => supprime le dernier élément
    shift() => retirer le premier élément
    unshift() => ajoute plusieurs élément au début
    */
    let tables = ["html", true, false, 2022];
    let tab_other = ["Rasmus", "Heich"];
    let big_table = [...tables, ...tab_other];
    tables.push("java");
    tables.pop("java");
    tables.shift();
    tables.unshift("html", "xml");

    console.table(big_table);
    //destructuring table
    let [a, b, c] = tables;
    console.log(a, c);
    /* les boucles while, for, forEach, data, do while */
    tables.includes("xml") ? console.log("bonne réponse") : console.log(false);
    //prompt
    let person = [{
        nom: "Ledorf", /* index 0*/
        ville: "Amsterdam",
        photo: "?"
    }, {
        nom: "Tim",
        ville: "London",
        photo: "?"
    }];
    console.log(person[1].photo);
    /* itérations for, while, forEach, data, do while */

    /* for(i = 0; i < 10; i=i+1){
        console.log(`passage de : ${i}\n`)
    } */
    // i = 0;
    // while( i <=10){
    //     console.log(`passage de ${i}`)
    //     i++;
    // }

    /* i = 0;
    do{
        i = i + 1
        console.log(i)
    }while( i < 5)    */

    /* for(index in tables){ 
        console.log(`${index} :  ${tables[index]}`)
    } */
    // for(i=0; i < tables.length; i++){
    //     console.log(tables[i])
    // }
    tables.forEach((element, value) => {
        console.log(`${value} : ${element}`);
    });

    for (data of person) {
        console.log(`Nom ${data.nom} : Ville ${data.ville}`);
    }
    //object

    let Produit = { //clé et la valeur
        type: "pc",
        marque: "Azus",
        ram: "16Go",
        prix: 750
    };
    console.table(Produit);
    //itération d'un objet
    for (index in Produit) {
        let value = Produit[index];
        console.log(`${index} : ${value}`);
    }
    //méthode prompt
    let first_name = prompt("Votre nom s'il vous plait?");
    // first_name ? console.log(first_name) : alert("replir les champs"), location.reload();
    if (first_name) {
        console.log(first_name);
        title_heading.innerHTML += ` : <span aria-hidden="true"> bonjour ${first_name} &#128540;</span>`;
    } else {
        alert("replir les champs");
        location.reload(); //recharge la page
    }
    //console.log(first_name)

});
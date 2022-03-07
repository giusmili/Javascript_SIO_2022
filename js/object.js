document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);

    let el = document.createElement("ul");
    let parent = document.querySelector("section:nth-of-type(2)");
    let last_el = document.getElementsByTagName("section")[1];
    let main_title = document.querySelector("h1");
    //console.log(parent.children[0].textContent)
    parent.appendChild(el);
    el.setAttribute("class", "list"); //méthode pour ajouter des attributs et des valeurs
    //sturcture objet
    /*
    
    Conçu Par : Dennis Ritchie
    Implémentations : GCC, MSVC, Borland C, Clang, TCC
    Date de première version : 1972
    Auteur : Dennis Ritchie, Brian Kernighan
    Extensions de fichiers : c,.h
    A influencé : awk, csh, C++, C#, Objective-C, D, Concurrent C, Java, JavaScript, PHP, Perl
    Influencé par : BCPL, B, Algol 68, Fortran
    
    */
    last_el.childNodes[1].innerText = "Spécification du langage C";
    const language = {
        nom: "C",
        concept: "Dennis Ritchie",
        implementations: ["GCC", "MSVC", "Borland C", "Clang", "TCC"],
        date: 1972,
        auteur: ["Dennis Ritchie", "Brian Kernighan"],
        extensions_de_fichiers: ["c", ".h"],
        a_influencer: ["awk", "csh", "C++", "C#", "Objective-C", "D", "Concurrent C", "Java", "JavaScript", "PHP", "Perl"],
        insperer_de: ["BCPL", "B", "Algol 68", "Fortran"],
        image: "./asset/c_original_logo_icon_146611.png"
    };

    console.table(`Implémentation : ${language.implementations.join(' - ')}`);
    //template
    const list_lang = `<li>Nom : ${language.nom}</li>
                    <li>Concepteur : ${language.concept}</li>
                    <li>Impleméntations : ${language.implementations.join(' - ')}</li>
                    <li>Date : ${language.date}</li>
                    <li>Auteur : ${language.auteur.join(' - ')}</li>
                    <li>Extension : ${language.extensions_de_fichiers.join(' - ')}</li>
                    <li>A influencer : ${language.a_influencer.join(' - ')}</li>
                    <li>Inspirer : ${language.insperer_de.join(' - ')}</li>
                    <li><img src="${language.image}" alt="logo"></li>
   
   
                 `;
    //injecter le modèle
    el.innerHTML = list_lang;

    // other iteration
    for (let i in language) {
        /* itérer l'objet */
        let value = language[i];
        console.log(`${i} : ${value}`);
    }
    console.log(main_title.getAttribute("data-desc"));
    let contents = main_title.getAttribute("data-desc");
    main_title.innerText += ` et ${contents}`;
});
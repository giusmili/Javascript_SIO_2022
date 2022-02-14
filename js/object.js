document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);

    let el = document.createElement("ul");
    let parent = document.querySelector("section:nth-of-type(2)");
    console.log(parent.children[0].textContent);
    parent.appendChild(el);
    el.setAttribute("class", "liste"); //méthode pour ajouter des attributs
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
    const language = {
        nom: "C",
        concept: "Dennis Ritchie",
        implementations: ["GCC", "MSVC", "Borland C", "Clang", "TCC"],
        date: 1972,
        Auteur: ["Dennis Ritchie", "Brian Kernighan"],
        extensions_de_fichiers: ["c", ".h"],
        a_influencer: ["awk", "csh", "C++", "C#", "Objective-C", "D", "Concurrent C", "Java", "JavaScript", "PHP", "Perl"],
        insperer_de: ["BCPL", "B", "Algol 68", "Fortran"]
    };
    console.table(`Implémentation : ${language.implementations.join(' - ')}`);
});
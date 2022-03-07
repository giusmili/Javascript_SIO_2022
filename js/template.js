document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    //On stocke du contenu
    const content = "Cet élément est un fragment de contenu mis de côté pour être utilisé par la suite dans le document. Lorsque le moteur traite le contenu de l'élément <template> lors du chargement de la page, il ne fait que vérifier la validité du contenu, ce dernier n'est pas affiché.";

    // On crée la variable pour le modèle
    const template = document.querySelector("template");

    //On sélectionne l'élement parent
    const el = document.querySelector("main");

    // On clone la ligne et on l'insère dans le contexte
    const clone = document.importNode(template.content, true);

    //les variables pour cloner tous les éléments
    let heading = clone.querySelector("h2");
    let dialog = clone.querySelector("p");

    //injection des contenus
    heading.textContent = "Spécifications";
    dialog.innerText = content;

    el.appendChild(clone);
});
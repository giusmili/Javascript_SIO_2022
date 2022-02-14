window.addEventListener("load", e => {
    console.log(e.target);
    //const message = prompt("Votre nom?")
    const msg = () => {
        console.log(`Bonjour`);
    };
    //fonction nommée

    let x = 0; //variable globale

    (() => {
        //fonction anonyme
        console.log(x);
        const y = 10;
        console.log(y);
    })();

    //function nommé + param
    /**
     * 
     * @param {String} first_name 
     * @param {String} last_name 
     * @param {Number} age 
     */
    const user = (first_name, last_name, age) => {
        return `${first_name}\n${last_name}\n${age}`;
    };
    let print_out = user(`Haich`, `Brandan`, 50);
    console.log(print_out);
    console.log(typeof msg);

    //last function object
    /**
     * 
     * @param {String} nom 
     * @param {String} prenom 
     * @param {Number} age 
     */
    const Auteur = function (nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    };
    //instance
    let auteurLang = new Auteur("Heich", "Brandan", 50);
    let auteurs_more = new Auteur("Rasmus", "Ledorf", 55);
    //afficher
    console.log(`${auteurs_more.nom}\n ${auteurs_more.prenom}\n ${auteurs_more.age}`);

    console.log(typeof Auteur);
});
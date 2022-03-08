window.addEventListener("load", e => {
    /* objet + méthode */
    console.log(e.target);
    //const message = prompt("Votre nom?")
    const msg = () => {
        console.log(`Bonjour`);
    };
    //fonction nommée
    let content = document.querySelector("section ul");
    let el = document.getElementsByTagName("section")[1];
    el.childNodes[1].innerHTML += ` &amp; Css`;
    let x = 0; //variable globale

    /* el.childNodes[1].innerText += ` &amp; css` */
    //  console.log(el)

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

    console.log(content);

    //objet animal

    const animal = [{
        name: "Meow",
        species: "Cat",
        favFood: ['tuna', 'catnip', "celery"],
        birthYear: 2012,
        photo: "https://loremflickr.com/320/240?lock=1"
    }];
    console.table(animal);
    /**
     * 
     * @param {String} birthYear 
     */
    //function of calculator
    const age = birthYear => {
        let calcAge = new Date().getFullYear() - birthYear;
        if (calcAge == 1) {
            return `1 year old`;
        } else if (calcAge == 0) {
            return 'Hello Baby';
        } else {
            return `${calcAge}`;
        }
    };
    let print_Out = age(14); //template
    content.innerHTML += `
                        <li> 
                            ${animal[0].name} Birth in ${print_Out}
                         </li>
                        <li>Photo</li>
                        `;
    el.innerHTML += `<img src="${animal[0].photo}" alt="photo" class="picture-description">`;

    /* exercice js */
    const person = [45, "Brad", 180];
    console.table(person);

    // destructuring
    /**
     * 
     * @param {any} param0 
     * @returns 
     */
    const response = ([age, last_name, height]) => ({ age, last_name, height }); // renvoie un tableau

    const result = response(person);
    console.table(result);
});
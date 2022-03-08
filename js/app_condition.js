document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    /*
        créer un élément <p> dans la section 
    */
    /* 
    const content_text = `Javascript`
    let parents = document.querySelector("section")
    const el = document.createElement("p") 
    */

    /* 
    créer un objet 
    */
    const User_element = {
        content_text: `Javascript`,
        parents: document.querySelector("section"),
        el: document.createElement("p"),

        print_out() {
            this.parents.appendChild(this.el).innerText = this.content_text;
        }
    };
    User_element.print_out();

    //User_element.parents.appendChild(User_element.el).innerText = User_element.content_text
    const elements = document.createElement("ul");
    const data = {

        country: "Suisse",
        population: 8.5,
        lang: ["DE", "FR", "IT", "RM"].join(", ")
    };
    User_element.parents.appendChild(elements);
    const list = "";
    for (index in data) {
        console.log(`${index} ${data[index]}`);
        elements.innerHTML += `<li>${index} : ${data[index]}</li>`;
    }
});
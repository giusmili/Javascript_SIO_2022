document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let el;
    el = document.getElementsByTagName("p");
    for (rows of el) {
        rows.style.color = "red";
    }
    el = document.querySelector("p");
    el.style.color = "red";
    el = document.getElementsByTagName("h1")[0];
    console.log(el);
    let contents = el.getAttribute("data-title");
    console.log(contents);
    el.innerText = contents;

    const Calc = {
        msg: "Le résultat est :",
        print_calc(n) {
            return n * n;
        }
    };
    let r = Calc.print_calc(10);
    console.log(`${Calc.msg} ${r}`);
    console.log(`${Calc.msg.length}`);
});

/* const User = {
    el : document.getElementsByTagName("h1")[0],
    contents : el.getAttribute("data-title"),
    get_out(){
        this.el.innerText = this.contents
        //console.log(this)
    }
  }
User.get_out()
console.log(User) */
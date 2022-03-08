document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let datas = null;
    console.log(typeof datas);
    /*   let el
        el = document.getElementsByTagName("p")       
        for(rows of el){
            rows.style.color ="red"
        } 
       el = document.querySelector("p")
       el.style.color ="red"
        el = document.getElementsByTagName("h1")[0]
        console.log(el)
       let contents = el.getAttribute("data-title")
        console.log(contents)
        el.innerText = contents */

    const Calc = {
        msg: "Le résultat est :",
        print_calc(n) {
            return n * n;
        }
    };
    let r = Calc.print_calc(10);
    console.log(`${Calc.msg} ${r}`);
    console.log(`${Calc.msg.length}`);

    const User = {
        el: document.getElementsByTagName("h1")[0],
        contents: "",
        get_out() {

            this.contents = this.el.getAttribute('data-title');
            //console.log(this)
        }

    };
    let prints = User.get_out();

    // structure data movie

    /*  movie:[
         {
         image : String,
         title : String,
         date: Number,
         director: String,
         type : String
         },
         {
         image : String,
         title : String,
         date: Number,
         director: String,
         type : String
         },
     ] */
});
// const
const hunH4 = document.querySelectorAll(".hun");
const enH4 = document.querySelectorAll(".en");
const datalangChange = document.querySelectorAll('[data-lang]');

// let

// addEventListener

// call function

changeLangHun ();
changeLangEn ();

// function

function changeLangHun() {
    for (let i = 0; i < hunH4.length; i++) {
     hunH4[i].addEventListener("click", function () { 
         if (datalangChange[i].classList.contains("hide")==false) {

             console.log("Benne vagyok az if ágban i értéke:" +i )
             return;
         } else {
            document.documentElement.setAttribute("lang","hu");
            datalangChange[i].classList.remove("hide");
           i++;
           datalangChange[i].classList.add("hide");
           i--;
         }
    })
    }
}
function changeLangEn() {
    for (let i = 0;  i< enH4.length; i++) {
       enH4[i].addEventListener("click", function () {
        if (datalangChange[i].classList.contains("hide")==false) {
            console.log("Benne vagyok az if ágban i értéke:" +i )

            document.documentElement.setAttribute("lang", "en");
            datalangChange[i].classList.add("hide");
            i++;
            datalangChange[i].classList.remove("hide");
            i--;
        } else {
            console.log("Ez az en else ága");
        }

           console.log("Ez most az i értéke: "+i)
        console.log(datalangChange[i].classList.contains("hide"))
       })    
    }    
}

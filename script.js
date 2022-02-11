// const
const hunH4 = document.querySelectorAll(".hun");
const enH4 = document.querySelectorAll(".en");
const datalangChange = document.querySelectorAll('[data-lang]');
const hun1 = document.getElementById('hun1');
const eng1 = document.getElementById('eng1');
const fpCHun = document.getElementById('fpCHun');
const fPCEn = document.getElementById('fPCEn');
const fPCStartSpanHun =document.getElementById('fPCStartSpanHun');
const fPCStartSpanEn =document.getElementById('fPCStartSpanEn');
const fPCSelectLanguageCont =document.getElementById('fPCSelectLanguageCont');
const secundPageContainer = document.getElementById('secundPageContainer');
const sPCHun = document.getElementById('sPCHun');
const sPCEng = document.getElementById('sPCEng');

// let

// addEventListener
fPCStartSpanHun.addEventListener("click", nexthun);
// call function

changeLangHun ();
changeLangEn ();

// function

function changeLangHun() {
    for (let i = 0; i < hunH4.length; i++) {
     hunH4[i].addEventListener("click", function () { 
         if (datalangChange[i].classList.contains("hide")==false) {
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
            document.documentElement.setAttribute("lang", "en");
            datalangChange[i].classList.add("hide");
            i++;
            datalangChange[i].classList.remove("hide");
            i--;
        } else {
           return;
        }
       })    
    }    
}
function nexthun() {
    fPCSelectLanguageCont.classList.remove("displayFlexRow");
    fPCSelectLanguageCont.classList.add("hide");
    fpCHun.classList.add("hide");
    secundPageContainer.classList.remove("hide");
    sPCHun.classList.remove("hide");
}
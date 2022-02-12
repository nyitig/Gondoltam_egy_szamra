// const
const hunH4 = document.querySelectorAll(".hun");
const enH4 = document.querySelectorAll(".en");
const datalangChangehu = document.querySelectorAll('[data-langhu]');
const datalangChangeen = document.querySelectorAll('[data-langen]');
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
fPCStartSpanEn.addEventListener("click",nexteng)
// call function

changeLangHun ();
changeLangEn ();

// function

function changeLangHun() {
    for (let i = 0; i < hunH4.length; i++) {
     hunH4[i].addEventListener("click", function () { 
        //  console.log("Az i értéke: "+i)
         if (datalangChangehu[i].classList.contains("hide")==true) {
            // console.log("Change langhu if ág");
            document.documentElement.setAttribute("lang","hu");
            datalangChangeen[i].classList.add("hide");
           datalangChangehu[i].classList.remove("hide");
            
         } else {
            // console.log("Change langhu else ág");

            return;
         }
    })
    }
}
function changeLangEn() {
    for (let i = 0;  i< enH4.length; i++) {
       enH4[i].addEventListener("click", function () {
        //    console.log("Az i értéke: "+i)
        if (datalangChangeen[i].classList.contains("hide")==true) {
            // console.log("Change langen if ág");

            document.documentElement.setAttribute("lang", "en");
            datalangChangehu[i].classList.add("hide");
            datalangChangeen[i].classList.remove("hide");
        } else {
            // console.log("Change langen else ág");

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
function nexteng() {
    fPCSelectLanguageCont.classList.remove("displayFlexRow");
    fPCSelectLanguageCont.classList.add("hide");
    fPCEn.classList.add("hide");
    secundPageContainer.classList.remove("hide");
    sPCEng.classList.remove("hide");
}
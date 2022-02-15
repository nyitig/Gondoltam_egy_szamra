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
const sPCHunInput = document.getElementById('sPCHunInput');
const sPCEnInput = document.getElementById('sPCEnInput');
const inputtag = document.querySelectorAll(".inputvalid");
const sPCHunNextCont = document.getElementById('sPCHunNextCont');
const spanValid = document.querySelectorAll('.spanValid');
const spanCont = document.querySelectorAll('.spanCont');
const thirdPageContainer = document.getElementById('thirdPageContainer');

// let
let playerName ="";
let nameLenght=false;
let inputtagindex=0;

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
         if (datalangChangehu[i].classList.contains("hide")==true) {
            document.documentElement.setAttribute("lang","hu");
            datalangChangeen[i].classList.add("hide");
           datalangChangehu[i].classList.remove("hide");
           if (i>0) {
            inputtagindexCreatHun(i);
        }
         } else {
            return;
         }
    })
    }
}
function changeLangEn() {
    for (let i = 0;  i< enH4.length; i++) {
       enH4[i].addEventListener("click", function () {
        if (datalangChangeen[i].classList.contains("hide")==true) {
            document.documentElement.setAttribute("lang", "en");
            datalangChangehu[i].classList.add("hide");
            datalangChangeen[i].classList.remove("hide"); 
            if (i>0) {
                inputtagindexCreatEn(i);
            }
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
    inputtagindex=0;
    nextHunSPValid(inputtagindex);
}
function nexteng() {
    fPCSelectLanguageCont.classList.remove("displayFlexRow");
    fPCSelectLanguageCont.classList.add("hide");
    fPCEn.classList.add("hide");
    secundPageContainer.classList.remove("hide");
    sPCEng.classList.remove("hide");
    inputtagindex=1;
    nextEnSPValid(inputtagindex);
}
function enterPress(event) {
    if (event.keyCode==13) {
        checkNameLenght();
    }
}
function checkNameLenght () {
    if (playerName.length>2) {
        nameLenght=true;
    }
    else {
        nameLenght=false;
    }
}
function thirdPagecheck() {
    if (nameLenght==true) {
        spanValid[inputtagindex].classList.remove("sPCStartContNone","color5");
        spanValid[inputtagindex].classList.add("fPCStartSpan","color1");
        spanCont[inputtagindex].classList.add("cursorPointer");
        spanCont[inputtagindex].addEventListener("click", goThirdPage);
    } else {
       if (spanCont[inputtagindex].classList.contains("cursorPointer")==true) {
        spanValid[inputtagindex].classList.remove("fPCStartSpan","color1");
        spanCont[inputtagindex].classList.remove("cursorPointer");
        spanValid[inputtagindex].classList.add("sPCStartContNone","color5");
       } else {
          return;
       }
    }
}
function inputtagindexCreatHun(i) {
switch (i) {
    case 1:
        inputtagindex=0;
        nextHunSPValid(inputtagindex);
        break;

    default:
        break;
}
}
function inputtagindexCreatEn(i) {
    switch (i) {
        case 1:
            inputtagindex=1;
            nextEnSPValid(inputtagindex);
            break;
    
        default:
            break;
    }
    
}
function nextHunSPValid(inputtagindex) {
    inputtag[inputtagindex].addEventListener("keyup", function (){
        playerName=inputtag[inputtagindex].value;
        checkNameLenght();
        thirdPagecheck();
})
inputtag[inputtagindex].addEventListener("keypress", enterPress);
}
function nextEnSPValid(inputtagindex) {
    inputtag[inputtagindex].addEventListener("keyup", function (){
        playerName=inputtag[inputtagindex].value;
        checkNameLenght();
        thirdPagecheck();
})
inputtag[inputtagindex].addEventListener("keypress", enterPress);
}
function goThirdPage() {
    secundPageContainer.classList.add("hide");
    thirdPageContainer.classList.remove("hide");
    document.getElementById('playerName').innerHTML=playerName;
}
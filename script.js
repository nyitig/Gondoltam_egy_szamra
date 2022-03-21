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
const playerNameTag =document.querySelectorAll(".playerName");
const tPCHun = document.getElementById('tPCHun');
const tPCEng = document.getElementById('tPCEng');
const tPCHelpCont = document.getElementById('tPCHelpCont');
const tPCHelpSpan= document.getElementById('tPCHelpSpan');
const tPCHelpTexth5 = document.getElementById('tPCHelpTexth5');
const tPCHelpTextCont = document.getElementById('tPCHelpTextCont');
const tPCSpCOnt = document.getElementById('tPCSpCOnt');
const tpCNumInput=document.getElementById('tpCNumInput');
const spanCounter=document.querySelectorAll('.spanCounter');
const tPCEngSpCOnt =document.getElementById('tPCEngSpCOnt');
const tpCEngNumInput=document.getElementById('tpCEngNumInput');
const tPCEngHelpTexth5=document.getElementById('tPCEngHelpTexth5');
const tPCEngHelpCont=document.getElementById('tPCEngHelpCont');
const tPCEngHelpSpan=document.getElementById('tPCEngHelpSpan');
const fourthPageContainer=document.getElementById('fourthPageContainer');


// let
let playerName ="";
let nameLenght=false;
let inputtagindex=0;
let randomNumberNum =0;
let counter=4;
let attempt=0;

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
            console.log("AZ i értéke: "+i);
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
                console.log("AZ i értéke: "+i);
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
inputtag[inputtagindex].addEventListener("keypress", function (event) {
   if (event.keyCode==13 && nameLenght==true) {
       goThirdPage();
   }
});
}
function nextEnSPValid(inputtagindex) {
    inputtag[inputtagindex].addEventListener("keyup", function (){
        playerName=inputtag[inputtagindex].value;
        checkNameLenght();
        thirdPagecheck();
})
inputtag[inputtagindex].addEventListener("keypress", function (event) {
    if (event.keyCode==13 && nameLenght==true) {
        goThirdPage();
    }
 });
}
function goThirdPage() {
    secundPageContainer.classList.add("hide");
    thirdPageContainer.classList.remove("hide");
    creatPlayerNameTPC();
    console.log("inputtagindex: "+inputtagindex)
    if (inputtagindex==0) {
        tPCHun.classList.remove("hide");
        randomNumber();
    } else {
        tPCEng.classList.remove("hide");
        
    }
    hunGamePage();
    engGamePage();
}
function creatPlayerNameTPC() {
    playerNameTag[0].innerHTML="Szia, "+playerName;
    playerNameTag[1].innerHTML="Hi, "+playerName;
    spanCounter[0].innerHTML=counter;
    spanCounter[1].innerHTML=counter;
    return;
}
function hunGamePage() {
     document.querySelector('input[name=numberHun]').focus();
    tPCSpCOnt.addEventListener("click", function () {
         numbercheckHun();
     })
     tpCNumInput.addEventListener("keypress", function (e) {
         if (e.key==='Enter') {
             numbercheckHun();
         };
     });
     tPCHelpCont.addEventListener("click", function () {
         let elm= document.getElementById('helpcheck');
         elm.checked = !elm.checked;
         if (elm.checked==true) {
             tPCHelpSpan.classList.remove("sPCStartContNone","color5");
             tPCHelpSpan.classList.add("fPCStartSpan","color1")
             tPCHelpTexth5.classList.remove("hide");
            }
         else {
             tPCHelpSpan.classList.remove("fPCStartSpan","color1")
             tPCHelpSpan.classList.add("sPCStartContNone","color5");              
             tPCHelpTexth5.classList.add("hide");
         }
     });
     return;
}
function randomNumber() {
    randomNumberNum=Math.floor(Math.random() * 99);
}
function numbercheckHun() {
    let inputNumber=tpCNumInput.value;
    if (inputNumber=="") {
        tpCNumInput.placeholder="Nem írtál be számot!";
        return;
    }
    for (let i = 0; i < 100; i++) {
        if (i==inputNumber) {
            gameHun(inputNumber);
            return;
        }
        }
        tpCNumInput.value="";
        tpCNumInput.placeholder="Rossz szám!";
}
function gameHun(inputNumber) {
    console.log(randomNumberNum);
    counter--;
    console.log(counter);
  if (counter==1) {
    spanCounter[0].innerHTML="utolsó lehetőség!";
    if (inputNumber<randomNumberNum) {
        tpCNumInput.value="";
        tpCNumInput.placeholder="Sajnos nem talált!";
        tPCHelpTexth5.innerHTML="Ennél nagyobb számra gondoltam";
      }
      if (inputNumber>randomNumberNum) {
        tpCNumInput.value="";
        tpCNumInput.placeholder="Sajnos nem talált!";
        tPCHelpTexth5.innerHTML="Ennél kisebb számra gondoltam";
      }
      if (inputNumber==randomNumberNum) {
          document.getElementById('fPCh2').innerHTML="Gratulálok! Kitaláltad!"
          thirdPageContainer.classList.add('hide');
          fourthPageContainer.classList.remove('hide');
      }
      return;
  }; 

  if (counter==0) {
    if (inputNumber==randomNumberNum) {
        document.getElementById('fPCh2').innerHTML="Gratulálok! Kitaláltad!"
        thirdPageContainer.classList.add('hide');
        fourthPageContainer.classList.remove('hide');
    } else {
        document.getElementById('fPCh2').innerHTML="Sajnos nem sikerült!"
        thirdPageContainer.classList.add('hide');
        fourthPageContainer.classList.remove('hide');
    }
  }
  
if (inputNumber<randomNumberNum) {
    tpCNumInput.value="";
    tpCNumInput.placeholder="Sajnos nem talált!";
    tPCHelpTexth5.innerHTML="Ennél nagyobb számra gondoltam";
    }
if (inputNumber>randomNumberNum) {
    tpCNumInput.value="";
    tpCNumInput.placeholder="Sajnos nem talált!";
    tPCHelpTexth5.innerHTML="Ennél kisebb számra gondoltam";
    }
if (inputNumber==randomNumberNum) {
        document.getElementById('fPCh2').innerHTML="Gratulálok! Kitaláltad!"
        thirdPageContainer.classList.add('hide');
        fourthPageContainer.classList.remove('hide');
    }
spanCounter[0].innerHTML=counter;
spanCounter[1].innerHTML=counter;
}
function engGamePage() {
    document.querySelector('input[name=numberEng]').focus();
    randomNumber();
    tPCEngSpCOnt.addEventListener("click", function () {
        numbercheckEng();
    });
    tpCEngNumInput.addEventListener("keypress", function(e) {
        if (e.key==='Enter') {
            numbercheckEng();
        }
    });
    tPCEngHelpCont.addEventListener("click", function () {
        let elm= document.getElementById('helpEngcheck');
         elm.checked = !elm.checked;
         if (elm.checked==true) {
            tPCEngHelpSpan.classList.remove("sPCStartContNone","color5");
            tPCEngHelpSpan.classList.add("fPCStartSpan","color1")
            tPCEngHelpTexth5.classList.remove("hide");
            }
         else {
            tPCEngHelpSpan.classList.remove("fPCStartSpan","color1")
            tPCEngHelpSpan.classList.add("sPCStartContNone","color5");              
            tPCEngHelpTexth5.classList.add("hide");
         }
    })
}
function numbercheckEng() {
    let inputNumber=tpCEngNumInput.value;
    if (inputNumber=="") {
        tpCEngNumInput.placeholder="You did't enter a number!";
        return;
    }
    for (let i = 0; i < 100; i++) {
        if (i==inputNumber) {
            gameEng(inputNumber);
            return;
        }
        }
        tpCEngNumInput.value="";
        tpCEngNumInput.placeholder="Bad number!";
}
function gameEng(inputNumber) {
    console.log(randomNumberNum);
    counter--;
    console.log(counter);
  if (counter==1) {
    spanCounter[1].innerHTML="last chance!";
    if (inputNumber<randomNumberNum) {
        tpCEngNumInput.value="";
        tpCEngNumInput.placeholder="Unfortunately not found!";
        tPCEngHelpTexth5.innerHTML="I thought of a bigger number than that!";
      }
      if (inputNumber>randomNumberNum) {
        tpCEngNumInput.value="";
        tpCEngNumInput.placeholder="Unfortunately not found!";
        tPCEngHelpTexth5.innerHTML="I thought of a smaller number!";
      }
      if (inputNumber==randomNumberNum) {
          document.getElementById('fPCh2').innerHTML="Gratulálok! Kitaláltad!"
          thirdPageContainer.classList.add('hide');
          fourthPageContainer.classList.remove('hide');
      }
      return;
  }; 

  if (counter==0) {
    if (inputNumber==randomNumberNum) {
        document.getElementById('fPCh2').innerHTML="Congratulations! You guessed the number!"
        thirdPageContainer.classList.add('hide');
        fourthPageContainer.classList.remove('hide');
    } else {
        document.getElementById('fPCh2').innerHTML="Unfortunately, you can't figure out the number!"
        thirdPageContainer.classList.add('hide');
        fourthPageContainer.classList.remove('hide');
    }
  }
  
if (inputNumber<randomNumberNum) {
    tpCEngNumInput.value="";
    tpCEngNumInput.placeholder="Unfortunately not found!";
    tPCEngHelpTexth5.innerHTML="I thought of a bigger number than that!";
    }
if (inputNumber>randomNumberNum) {
    tpCEngNumInput.value="";
    tpCEngNumInput.placeholder="Unfortunately not found!";
    tPCEngHelpTexth5.innerHTML="I thought of a smaller number!";
    }
if (inputNumber==randomNumberNum) {
        document.getElementById('fPCh2').innerHTML="Congratulations! You guessed the number!"
        thirdPageContainer.classList.add('hide');
        fourthPageContainer.classList.remove('hide');
    }
spanCounter[0].innerHTML=counter;
spanCounter[1].innerHTML=counter;
}
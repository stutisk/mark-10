const billTotal = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
var notesToReturn = document.querySelector("#no-of-notes");
const message=document.querySelector("#error-message");
const nextBtn = document.querySelector(".nextBtn");
const checkButton = document.querySelector("#check");
const cashContainer= document.querySelector("cash-container ");
const changeContainer= document.querySelector("change-container ")
const tableElement=document.querySelector(".table");

const availableNotes = [2000,500,100,20,10,5,1];

nextBtn.addEventListener("click", () => {
    if(billTotal.value>0) {
        hideMessage();
        cashContainer.style.display="flex";
        nextBtn.style.display="none";
    }
    else{
        showMessage("bill needs to be more then 0");

    }
   
});

checkButton.addEventListener("click", () => {
    changeContainer.style.display="none";

  
    if(billTotal.value>0 && cashGiven>billTotal){
        hideMessage();
            const sum = cashGiven.value - billTotal.value;
            calculateChange(sum);
            changeContainer.style.display="block"
        }
       else if (cashGiven<billTotal) {
           showMessage("ahan intrested to wash plates :P");

       }
       else if(cashGiven==billTotal) {
            showMessage("no change to be retuned ")
       }
       }
    
);

function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}
function hideMessage(){
    message.style.display="none";
    message.innerText="";
    };

const calculateChange = (bill) => {
    for (i = 0; i < availableNotes.length; i++) {
      let notesRequired = Math.trunc(bill / availableNotes[i]);
      notesToReturn[i].innerText = notesRequired;
      bill = bill % availableNotes[i];
}


}    
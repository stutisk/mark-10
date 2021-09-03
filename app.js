const billTotal = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const notesToReturn = document.querySelectorAll(".no-of-notes");
const message=document.querySelector("#error-message");
const nextBtn = document.querySelector("#nextBtn");
const checkButton = document.querySelector("#check-btn");
const cashContainer= document.querySelector("#cash-container");
const changeContainer= document.querySelector("#change-container");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener("click", () => {
    if (billTotal.value>0) {
        hideMessage();
        cashContainer.style.display="flex";
        nextBtn.style.display="none";
    }
    else{
        showMessage("bill needs to be more then 0");

    }
   
});

checkButton.addEventListener("click", () => {
    let bill = Number(billTotal.value);
    let cash = Number(cashGiven.value);
    changeContainer.style.display= "none";

  
    if(bill>0 && cash>bill){
        hideMessage();
         calculateChange(cash - bill);
         changeContainer.style.display= "block";
        }
       else if (cash<bill) {
           showMessage("ahan intrested to wash plates :P");

       }
       else if(cash==bill) {
            showMessage("no change to be retuned ")
       }
       }
    
);

function showMessage(msg){
    message.style.display="block";
    message.innerText= msg;
}
function hideMessage(){
    message.style.display= "none";
    message.innerText="";
    };

const calculateChange = (bill) => {
    for (i = 0; i < availableNotes.length; i++) {
      let notesRequired = Math.trunc(bill / availableNotes[i]);
      notesToReturn[i].innerText = notesRequired;
      bill = bill % availableNotes[i];
     
}


};

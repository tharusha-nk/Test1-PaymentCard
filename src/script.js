const creditCard = document.getElementById("creditCard");
const paypalCheck = document.getElementById("paypalCheck");
const cashCheck = document.getElementById("cashCheck");
const mysubmit = document.getElementById("mysubmit");
const alertOther = document.getElementById("alertmsg");
const closebtn = document.getElementById("closebtn");

mysubmit.onclick = function () {
    if(creditCard.checked && paypalCheck.checked && cashCheck.checked) {
        alertmsg.textContent = "All payment methods selected!";
    }
    else if(creditCard.checked && paypalCheck.checked || creditCard.checked && cashCheck.checked || paypalCheck.checked && cashCheck.checked) {
        alertmsg.textContent = "Please select only one payment method!";
    }
    else if (creditCard.checked) {
        alertmsg.textContent = "Credit Card selected!";
    }
    else if(paypalCheck.checked) {
        alertmsg.textContent = "Paypal selected!";
    }
    else if(cashCheck.checked) {
        alertmsg.textContent = "Cash selected!";
    }
    else if(creditCard.checked && paypalCheck.checked && cashCheck.checked) {
        alertmsg.textContent = "All payment methods selected!";
    }
    else {
        alertmsg.textContent = "No payment method selected!";
    }

}

closebtn.onclick = function () {
    window.close();
}  

function validateForm() {
  let loanAmount = document.getElementById("loanAmount");
  let loanPurpose = document.getElementById("loanPurpose");
  let firstName = document.getElementById("firstName");

  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let zip = document.getElementById("zip")
   regPhone = regMPhone = /^\d{10}$/
   regname = /^[a-zA-Z]+$/;
   regZip = /^\d{6}$/
  regAmt =
    /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/
    let regPur = "^\\s+[A-Za-z,;'\"\\s]+[.?!]$";

  if (loanAmount.value.trim() == "" || !regAmt.test(loanAmount.value)) {
    loanAmount.style.border = "solid 3px red";
    document.getElementById("loanAmountError").style.visibility = "visible";
    return false;
  }
   else if (loanPurpose.value.trim() == "") {
    loanPurpose.style.border = "solid 3px red";
    document.getElementById("loanPurposeError").style.visibility = "visible";
    return false;
  } 
  else if (!regname.test(firstName.value) || firstName.value.trim() == "") {
    firstName.style.border = "solid 3px red";
    document.getElementById("firstnameError").style.visibility = "visible";
    return false;
  } 
  else if (!regname.test(lastName.value) || lastName.value.trim() == "") {
    lastName.style.border = "solid 3px red";
    document.getElementById("lastnameError").style.visibility = "visible";
    return false;
  } else {
    return true;
  }
}

function emailValidation(){
   let email = document.getElementById("email")
   let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

   //console.log(mailFormat.test(email.value));
   if(!mailFormat.test(email.value)){
     // email.style.border = "solid 3px red";
      document.getElementById("EmailError").style.visibility="visible";
      return false;
   }

  else{
      // email.style.border = "solid 3px red";
       document.getElementById("EmailError").style.visibility="hidden";
       return false;
    }
}

function mask(o, f) {
   setTimeout(function () {
       let v = f(o.value);
       if (v != o.value) {
           o.value = v;
       }
   }, 1);
}
function mssn(v) {
   let r = v.replace(/\D/g,"");

  
   if (r.length > 9) {
       r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
     return r;
   }
   else if (r.length > 4) {
       r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
   }
   else if (r.length > 2) {
       r = r.replace(/^(\d\d\d)(\d{0,3})/,"$1-$2");
   }
   else {
       r = r.replace(/^(\d*)/, "$1");
   }
   // else{
   //    return document.getElementById("SNNError").style.visibility="visible";
      
   // }
   return r;
}
function ssnValidation(){
   let ssn = document.getElementById("SNN")
   let regSnn =  "/^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/";
   if (ssn.value.trim() == "" || !regSnn.test(ssn.value)) {
     // ssn.style.border = "solid 3px red";
      document.getElementById("SNNError").style.visibility = "visible";
      return false;
    }
     else  {
     // ssn.style.border = "solid 3px red";
      document.getElementById("SNNError").style.visibility = "disable";
      return false;
    } 
}



function loanAmountValidation(){
      let loanAmount = document.getElementById("loanAmount")
      let amount =/^[0-9]*$/;

   if(loanAmount.value.trim() == ""||loanAmount.value<2000 || loanAmount.value>20000){
      document.getElementById("loanAmountError").style.visibility = "visible";
      return false;
   }
   else if(!loanAmount.value.match(amount)){
      document.getElementById("loanAmountError").style.visibility = "visible";
      return false;
   }
   else{
      document.getElementById("loanAmountError").style.visibility = "hidden";
      return false;
   }
}

function isPurpose(){
   let loanPurpose = document.getElementById("loanPurpose");
   let purpose = /^[a-zA-Z ]*$/;
   
   //console.log(!regPur.match(loanPurpose.value))
   if (loanPurpose.value.trim() == "") {
      //loanPurpose.style.border = "solid 3px red";
      document.getElementById("loanPurposeError").style.visibility = "visible";
      return false;
      }
   else if(!loanPurpose.value.match(purpose)){
      document.getElementById("loanPurposeError").style.visibility = "visible";
      return false;
   }
   
   else{
      document.getElementById("loanPurposeError").style.visibility = "hidden";
      return false;
   }
}

function homeMobileValidation(e){
  
let hPhone = document.getElementById("hPhone");
let homePhone = /^[0-9]*$/;
if (hPhone.value.trim() == "" ) {
   
   document.getElementById("hPhoneError").style.visibility = "visible";
   return false;
   }
   else if(!hPhone.value.match(homePhone)){
      document.getElementById("hPhoneError").style.visibility = "visible";
      return false;
   }
else {
   document.getElementById("hPhoneError").style.visibility = "hidden";
   return false;
}
} 
function homeMobileMasking(){

   let ele = document.getElementById("hPhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("hPhone").value = finalVal;
 }


function mobileValidation(){
  
 let mPhone = document.getElementById("mPhone");
 let mobilePhone = /^[0-9]*$/;
 if (mPhone.value.trim() == "") {
   
    document.getElementById("mphoneError").style.visibility = "visible";
    return false;
    }
    else if(!mPhone.value.match(mobilePhone)){
      document.getElementById("mphoneError").style.visibility = "visible";
      return false;
   }
 else {
    document.getElementById("mphoneError").style.visibility = "hidden";
    return false;
 }
 } 

 function mobileMasking(){

   let ele = document.getElementById("mPhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("mPhone").value = finalVal;
 }


 function dOB() {
   let today = new Date();
 
   today.setDate(today.getDate() - 18 * 365);
 
   let dd = String(today.getDate()).padStart(2, "0");
   let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
   let yyyy = today.getFullYear();
   today = yyyy + "-" + mm + "-" + dd;
   document.getElementById("DOB").max = today;
 }

 function zipvalidation(){

let zip = document.getElementById("zip")
let zipVal = /^[0-9]*$/;

if (zip.value.trim() == ""|| zip.value.length<5) {
   //loanPurpose.style.border = "solid 3px red";
   document.getElementById("zipError").style.visibility = "visible";
   return false;
   }
else if(!zip.value.match(zipVal)){
      document.getElementById("zipError").style.visibility = "visible";
      return false;
   }
else {
   document.getElementById("zipError").style.visibility = "hidden";
   return false;
}
 }

function firstNameValidation(){
   let firstName = document.getElementById("firstName")
   let name = /^[a-zA-Z ]*$/;
   if(firstName.value.trim() == ""){
      document.getElementById("firstnameError").style.visibility="visible";
      return false;
   }
   else if(!firstName.value.match(name)){
      document.getElementById("firstnameError").style.visibility="visible";
      return false;
   }
   else{
      document.getElementById("firstnameError").style.visibility="hidden";
      return false;
   }
}

function lastNameValidation(){
   let lastName = document.getElementById("lastName")
   let lastn = /^[a-zA-Z ]*$/;
   if(lastName.value.trim() == ""){
      document.getElementById("lastnameError").style.visibility="visible";
      return false;
   }
   else if(!lastName.value.match(lastn)){
      document.getElementById("lastnameError").style.visibility="visible";
      return false;
   }
   else{
      document.getElementById("lastnameError").style.visibility="hidden";
      return false;
   }
}

function cityValidation(){
   let cityVal = document.getElementById("city")
   let regCity = /^[a-zA-Z ]*$/;
   if(cityVal.value.trim() == ""){
      document.getElementById("cityError").style.visibility="visible";
      return false;
   }
   else if(!cityVal.value.match(regCity)){
      document.getElementById("cityError").style.visibility="visible";
      return false;
   }
   else{
      document.getElementById("cityError").style.visibility="hidden";
      return false;
   }
}

function empMobileMasking(){

   let ele = document.getElementById("ePhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("ePhone").value = finalVal;
 }

 function empMobileValidation(){
   // let pattern = "/^\d{10}$/"
  
 let empphone = document.getElementById("ePhone");
 let empmobilePhone = /^[0-9]*$/;
 if (empphone.value.trim() == "") {
    //loanPurpose.style.border = "solid 3px red";
    document.getElementById("empPhoneError").style.visibility = "visible";
    return false;
    }
 else if(!empphone.value.match(empmobilePhone)){
      document.getElementById("empPhoneError").style.visibility = "visible";
      return false;
   }
 else {
    document.getElementById("empPhoneError").style.visibility = "hidden";
    return false;
 }
 } 


function incomeValidation(){

      let empIncome = document.getElementById("aIncome")
      let amountIncome =/^[0-9]*$/;

   if(empIncome.value.trim() == ""){
      document.getElementById("annualIncome").style.visibility = "visible";
      return false;
   }
   else if(!empIncome.value.match(amountIncome)){
      document.getElementById("annualIncome").style.visibility = "visible";
      return false;
   }
   else{
      document.getElementById("annualIncome").style.visibility = "hidden";
      return false;
   }
}







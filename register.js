function validateForm(){
    var firstName = document.forms["registerForm"]["firstName"].value;
    var lastName = document.forms["registerForm"]["lastName"].value;
    var dateOfBirth = document.forms["registerForm"]["dateOfBirth"].value;
    var emailId = document.forms["registerForm"]["emailId"].value;
    var mobileNumber = document.forms["registerForm"]["mobileNumber"].value;
    var address = document.forms["registerForm"]["address"].value;
    // var  yearsOfExperience= document.forms["registerForm"]["yearsOfExperience"].value;
    if (firstName == ""){
        alert("First Name must be filled.");
        return false;
    }
    if (lastName == ""){
        alert("Last Name must be filled.");
        return false;
    }
    if (dateOfBirth == ""){
        alert("Date of Birth must be filled.");
        return false;
    }
    else{
        let regExpDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[1,2])\/(19[0-9]{2}|20[01][0-9]|202[0-3])$/;
        let resultDate = regExpDate.test(dateOfBirth);
        if(!resultDate){
            alert("Date format incorrect.");
            return false;
        }
    }
    if (emailId == ""){
        alert("Email Id must be filled.");
        return false;
    }
    else{
        let regExpEmailId = /^[a-z0-9]+@+[a-z]+\.[a-z]{2,3}$/;
        let resultMail = regExpEmailId.test(emailId);
        if(!resultMail){
            alert("Invalid mail id.")
            return false;
        }
    }
    if (mobileNumber == ""){
        alert("Mobile Number must be filled.");
        return false;
    }
    else{
        if(mobileNumber.length == 10){
            let regExpMobile = /^[0-9]{10}$/;
            let resultMobile= regExpMobile.test(mobileNumber);
            if(!resultMobile){
                alert("Invalid Mobile Number.");
                return false;
            }
        }
        else if(mobileNumber.length > 10){
            alert("More than 10 digits.");
            return false;
        }
        else{
            alert("Less than 10 digits.");
            return false;
        }
    }
    if (address == ""){
        alert("Address must be filled.");
        return false;
    }
    if (yearsOfExperience == ""){
        alert("Years of experience must be filled.");
        return false;
    }
    else{
        let regExpYearExp = /^[0-9]{1}|[0-9]{2}$/;
            let resultYearExp= regExpYearExp.test(yearsOfExperience);
            if(!resultYearExp){
                alert("Invalid Input.");
                return false;
            }
    }
    return true;
}

function closePage(name){
                
    window.location.href=name;
}

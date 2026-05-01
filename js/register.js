const form_register = document.getElementById("registerForm")

if (form_register){
    form_register.addEventListener("submit", (e)=>{
        e.preventDefault()
        const fullname = document.getElementById("fullname")
        const dob = document.getElementById("dob")
        const gender = document.getElementsByName("gender")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const address = document.getElementById("address")
        const error = document.getElementById("error")
        let msg = []

        if(fullname.value.length < 4 || fullname.value.length > 20 || fullname.value.includes(" ")){
            msg.push("Username must be 4-20 characters and contain no spaces")
        }

        let today = new Date();
        let userDOB = new Date(dob.value);

        let age = today.getFullYear() - userDOB.getFullYear();
        let monthDiff = today.getMonth() - userDOB.getMonth();

        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < userDOB.getDate())){
            age--;
        }

        if(isNaN(age) || age < 13){
            msg.push("You must be at least 13 years old");
        }

        for(let i = 0; i < gender.length; i++){
            if (gender[i].checked == true) {
                break
            }
            if (i == gender.length - 1){
                msg.push("Gender must be chosen")
            }
        }

        if(email.value == "" || email.value.indexOf("@") == 0){
            msg.push("Email format should be correct")
        }

        if(phone.value == "" || isNaN(phone.value) || phone.value.length < 10){
            msg.push("Phone must be numbers and must be at least 10 numbers")
        }

        if(address.value == "" || address.value.length < 10){
            msg.push("Address must be at least 10 characters")
        }

        if(msg.length > 0){
            error.innerHTML = msg.join("<br>");
            successBanner.style.display = "none";
        } else{
            error.innerHTML = "";
            successBanner.style.display = "block";
            successBanner.scrollIntoView({ behavior: "smooth" });

            form_register.reset();
        }
    })
}
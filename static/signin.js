const forms= document.querySelector(".wrapper"),
      pwShowHide= document.querySelectorAll(".eye-icon"),
      links= document.querySelectorAll(".link");
// console.log(forms,pwShowHide,links)


pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        let pwFeilds= eyeIcon.parentElement.parentElement.querySelectorAll(".password");
         pwFeilds.forEach(password =>{
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;

            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show","bx-hide");
         })
    })
})
links.forEach(link => {
    link.addEventListener("click",e =>{
        e.preventDefault();  //preventing form submit
        forms.classList.toggle("show-signup");
    })
})
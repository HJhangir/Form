const form = document.getElementById('form')

// console.log(form)

const usernameEl = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPasswordEl = document.querySelector('#password2')



function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = "form-control error"

    const small = formControl.querySelector('small')
    small.innerText = message

    const i = formControl.querySelector('fa-xmark')



}

// showError(usernameEl,"istifadeci adi bosh qala bilmez")
// showError(emailEl,"Email bosh qala bilmez")
// showError(password,"shifre daxil edilmedi")
// showError(confirmPasswordEl,"Shifreler duzgun deyil")


function showSuccess(qutu) {
    const formControl = qutu.parentElement
    formControl.className = "form-control success"

    const small = formControl.querySelector('small')

    const i = formControl.querySelector('.fa-check')


}
// showSuccess(usernameEl)
// showSuccess(email)
// showSuccess(password)
// showSuccess(confirmPasswordEl)

function checkEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.trim())) {
        showSuccess(email)

    } else{
        showError(email,"elektron pochtu duzgun daxil et!")
    }



}

function checkRequired(inputlarMassivi){
    inputlarMassivi.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)}`)

        }
        else{
            showSuccess(input)
        }
        
    });



function checklength(input,min,max){
    if (input.value.length <min){
        showError(input,`${getFieldName(input)} minimum ${min} simvoldan az olmamalidir!`)
    }

    else if(input.value.length>max ){ 
           showError(input,`${getFieldName(input)} maximum ${max} simvoldan ibaret olamlidir!`)
}


}

function checkPasswordMath(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, `${getFieldName(input2)} password ${input2} shifresi duzgun deyil!`)
    }
    
}


}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(0)
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    checkRequired([usernameEl, emailEl, password, confirmPasswordEl])
    checklength([usernameEl,3, 17])
    checklength([password, 8, 18])
    checkEmail([emailEl])
    checkPasswordMath(password,confirmPasswordEl)
})

console.log(getFieldName(usernameEl))




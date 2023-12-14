const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telefoneInput = document.querySelector("#telefone")
const cepInput = document.querySelector("#cep")
const cidadeInput = document.querySelector("#cidade")
const estadoInput = document.querySelector("#uf")

console.log(form, nameInput, emailInput, telefoneInput, cepInput)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === "") {
        alert("Por favor, insira seu e-mail corretamente");
            return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, insira seu e-mail corretamente");
        return;
    }

    if(telefoneInput.value === "" || !isTelefoneValid(telefoneInput.value)){
        alert("Por favor, corrija o seu telefone");
        return;
    }

    if(cepInput.value === "" || !isCepValid(cepInput.value)){
        alert("Por favor, preencha seu CEP corretamente");
        return;
    }

    
function isEmailValid(email) {

    const emailRegex = new RegExp(
        /^^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true
    }
    return false
}

function isTelefoneValid(telefone) {

    const telefoneRegex = new RegExp(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
    )

    if(telefoneRegex.test(telefone)) {
        return true
    }
    return false
}

function isCepValid(cep) {

    const cepRegex = new RegExp(
        /^[0-9]{5}-[0-9]{3}$/
    );

    if(cepRegex.test(cep)) {
        return true
    }
    return false
}

form.submit();
});
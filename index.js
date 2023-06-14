const form = document.getElementById("form")
form.addEventListener("submit", (e) => sendData(e))

function sendData(e){
    e.preventDefault();
    const popUp = document.getElementById("pop-up-window")
    const fields = document.getElementsByClassName("input")
    const formObj = {}
    for (let field of fields){
        formObj[field.id] = field.value
    }
    if(!Object.values(formObj).includes("")){
        console.log(formObj.serviceQuality)
        const sum = Math.floor(formObj.inputBill * (formObj.serviceQuality / 100) / formObj.inputGuests)
        alert("каждый скидывается по " + sum + "р.")
    }
    else{
        popUp.style.display = "block"
        // popUp. = "Все поля должны быть заполнены"
    }
    
}   
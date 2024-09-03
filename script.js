let form = document.querySelector("form")

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let commentaire = document.querySelector("#commentaire").value;

    if(nom == "" || prenom == "" || commentaire == ""){
        let errorMessage = document.querySelector(".message-error");
        errorMessage.style.display = "block"
    }
    else(nom == "#nom" || prenom == "#prenom" || commentaire == "#commentaire"){
        let submit = document.querySelector(".submit");
    }
})
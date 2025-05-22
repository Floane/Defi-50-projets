// Effacer tout le champ de saisie
function Effacer() {
    document.getElementById("zone-texte").value="";
    CountWithSpaces.textContent = 0;
    CountWithoutSpaces.textContent = 0;
    CountWords.textContent = 0;
}

// Copier tout le champs de saisie
function Copier() {
    var texte = document.getElementById("zone-texte");
    texte.select();
    document.execCommand("copy");
    alert('Copié !');
}

// Changement de thème (mode sombre / mode clair)
var bulb = document.querySelector(".bx-bulb");
var body = document.querySelector(".body");
bulb.onclick = function() {
    if(body.classList.contains != "dark"){
        body.classList.toggle("dark");
    }
    else{
        body.classList.remove("dark");
    }
}

// compteurs
const textarea = document.getElementById("zone-texte");
const CountWithSpaces = document.getElementById("countWithSpaces");
const CountWords = document.getElementById("countWords");
const CountWithoutSpaces = document.getElementById("countChars");

textarea.addEventListener('input', () => {
    // caractères avec espaces
    CountWithSpaces.textContent = textarea.value.length;

    // caractères sans espaces
    const words = textarea.value.split('');
    CountWithoutSpaces.innerText = words.filter(item => {
        return (item != ' ');
    }).length;

    // mots 
    CountWords.textContent = textarea.value.trim().split(/\s+/).length;
});

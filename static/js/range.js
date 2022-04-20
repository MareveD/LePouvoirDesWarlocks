let force = document.getElementById("force");
let intelligence = document.getElementById("intelligence");
let dexterite = document.getElementById("dexterite");
let constitution = document.getElementById("constitution");
let sagesse = document.getElementById("sagesse");
let charisme = document.getElementById("charisme");

let valeurForce = document.getElementById("valeurForce");
let valeurIntelligence = document.getElementById("valeurIntelligence");
let valeurDexterite = document.getElementById("valeurDexterite");
let valeurConstitution = document.getElementById("valeurConstitution");
let valeurSagesse = document.getElementById("valeurSagesse");
let valeurCharisme = document.getElementById("valeurCharisme");


valeurForce.innerHTML = force.value;
valeurIntelligence.innerHTML = intelligence.value;
valeurDexterite.innerHTML = dexterite.value;
valeurConstitution.innerHTML = constitution.value;
valeurSagesse.innerHTML = sagesse.value;
valeurCharisme.innerHTML = charisme.value;


force.oninput = function () {
    valeurForce.innerHTML = this.value;
}

intelligence.oninput = function () {
    valeurIntelligence.innerHTML = this.value;
}

dexterite.oninput = function () {
    valeurDexterite.innerHTML = this.value;
}

constitution.oninput = function () {
    valeurConstitution.innerHTML = this.value;
}

sagesse.oninput = function () {
    valeurSagesse.innerHTML = this.value;
}

charisme.oninput = function () {
    valeurCharisme.innerHTML = this.value;
}
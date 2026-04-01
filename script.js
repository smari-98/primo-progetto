// Selezioniamo gli elementi 
const bottone = document.getElementById('sommaBtn');
const output = document.getElementById('risultato');
//FUNZIONE contaclick
let count = 0;

function contaClick() {
    count++;
    document.getElementById("counter").innerText = count;
}

// Aggiungiamo un "Listener" 
bottone.addEventListener('click', function() {
    // Prendiamo i valori e li convertiamo in numeri (perché di base sono stringhe)
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);

    // Verifichiamo se sono numeri validi
    if (!isNaN(n1) && !isNaN(n2)) {
        const somma = n1 + n2;
        output.innerText = somma; // Iniettiamo il risultato nell'HTML
    } else {
        output.innerText = "Inserisci numeri validi!";
    }
});

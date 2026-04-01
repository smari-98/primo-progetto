// Selezioniamo gli elementi (come faresti con i puntatori o oggetti)
const bottone = document.getElementById('sommaBtn');
const output = document.getElementById('risultato');

// Aggiungiamo un "Listener" (molto simile agli EventListener di Java Swing/AWT)
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

// 1: Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.



$(document).ready(function(){

    const oggetti_icone = [

        {
            nome: 'hippo',
            prefisso: 'fa-',
            tipo: 'animal',
            famiglia: 'fas'
        },
        {
            nome: 'dog',
            prefisso: 'fa-',
            tipo: 'animal',
            famiglia: 'fas'
        },
        {
            nome: 'spider',
            prefisso: 'fa-',
            tipo: 'animal',
            famiglia: 'fas'
        },
        {
            nome: 'dragon',
            prefisso: 'fa-',
            tipo: 'animal',
            famiglia: 'fas'
        },
        {
            nome: 'horse',
            prefisso: 'fa-',
            tipo: 'animal',
            famiglia: 'fas'
        },
        {
            nome: 'cat',
            prefisso: 'fa-',
            tipo: 'animal',
            famiglia: 'fas'
        },

    ];

    // Devo scorrere tutte gli oggetti dentro l'array.

    oggetti_icone.forEach((icona) => {

    // Devo destrutturare solo le parti delle icone che mi interessano.

        const {nome, prefisso, famiglia} = icona;

    // Devo stampare a schermo l'icona con il nome usando il template literal.

    $('#contenitore_icone').append(`

        <div class="icona">
            <i class="${famiglia} ${prefisso}${nome} fa-2x"></i>
            <p class="name">${nome}</p>
        </div>

        `)
    });

    // 2: definire un array di colori e associare ad ogni tipo di icona un colore.
    // Visualizzare le icone di colore diverso in base al tipo.



    // 3: Aggiungere una select per filtrare le icone in base al tipo.
    // Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.


});

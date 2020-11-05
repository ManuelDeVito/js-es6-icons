// 1: Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// 2: definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.



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
            nome: 'carrot',
            prefisso: 'fa-',
            tipo: 'vegetable',
            famiglia: 'fas'
        },
        {
            nome: 'lemon',
            prefisso: 'fa-',
            tipo: 'vegetable',
            famiglia: 'fas'
        },
        {
            nome: 'pepper-hot',
            prefisso: 'fa-',
            tipo: 'vegetable',
            famiglia: 'fas'
        },
        {
            nome: 'leaf',
            prefisso: 'fa-',
            tipo: 'vegetable',
            famiglia: 'fas'
        },
        {
            nome: 'user-tie',
            prefisso: 'fa-',
            tipo: 'user',
            famiglia: 'fas'
        },
        {
            nome: 'user-secret',
            prefisso: 'fa-',
            tipo: 'user',
            famiglia: 'fas'
        },
        {
            nome: 'user-ninja',
            prefisso: 'fa-',
            tipo: 'user',
            famiglia: 'fas'
        },
        {
            nome: 'user-nurse',
            prefisso: 'fa-',
            tipo: 'user',
            famiglia: 'fas'
        },
    ];

    //Creo un array di tre colori visto che abbiamo tre tipi di icone diverse.
    const colori = ['yellow', 'red', 'orange'];

    //Devo associare i colori ai tipi di icone.
    //Recupero i tre tipi di icone e li salvo dentro un array.

    const tipi_icone = [];

    //Scorro tutti gli oggetti.

    oggetti_icone.forEach((icona) => {

    //Per ogni icona recupero solo il tipo con la destrutturazione.

    const {tipo} = icona;

     //Controllo se il mio tipo di icona è presente dentro l'array.
     // Se il tipo di icona non è presente nell'array allora pushalo.
    if (!tipi_icone.includes(tipo)) {

        tipi_icone.push(tipo)
    }

    });

    console.log(tipi_icone);




    // Devo scorrere tutte gli oggetti dentro l'array.

    oggetti_icone.forEach((icona) => {

    // Devo destrutturare solo le parti delle icone che mi interessano.

        const {nome, prefisso, famiglia, tipo} = icona;

    // Recupero l'indice del tipo di icona dentro l'array corrispondente.

        var tipo_indice = tipi_icone.indexOf(tipo);

        console.log(tipo_indice);

    // Recupero il colore corrispondente all'indice del tipo d'icona.

        var colore_indice = colori[tipo_indice];

        console.log(colore_indice);


    // Devo stampare a schermo l'icona con il nome usando il template literal.

    $('#contenitore_icone').append(`

        <div class="icona">
            <i class="${famiglia} ${prefisso}${nome} fa-2x" style="color:${colore_indice}"></i>
            <p class="name">${nome}</p>
        </div>

        `)


    });







    // 3: Aggiungere una select per filtrare le icone in base al tipo.
    // Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.


});

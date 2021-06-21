//array di gatti e ciclo foreach per stamparli con nome e colore

const gatti = [
    {
        nome: 'Birba',
        anni: 3,
        colore: '#000000',
        genere: 'femmina'
    },
    {
        nome: 'Micio',
        anni: 4,
        colore: '#000000',
        genere: 'maschio'
    },
    {
        nome: 'Pippo',
        anni: 8,
        colore: '#AAA5A2',
        genere: 'maschio'
    },
    {
        nome: 'Mimì',
        anni: 2.5,
        colore: '#F75C1E',
        genere: 'femmina'
    },
    {
        nome: 'Penny',
        anni: 5,
        colore: '#AAA5A2',
        genere: 'femmina'
    },
    {
        nome: 'Ghemon',
        anni: 6,
        colore: '#000000',
        genere: 'maschio'
    }
];

gatti.forEach((element) => {
    document.getElementById("container").innerHTML += `
    ${element.nome}: <i class="fas fa-cat" style="color:${element.colore}"></i>,
    `;
});

// aggiunta fiocco in base al genere

const rosa = "#E7120F";
const blu = "#211CBB";

const gattiFiltrati = gatti.map((element) => {
    const{nome, anni, colore, genere} = element;
    const opaco = element.anni / 9;
    return {
        nome,
        anni,
        colore,
        genere,
        fiocco : {
            colore : (genere == 'femmina') ? rosa : blu,
            opaco : opaco
        }
    }
});
// stampa fiocco in html

const stampaFiocco = (array) => {
    array.forEach((element) => {
        document.getElementById("container").innerHTML += `<br/><br/>
            ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i> 
            <i class="fas fa-ribbon" style="color:${element.fiocco.colore}; opacity:${element.fiocco.opaco}"></i>,
        
        `;

    });
}

// divido i gatti in maschi e femmine

const gattiMaschi = gattiFiltrati.filter((element) => {
    return element.genere === 'maschio';
});
document.getElementById("container").innerHTML += "<br/><br/>Maschi";
stampaFiocco(gattiMaschi);

const gattiFemmine = gattiFiltrati.filter((element) => {
    return element.genere === 'femmina';
});
document.getElementById("container").innerHTML += "<br/><br/>Femmine";
stampaFiocco(gattiFemmine);

//creo un nuovo array con prima tutti i maschi e poi tutte le femmine

let gattiMF = [...gattiMaschi, ...gattiFemmine];

const nomeColoreFiocco = gattiMF.map((element) => {
    const{nome, colore, opaco} = element;

    return {
        nome,
        colore,
        fiocco
    }
});
stampaFiocco(nomeColoreFiocco);
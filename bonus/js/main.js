// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Creare l’array di oggetti con le informazioni fornite.
const membersList = [
    {
        "name":"Angela Caroll",
        "role":"Chief Editor",
        "pic":"angela-caroll-chief-editor.jpg",
    },
    {
        "name":"Angela Lopez",
        "role":"Social Media Manager",
        "pic":"angela-lopez-social-media-manager.jpg",
    },
    {
        "name":"Barbara Ramos",
        "role":"Graphic Designer",
        "pic":"barbara-ramos-graphic-designer.jpg",
    },
    {
        "name":"Scott Estrada",
        "role":"Developer",
        "pic":"scott-estrada-developer.jpg",
    },
    {
        "name":"Walter Gordon",
        "role":"Office Manager",
        "pic":"walter-gordon-office-manager.jpg",
    },
    {
        "name":"Wayne Barnett",
        "role":"Founder CEO",
        "pic":"wayne-barnett-founder-ceo.jpg",
    }
];

// console.log(membersList);

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membersList.length; i++) {
    const member = membersList[i];

    console.log("nome: " + member.name + " ruolo: " +  member.role + " stringa foto: " +  member.pic);
    
    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    // seleziono l'elemento contenitore
    let container = document.getElementById("container");

    // creo l'elemento che conterrà le stringhe
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = 
        `<span>nome: ${member.name}</span>
        <span>ruolo: ${member.role}</span>
        <div>
            <img src="img/${member.pic}" alt="member picture">
        </div>
        `;

    // inserisco l'elemento creato nel contenitore
    container.appendChild(card);
}


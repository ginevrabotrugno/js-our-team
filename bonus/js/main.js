// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Creare l’array di oggetti con le informazioni fornite.
const membersList = [
    {
        "name":"Wayne Barnett",
        "role":"Founder CEO",
        "pic":"wayne-barnett-founder-ceo.jpg",
    },
    {
        "name":"Angela Caroll",
        "role":"Chief Editor",
        "pic":"angela-caroll-chief-editor.jpg",
    },
    {
        "name":"Walter Gordon",
        "role":"Office Manager",
        "pic":"walter-gordon-office-manager.jpg",
    },
    {
        "name":"Angela Lopez",
        "role":"Social Media Manager",
        "pic":"angela-lopez-social-media-manager.jpg",
    },
    {
        "name":"Scott Estrada",
        "role":"Developer",
        "pic":"scott-estrada-developer.jpg",
    },
    {
        "name":"Barbara Ramos",
        "role":"Graphic Designer",
        "pic":"barbara-ramos-graphic-designer.jpg",
    }   
];

// console.log(membersList);

// seleziono l'elemento contenitore
let container = document.getElementById("container");

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membersList.length; i++) {
    const member = membersList[i];

    console.log("nome: " + member.name + " ruolo: " +  member.role + " stringa foto: " +  member.pic);
    
    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    // creo l'elemento che conterrà le stringhe
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = 
        `                    
        <img src="img/${member.pic}" alt="member picture">
        <div class="title">
            <span class="name_member">${member.name}</span>
            <span>${member.role}</span>
        </div>
        `;

    // inserisco l'elemento creato nel contenitore
    container.appendChild(card);
}


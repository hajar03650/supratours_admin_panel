const tableBody = document.querySelector('#chauffeur-table tbody');
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#delete');
const rowHTML = ``;

async function fetchChauffeurs() {
    try {
        const data = await getChauffeurs();
        tableBody.innerHTML = ''; // Clear the table before adding new rows
            data.forEach(chauffeur => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <input type="hidden" value="${chauffeur.id}">
                <td>${chauffeur.nom}</td>
                <td>${chauffeur.prenom}</td>
                <td>${chauffeur.permis_conduire}</td>
                <td>
                    <button class="delete" title="Delete" onclick="deleteChauffeurs(this);"><i class="fa fa-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error : " + error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchChauffeurs();
});

async function addChauffeurs() {
    const nom = document.querySelector('#nom').value;
    const prenom = document.querySelector('#prenom').value;
    const permis_conduire = document.querySelector('#permis_conduire').value;

    const addData = {
        "nom": nom.toString(),
        "prenom": prenom.toString(),
        "permis_conduire": permis_conduire.toString(),
    };

    const response = await createChauffeur(addData);
}

addButton.addEventListener("click", () => {
    addChauffeurs();
});

function deleteChauffeurs(element) {
    const row = element.parentElement.parentElement;
    const id = row.querySelector('input').value;
    deleteChauffeur(id,row);
}
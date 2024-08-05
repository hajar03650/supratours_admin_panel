const tableBody = document.querySelector('#autocar-table tbody');
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#delete');
const rowHTML = ``;

async function fetchAutocars() {
    try {
        const data = await getAutocars();
        tableBody.innerHTML = ''; // Clear the table before adding new rows
            data.forEach(autocar => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <input type="hidden" value="${autocar.id}">
                <td>${autocar.immatriculation}</td>
                <td>${autocar.marque}</td>
                <td>${autocar.modele}</td>
                <td>${autocar.capacite}</td>
                <td>
                    <button class="delete" title="Delete" onclick="deleteAutocars(this);"><i class="fa fa-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error : " + error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchAutocars();
});

async function addAutocars() {
    const immatriculation = document.querySelector('#immatriculation').value;
    const marque = document.querySelector('#marque').value;
    const modele = document.querySelector('#modele').value;
    const capacity = document.querySelector('#capacity').value;

    const addData = {
        "immatriculation": immatriculation.toString(),
        "marque": marque.toString(),
        "modele": modele.toString(),
        "capacite": capacity
    };

    const response = await createAutocar(addData);
}

addButton.addEventListener("click", () => {
    addAutocars();
});

function deleteAutocars(element) {
    const row = element.parentElement.parentElement;
    const id = row.querySelector('input').value;
    deleteAutocar(id,row);
}
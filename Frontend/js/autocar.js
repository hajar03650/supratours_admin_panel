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
                    <button class="edit" title="Edit"><i class="fa fa-pen"></i></button>
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

function addAutocars() {
    const name = document.querySelector('#name').value;
    const license_plate = document.querySelector('#license_plate').value;
    const capacity = document.querySelector('#capacity').value;

    const addData = {
        "name": name.toString(),
        "license_plate": license_plate.toString(),
        "capacity": capacity
    };

    createAutocar(addData);
}

addButton.addEventListener("click", () => {
    addAutocars();
});

function deleteAutocars(element) {
    const row = element.parentElement.parentElement;
    const id = row.querySelector('input').value;
    const deleteApiLink = 'http://127.0.0.1:8000/api/autocars/' + id + "/";
    console.log(deleteApiLink);

    fetch(deleteApiLink, {
        method: 'DELETE',
    })
        .then(response => {
            response.json();
        })
        .then(data => {
            boxAlert("Autocar deleted","green");
            if (row) row.parentNode.removeChild(row);
        })
        .catch(error => { 
            console.error('Error fetching autocars:', error)
            boxAlert("Internal Error","red");
        });
}
const apiUrl = 'http://127.0.0.1:8000/api/autocars/';
const tableBody = document.querySelector('#autocar-table tbody');
const addButton = document.querySelector('#addBtn');

document.addEventListener('DOMContentLoaded', function() {

    function fetchAutocars() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ''; // Clear the table before adding new rows
                data.forEach(autocar => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${autocar.name}</td>
                        <td>${autocar.license_plate}</td>
                        <td>${autocar.capacity}</td>
                        <td>
                            <button class="edit" title="Edit"><i class="fa fa-pen"></i></button>
                            <button class="delete" title="Delete"><i class="fa fa-trash"></i></button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching autocars:', error));
    }

    

    fetchAutocars(); // Fetch data when the page loads
});

function addAutocars() {
    const name = document.querySelector('#name').value;
    const license_plate = document.querySelector('#license_plate').value;
    const capacity = document.querySelector('#capacity').value;

    fetch(apiUrl, {
        method: 'POST',
        body:JSON.stringify(
            {
                "name": name,
                "license_plate": license_plate,
                "capacity": capacity
            }
        )
    })
        .then(response => response.json())
        .then(data => {
            boxAlert(data.success,"green");
        })
        .catch(error => console.error('Error fetching autocars:', error));
}

document.addEventListener("click", () => {
    addAutocars();
    window.location.reload();
});

const apiUrl = 'http://127.0.0.1:8000/api/missions/';
const tableBody = document.querySelector('#autocar-table tbody');
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#delete');

function fillAutocarOptions() {
    const autocarSelect = document.querySelector("#autocarSelect");

    fetch("http://127.0.0.1:8000/api/autocars/")
        .then(response => response.json())
        .then(data => {
            autocarSelect.innerHTML = "";
            data.forEach(autocar => {
                const option = document.createElement('option');
                option.innerText = autocar.name;
                autocarSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching autocars:', error));
}

function fillCardsOptions() {
    const cardSelect = document.querySelector("#cardSelect");

    fetch("http://127.0.0.1:8000/api/cartes/")
        .then(response => response.json())
        .then(data => {
            cardSelect.innerHTML = "";
            data.forEach(card => {
                const option = document.createElement('option');
                option.innerText = card.name;
                cardSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching autocars:', error));
}

document.addEventListener('DOMContentLoaded', function () {

    function fetchMissions() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ''; // Clear the table before adding new rows
                data.forEach(mission => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <input type="hidden" value="${mission.id}">
                        <td>${mission.driver}</td>
                        <td>${mission.autocar}</td>
                        <td>${mission.departure_time}</td>
                        <td>${mission.arrival_time}</td>
                        <td>
                            <button class="edit" title="Edit"><i class="fa fa-pen"></i></button>
                            <button class="delete" title="Delete" onclick="deleteAutocars(this);"><i class="fa fa-trash"></i></button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching autocars:', error));
    }



    fetchMissions(); // Fetch data when the page loads
    fillAutocarOptions();
    fillCardsOptions();
});

function addMissions() {
    const driverName = document.querySelector('#driverName').value;

    const autocarSelector = document.querySelector('#autocarSelect');
    const autocarEl = autocarSelector.options[autocarSelector.selectedIndex].text;

    const destination = document.querySelector('#destination').value;
    const departTime = document.querySelector('#departTime').value;
    const arriveTime = document.querySelector('#arriveTime').value;

    const cardSelector = document.querySelector("#cardSelect");
    const cardEl = cardSelector.options[cardSelector.selectedIndex].text;

    const addData = {
        "driver": driverName,
        "autocar": autocarEl,
        "destination": destination,
        "departure_time": departTime,
        "arrival_time": arriveTime,
        "card": cardEl
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addData)
    })
        .then(response => response.json())
        .then(data => {
            boxAlert("Mission created successfully !", "green");
        })
        .catch(error => {
            console.error('Error fetching missions:', error)
            boxAlert("Internal error", "red");
        });
}

addButton.addEventListener("click", () => {
    addMissions();
});

function deleteAutocars(element) {
    const row = element.parentElement.parentElement;
    const id = row.querySelector('input').value;
    const deleteApiLink = 'http://127.0.0.1:8000/api/missions/' + id + "/";
    console.log(deleteApiLink);

    fetch(deleteApiLink, {
        method: 'DELETE',
    })
        .then(response => {
            response.json();
        })
        .then(data => {
            boxAlert("Mission aborted", "green");
            if (row) row.parentNode.removeChild(row);
        })
        .catch(error => {
            console.error('Error fetching autocars:', error)
            boxAlert("Internal Error", "red");
        });
}
const tableBody = document.querySelector('#autocar-table tbody');
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#delete');

async function fillAutocarOptions() {
    const autocarSelect = document.querySelector("#autocarSelect");
    const data = await getAutocars();
    console.log(data);
    autocarSelect.innerHTML = "";
        data.forEach(autocar => {
            const option = document.createElement('option');
            option.innerHTML = `
            <p>${autocar.marque}  ${autocar.modele}</p>
            <input type="hidden" name="autocar-id" value="${autocar.id}" />
            `;
            autocarSelect.appendChild(option);
        });
}

async function fillCardsOptions() {
    const cardSelect = document.querySelector("#cardSelect");
    const data = await getCartes();
    cardSelect.innerHTML = "";
    data.forEach(card => {
        const option = document.createElement('option');
        option.innerText = card.numero;
        cardSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function () {

    async function fetchMissions() {
        const data = await getMissions();
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
    }



    fetchMissions(); // Fetch data when the page loads
    fillAutocarOptions();
    fillCardsOptions();
});

function addMissions() {
    const driverName = document.querySelector('#driverName').value;

    const autocarSelector = document.querySelector('#autocarSelect');
    const autocarEl = autocarSelector.options[autocarSelector.selectedIndex].querySelector("input").value;

    const destination = document.querySelector('#destination').value;
    const departTime = document.querySelector('#departTime').value;
    const arriveTime = document.querySelector('#arriveTime').value;

    const cardSelector = document.querySelector("#cardSelect");
    const cardEl = cardSelector.options[cardSelector.selectedIndex].querySelector("input").value;

    const addData = {
        "driver": driverName,
        "autocar": autocarEl,
        "destination": destination,
        "departure_time": departTime,
        "arrival_time": arriveTime,
        "card": cardEl
    };

    createMission(addData);
}

addButton.addEventListener("click", () => {
    addMissions();
});

async function deleteAutocars(element) {
    const row = element.parentElement.parentElement;
    const id = row.querySelector('input').value;
    const response = await deleteAutocar(id);
    if (response) boxAlert("Autocar deleted");
    else boxAlert("Action Error");
}
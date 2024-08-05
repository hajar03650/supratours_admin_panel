const tableBody = document.querySelector('#autocar-table tbody');
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#delete');

async function fillAutocarOptions() {
    const autocarSelect = document.querySelector("#autocarSelect");
    const data = await getAutocars();
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
        option.innerHTML = `
            <p>Carte N ${card.numero}</p>
            <input type="hidden" name="carte-id" value="${card.id}" />
            `;
        cardSelect.appendChild(option);
    });
}

async function fillChauffeurOptions() {
    const ChauffeurSelect = document.querySelector("#chauffeurSelect");
    const data = await getChauffeurs();
    ChauffeurSelect.innerHTML = "";
    data.forEach(Chauffeur => {
        const option = document.createElement('option');
        option.innerHTML = `
            <p>${Chauffeur.nom}  ${Chauffeur.prenom}</p>
            <input type="hidden" name="chauffeur-id" value="${Chauffeur.id}" />
            `;
        ChauffeurSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function () {

    async function fetchMissions() {
        try {
            const data = await getMissions();
            tableBody.innerHTML = ''; // Clear the table before adding new rows
            
            for (const mission of data) {
                // Fetch driver data
                const driverData = await getChauffeur(mission.chauffeur);
                const autocarData = await getAutocar(mission.autocar);
                const carteData = await getCarte(mission.carte);
                // Create and populate table row
                const row = document.createElement('tr');
                row.innerHTML = `
                    <input type="hidden" value="${mission.id}">
                    <td>${driverData.nom} ${driverData.prenom}</td>
                    <td>${autocarData.marque} ${autocarData.modele}</td>
                    <td>${mission.ville_depart}</td>
                    <td>${mission.ville_arrivee}</td>
                    <td>${(mission.date_depart).substring(0, 10)}</td>
                    <td>${(mission.date_arrivee).substring(0, 10)}</td>
                    <td>${carteData.numero}</td>
                    <td>
                        <button class="delete" title="Delete" onclick="deleteMissionRow(this);"><i class="fa fa-trash"></i></button>
                    </td>
                `;
                tableBody.appendChild(row);
            }
        } catch (error) {
            console.error('Error fetching missions:', error);
        }
    }



    fetchMissions(); // Fetch data when the page loads
    fillAutocarOptions();
    fillCardsOptions();
    fillChauffeurOptions();
});

function addMissions() {
    const driverSelector = document.querySelector('#chauffeurSelect');
    const driverEl = driverSelector.options[driverSelector.selectedIndex].querySelector("input").value;

    const autocarSelector = document.querySelector('#autocarSelect');
    const autocarEl = autocarSelector.options[autocarSelector.selectedIndex].querySelector("input").value;

    const start = document.querySelector('#start').value;
    const destination = document.querySelector('#destination').value;
    const departTime = document.querySelector('#departTime').value;
    const arriveTime = document.querySelector('#arriveTime').value;

    const cardSelector = document.querySelector("#cardSelect");
    const cardEl = cardSelector.options[cardSelector.selectedIndex].querySelector("input").value;

    const addData = {
        "chauffeur": driverEl,
        "autocar": autocarEl,
        "ville_depart": start,
        "ville_arrivee": destination,
        "date_depart": departTime,
        "date_arrivee": arriveTime,
        "carte": cardEl
    };

    createMission(addData);
}

addButton.addEventListener("click", () => {
    addMissions();
});

async function deleteMissionRow(element) {
    const row = element.parentElement.parentElement;
    const id = row.querySelector('input').value;
    deleteMission(id,row);
}
const tableBody = document.querySelector('#carte-table tbody');
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#delete');
const rowHTML = ``;

async function fetchCartes() {
    try {
        const data = await getCartes();
        tableBody.innerHTML = ''; // Clear the table before adding new rows
        data.forEach(carte => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <input type="hidden" value="${carte.id}">
                <td>${carte.numero}</td>
                <td>${carte.solde}</td>
                <td>
                    <button class="delete" title="Delete" onclick="deleteCartes(this);"><i class="fa fa-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error : " + error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchCartes();
});

async function addCartes() {
    const numero = document.querySelector('#numero').value;
    const solde = document.querySelector('#solde').value;

    const addData = {
        "numero": numero.toString(),
        "solde": solde,
    };

    const response = await createCarte(addData);
}

addButton.addEventListener("click", () => {
    addCartes();
});

function deleteCartes(element) {
    const row = element.parentElement.parentElement;
    const id = row.querySelector('input').value;
    deleteCarte(id, row);
}

async function addFacture() {
    const card_num = document.getElementById("card_num").value;
    const factureValue = parseFloat(document.getElementById("facture").value); // Ensure factureValue is a number

    try {
        const data = await getCartes(); // Get the list of cards
        let cardFound = false;

        // Use a for...of loop to handle asynchronous operations properly
        for (const card of data) {
            if (card.numero == card_num) {
                cardFound = true;
                const newValue = card.solde - factureValue;

                if (newValue > 0) {
                    // Prepare the data to be updated
                    const newBody = {
                        "numero": card.numero,
                        "solde": newValue
                    };

                    // Update the card
                    const response = await updateCarte(card.id, newBody);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }

                else {
                    boxAlert("Solde insuffisant","red");
                }
                break; // Exit the loop after updating
            }
        }

        if (!cardFound) {
            boxAlert("Card number not found.", "red");
        }

    } catch (error) {
        boxAlert("Error facturation: " + error.message, "red");
        console.error("Error:", error);
    }
}

document.getElementById("factureBtn").addEventListener("click", () => {
    addFacture();
    fetchCartes();
})
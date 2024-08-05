document.addEventListener('DOMContentLoaded', function () {
    function getUsername() {
        const username = localStorage.getItem("username");
        if (username) document.getElementById("user").innerText = "Hello, welcome " + username;
        else boxAlert("Error fetching username","orange");
    }

    async function fetchCounts() {
        const countsContainer = document.getElementById('counts-container');
        const data = await getCounter();
        console.log(data);
        countsContainer.innerHTML = `
            <li><i class="fa fa-bus"></i><p>${data[0].autocar_count}</p></li>
            <li><i class="fa fa-id-card"></i><p>${data[0].carte_count}</p></li>
            <li><i class="fa fa-circle-check"></i><p>${data[0].mission_count}</p></li>
            <li><i class="fa fa-user-tie"></i><p>${data[0].chauffeur_count}</p></li>
        `;
    }

    getUsername();
    fetchCounts();
    setInterval(() => {
        fetchCounts();
    }, 10000);
});

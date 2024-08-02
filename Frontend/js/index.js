document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'http://127.0.0.1:8000/api/counts/';
    const countsContainer = document.getElementById('counts-container');

    function fetchCounts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                countsContainer.innerHTML = `
                    <li><i class="fa fa-bus"></i><p>${data.autocar_count}</p></li>
                    <li><i class="fa fa-id-card"></i><p>${data.carte_count}</p></li>
                    <li><i class="fa fa-circle-check"></i><p>${data.mission_count}</p></li>
                    <li><i class="fa fa-user-tie"></i><p>${data.profile_count}</p></li>
                `;
            })
            .catch(error => console.error('Error fetching counts:', error));
    }

    fetchCounts();
    setInterval(() => {
        fetchCounts();
    }, 10000);
});

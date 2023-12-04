document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('userIp').textContent = 'Your IP Address: ' + data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            document.getElementById('userIp').textContent = 'Error fetching IP';
        });
});

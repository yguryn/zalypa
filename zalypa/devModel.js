function getDeviceModel() {
    var userAgent = navigator.userAgent;

    // Regular expression to extract device model
    // This is a basic example and might need to be adjusted based on the variety of user agents
    var regExp = /(?:\(([^)]+)\))/;
    var matches = regExp.exec(userAgent);

    if (matches && matches[1]) {
        return matches[1].split(';')[1].trim(); // Adjust this part based on your needs
    } else {
        return "Unknown Device";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    var deviceModel = getDeviceModel();
    document.getElementById('devModel').textContent = "Device Model: " + deviceModel;
});

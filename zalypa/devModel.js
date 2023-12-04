function getDeviceModel() {
    var userAgent = navigator.userAgent;

    // var regExp = /(?:\(([^)]+)\))/;
    // var matches = regExp.exec(userAgent);
    //
    // if (matches && matches[1]) {
    //     return matches[1].split(';')[1].trim();
    // } else {
    //     return "Unknown Device";
    // }
    return userAgent
}

document.addEventListener('DOMContentLoaded', (event) => {
    var deviceModel = getDeviceModel();
    document.getElementById('devModel').textContent = "Device Model: " + deviceModel;
});

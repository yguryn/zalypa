// main.js

// Function to set visitorId in the last <h3> element
function setVisitorId(visitorId) {
    const lastH3 = document.querySelector('h3#visitorId');
    if (lastH3) {
        lastH3.textContent = `Visitor ID: ${visitorId}`;
    } else {
        console.error("Element with id 'visitorId' not found.");
    }
}

// Initialize the agent on page load.
const fpPromise = import('https://fpjscdn.net/v3/Ose0J72g9W54Sjk1F21L')
    .then(FingerprintJS => FingerprintJS.load({
        region: "eu"
    }));

// Get the visitorId when you need it.
fpPromise
    .then(fp => fp.get())
    .then(result => {
        const visitorId = result.visitorId;
        console.log(`Visitor ID: ${visitorId}`);
        setVisitorId(visitorId);
    })
    .catch(error => {
        console.error("Error:", error);
    });

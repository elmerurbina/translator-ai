function startDictation() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = document.getElementById('languageSelect').value;

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            document.getElementById('textInput').value += transcript;
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            alert('Speech recognition error. Please try again.');
        };

        recognition.start();
    } else {
        alert('Your browser does not support speech recognition.');
    }
}

async function translateText() {
    const textInput = document.getElementById('textInput').value;
    const languageSelect = document.getElementById('languageSelect').value;

    // You'll implement translation logic here using Cloudflare's API

    // For now, let's just display the entered text in the selected language
    const translatedText = `Translated text in ${languageSelect}: ${textInput}`;

    document.getElementById('translatedText').innerText = translatedText;
}

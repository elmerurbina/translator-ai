async function translateText(text, targetLanguage) {
    try {
      const requestBody = { text, targetLanguage };
      const response = await fetch('https://translator-ai.elmerurbina570.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        throw new Error('Translation failed.');
      }
  
      const responseData = await response.json();
      return responseData.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return 'Translation error. Please try again.';
    }
  }
  
  async function startDictation() {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = document.getElementById('languageSelect').value; // Set language based on selected option
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
  
      recognition.start();
  
      recognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
  
        // Perform translation
        try {
          const targetLanguage = document.getElementById('languageSelect').value;
          const translatedText = await translateText(transcript, targetLanguage);
          document.getElementById('translatedText').innerText = translatedText;
        } catch (error) {
          console.error('Translation error:', error);
          document.getElementById('translatedText').innerText = 'Translation error. Please try again.';
        }
  
        recognition.stop();
      };
  
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        alert('Speech recognition encountered an error. Please try again.');
      };
    } else {
      alert('Speech recognition is not supported by your browser.');
    }
  }
  
  function handleFile(file) {
    const reader = new FileReader();
    reader.onload = async function(event) {
      const text = event.target.result;
      const targetLanguage = document.getElementById('languageSelect').value;
  
      // Perform translation
      try {
        const translatedText = await translateText(text, targetLanguage);
        document.getElementById('translatedText').innerText = translatedText;
      } catch (error) {
        console.error('Translation error:', error);
        document.getElementById('translatedText').innerText = 'Translation error. Please try again.';
      }
    };
    reader.readAsText(file);
  }
  
  async function translateTextInput() {
    const text = document.getElementById('textInput').value;
    const targetLanguage = document.getElementById('languageSelect').value;
    
    // Perform translation
    try {
      const translatedText = await translateText(text, targetLanguage);
      document.getElementById('translatedText').innerText = translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      document.getElementById('translatedText').innerText = 'Translation error. Please try again.';
    }
  }
  
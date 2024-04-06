async function translateText() {
    const text = document.getElementById('textInput').value;
    const targetLanguage = document.getElementById('languageSelect').value;
  
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
      document.getElementById('translatedText').innerText = responseData.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      document.getElementById('translatedText').innerText = 'Translation error. Please try again.';
    }
  }
  
  function startDictation() {
    // Implement speech-to-text functionality here if needed
    alert('Speech-to-text functionality is not implemented yet.');
  }
  
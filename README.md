# AI Translation Web Application

This web application allows users to translate text, voice messages, and uploaded files into a selected language using CloudFlare's open models for translation and speech-to-text. The project is licensed under the MIT open-source license.

## Features

- Translate text input into multiple languages.
- Convert voice messages into text using speech-to-text technology.
- Translate uploaded files into the desired language.
- Utilizes CloudFlare's open models for translation and speech-to-text.


## Deployment

The web application is deployed and accessible at the following URL:
[AI Translator web application](https://241a0829.translator-ai.pages.dev/)

## Usage

1. Enter text into the text input field and select the desired target language from the dropdown menu. Click the "Translate" button to translate the text.
2. Click the microphone icon to start recording a voice message. Once finished, the application will convert the speech to text and translate it into the selected language.
3. Use the file input to upload a file for translation. Supported file types include text files, audio files, and more.

## Support

For any inquiries or issues, please contact [elmerurbina570@gmail.com](mailto:elmerurbina570@gmail.com).

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](LICENSE) file for details.


## Installation Instructions

To use the translation service provided by our worker, follow these steps:

1. **Integration**: Integrate the translation functionality into your web application by making HTTP requests to the worker endpoint.

2. **Endpoint**: Send POST requests to the following endpoint:

https://translator-ai.elmerurbina570.workers.dev/


3. **Request Format**: Ensure that your request payload is formatted as JSON and includes the following fields:
- `text`: The text to be translated.
- `targetLanguage`: The target language code for translation (e.g., `"es"` for Spanish, `"fr"` for French).

4. **Example Request**:
```json
{
    "text": "Hello, how are you?",
    "targetLanguage": "es"
}


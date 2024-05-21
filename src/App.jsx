import React, { useState } from 'react';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import "babel-polyfill";
const App = () => {
  const [isMicrophoneAvailable, setIsMicrophoneAvailable] = useState(true);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const stopListening = () => SpeechRecognition.stopListening({ continuous: true });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!isMicrophoneAvailable) {
    return <span>Microphone is not available.</span>;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    alert('Text copied to clipboard!');
  };

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>React Hook That Converts Speech from Microphone to Text and Makes it Available to Your React Component</p>
        <div className="main-container">
          {transcript}
        </div>

        <div className="btn-styles">
          <button onClick={handleCopy}>Copy</button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>
      </div>
    </>
  );
};

export default App;

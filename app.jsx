// App.js
import React, { useState } from 'react';
import MergePDF from './components/MergePDF';
import SplitPDF from './components/SplitPDF';
import PDFToWord from './components/PDFToWord';
import WordToPDF from './components/WordToPDF';

function App() {
  const [activeTab, setActiveTab] = useState('merge');

  return (
    <div className="App">
      <h1>PDF Operations</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('merge')}>Merge PDFs</button>
        <button onClick={() => setActiveTab('split')}>Split PDF</button>
        <button onClick={() => setActiveTab('pdfToWord')}>PDF to Word</button>
        <button onClick={() => setActiveTab('wordToPdf')}>Word to PDF</button>
      </div>
      {activeTab === 'merge' && <MergePDF />}
      {activeTab === 'split' && <SplitPDF />}
      {activeTab === 'pdfToWord' && <PDFToWord />}
      {activeTab === 'wordToPdf' && <WordToPDF />}
    </div>
  );
}

export default App;
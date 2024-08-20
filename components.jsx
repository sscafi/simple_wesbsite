// components/MergePDF.js
import React, { useState } from 'react';

function MergePDF() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    try {
      const response = await fetch('http://localhost:8000/api/merge-pdf/', {
        method: 'POST',
        body: formData,
      });
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'merged.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error merging PDFs:', error);
    }
  };

  return (
    <div>
      <h2>Merge PDFs</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileChange} accept=".pdf" />
        <button type="submit">Merge PDFs</button>
      </form>
    </div>
  );
}

export default MergePDF;
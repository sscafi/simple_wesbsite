# PDF Operations Web Application

## Overview

This web application provides a user-friendly interface for performing various operations on PDF files. Built with a React frontend and Django backend, it offers a seamless experience for users to manipulate PDF documents directly in their web browser.

## Features

- **Merge PDFs**: Combine multiple PDF files into a single document.
- **Split PDF**: Extract specific pages or page ranges from a PDF file.
- **PDF to Word Conversion**: Convert PDF documents to editable Word format.
- **Word to PDF Conversion**: Transform Word documents into PDF format.

## Tech Stack

- Frontend: React.js
- Backend: Django (Python)
- API: Django Rest Framework
- PDF Processing: PyPDF2
- Word Document Handling: python-docx

## Setup and Installation

### Prerequisites

- Node.js and npm
- Python 3.8+
- pip

### Frontend Setup

1. Navigate to the frontend directory:
2. Install dependencies:
3. Start the development server:

### Backend Setup

1. Navigate to the backend directory:
2. Create a virtual environment:
3. Activate the virtual environment:
- On Windows: `venv\Scripts\activate`
- On macOS and Linux: `source venv/bin/activate`
4. Install required Packages:
5. Run migrations:
6. Start the Django development server:

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Use the navigation tabs to select the desired PDF operation.
3. Follow the on-screen instructions to upload files and perform operations.
4. Download the processed file when the operation is complete.

## API Endpoints

- `POST /api/merge-pdf/`: Merge multiple PDF files
- `POST /api/split-pdf/`: Split a PDF file
- `POST /api/pdf-to-word/`: Convert PDF to Word
- `POST /api/word-to-pdf/`: Convert Word to PDF

## Deployment

This application can be deployed using a 3-tier AWS architecture:

1. Frontend hosted on EC2 instances
2. Backend API on separate EC2 instances
3. S3 bucket for temporary file storage
4. Route 53 for DNS management
5. CloudFront as a CDN
6. Application Load Balancers for traffic distribution

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

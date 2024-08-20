# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from PyPDF2 import PdfMerger, PdfReader, PdfWriter
from docx import Document
import io

class MergePDFView(APIView):
    def post(self, request):
        files = request.FILES.values()
        merger = PdfMerger()
        
        for file in files:
            merger.append(file)
        
        output = io.BytesIO()
        merger.write(output)
        merger.close()
        output.seek(0)
        
        return Response(output, status=status.HTTP_200_OK, content_type='application/pdf')

class SplitPDFView(APIView):
    def post(self, request):
        file = request.FILES['file']
        page_range = request.data.get('page_range')
        
        reader = PdfReader(file)
        writer = PdfWriter()
        
        for page_num in range(*map(int, page_range.split('-'))):
            writer.add_page(reader.pages[page_num - 1])
        
        output = io.BytesIO()
        writer.write(output)
        output.seek(0)
        
        return Response(output, status=status.HTTP_200_OK, content_type='application/pdf')

class PDFToWordView(APIView):
    def post(self, request):
        # This is a placeholder. Actual PDF to Word conversion is complex and may require additional libraries.
        return Response({"message": "PDF to Word conversion not implemented"}, status=status.HTTP_501_NOT_IMPLEMENTED)

class WordToPDFView(APIView):
    def post(self, request):
        # This is a placeholder. Actual Word to PDF conversion is complex and may require additional libraries.
        return Response({"message": "Word to PDF conversion not implemented"}, status=status.HTTP_501_NOT_IMPLEMENTED)
# urls.py
from django.urls import path
from .views import MergePDFView, SplitPDFView, PDFToWordView, WordToPDFView

urlpatterns = [
    path('api/merge-pdf/', MergePDFView.as_view(), name='merge-pdf'),
    path('api/split-pdf/', SplitPDFView.as_view(), name='split-pdf'),
    path('api/pdf-to-word/', PDFToWordView.as_view(), name='pdf-to-word'),
    path('api/word-to-pdf/', WordToPDFView.as_view(), name='word-to-pdf'),
]
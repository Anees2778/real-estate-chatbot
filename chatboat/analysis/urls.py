from django.urls import path
from .views import analyze_area

urlpatterns = [
    path('query/', analyze_area),
]
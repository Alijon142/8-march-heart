from django.urls import path
from .views import index, main

urlpatterns = [
    path('', index, name='index'),
    path('main/', main, name='main'),
]

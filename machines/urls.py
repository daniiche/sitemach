from django.urls import path
from . import views

urlpatterns = [
    path('', views.machines_list, name='machines_list'),
]
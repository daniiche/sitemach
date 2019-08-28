from django.urls import path, re_path
from . import views

urlpatterns = [
     path('', views.index),
     path('login/', views.index),
     path('logout/', views.index),
     path('item/', views.index),
     re_path(r'^item/.+/', views.index),
     re_path(r'^item/.+/qr', views.index),
     re_path(r'^item/.+/contact', views.index)
]
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('machines.urls')),
    path('control/', admin.site.urls),
]

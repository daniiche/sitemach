from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('machines.urls')),
    path('', include('accounts.urls')),
    path('control/', admin.site.urls),
]

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# main url resolver
urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('machines.urls')),
    path('', include('accounts.urls')),
    path('control/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

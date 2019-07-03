from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('control/', admin.site.urls),
    path('api/v1/base-auth/', include('rest_framework.urls')),
    path('api/v1/machines/', include('machines.urls')),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth_token/', include('djoser.urls.authtoken')),
    path('', include('machines.urls'))
]

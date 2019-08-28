from rest_framework import routers
from .api import MachineViewSet, ItemViewSet
from django.urls import re_path


router = routers.DefaultRouter()
# API url for retrieving machines of the client
router.register('api/machines', MachineViewSet, 'machines')
# API url for getting any single machine without authentication
urlpatterns = [
    re_path('api/item/(?P<machineId>[a-z0-9]+)', ItemViewSet.as_view()),
]

urlpatterns += router.urls


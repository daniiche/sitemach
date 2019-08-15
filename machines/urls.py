from rest_framework import routers
from .api import MachineViewSet, ItemViewSet
from django.urls import re_path


router = routers.DefaultRouter()
router.register('api/machines', MachineViewSet, 'machines')

urlpatterns = [
    re_path('api/item/(?P<machineId>[a-z0-9]+)', ItemViewSet.as_view()),
]

urlpatterns += router.urls


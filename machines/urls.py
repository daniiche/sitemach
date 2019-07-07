from rest_framework import routers
from .api import MachineViewSet


router = routers.DefaultRouter()
router.register('api/machines', MachineViewSet, 'machines')

urlpatterns = router.urls

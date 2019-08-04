from rest_framework import routers
from .api import MachineViewSet, ItemViewSet


router = routers.DefaultRouter()
router.register('api/machines', MachineViewSet, 'machines'),
router.register('api/item', ItemViewSet, 'item')

urlpatterns = router.urls


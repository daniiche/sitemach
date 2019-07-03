#from django.urls import path
#from machines.views import *
from rest_framework import  routers
from .api import MachineViewSet

#app_name = 'machines'
router = routers.DefaultRouter()
router.register('api/machines', MachineViewSet, 'machines')

urlpatterns = router.urls

''''[
    #path('', views.machines_list, name='machines_list'),
    path('machine/create/', MachineCreateView.as_view()),
    path('all/', MachineListView.as_view()),
    path('machine/detail/<int:pk>/', MachineDetailView.as_view())
]'''
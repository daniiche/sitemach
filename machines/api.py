from machines.models import Machine
from rest_framework import viewsets, permissions
from .serializers import MachineDetailSerializer, MachineListSerializer


# Machine Viewset
class MachineViewSet(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MachineDetailSerializer


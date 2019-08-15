from rest_framework import viewsets, permissions
from .serializers import MachineSerializer, ItemSerializer
from machines import models
from rest_framework import generics


# Machine viewset (list of machines)
class MachineViewSet(viewsets.ReadOnlyModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MachineSerializer

    def get_queryset(self):
        return self.request.user.machines.all()


# Item view (a single object instance by id)
class ItemViewSet(generics.RetrieveAPIView):

    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]

    serializer_class = ItemSerializer

    def get_object(self):
        return models.Machine.objects.get(machineId=self.kwargs['machineId'])

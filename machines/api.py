from rest_framework import viewsets, permissions
from .serializers import MachineSerializer, ItemSerializer
from machines import models


# Machine Viewset
class MachineViewSet(viewsets.ReadOnlyModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = MachineSerializer

    def get_queryset(self):
        return self.request.user.machines.all()

    def perform_create(self, serializer):
        serializer.save(clientId=self.request.user)


class ItemViewSet(viewsets.ReadOnlyModelViewSet):

    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]

    serializer_class = ItemSerializer

    def get_queryset(self):
        return models.Machine.objects.all()

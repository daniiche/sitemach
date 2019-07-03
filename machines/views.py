from django.shortcuts import render
from rest_framework import generics
from machines.serializers import MachineDetailSerializer, MachineListSerializer
from machines.models import Machine
from machines.permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAdminUser


class MachineCreateView(generics.CreateAPIView):
	serializer_class = MachineDetailSerializer
	permission_classes = (IsAdminUser, )


class MachineListView(generics.ListAPIView):
	serializer_class = MachineListSerializer
	queryset = Machine.objects.all()
	permission_classes = (IsAdminUser, )


class MachineDetailView(generics.RetrieveUpdateDestroyAPIView):
	serializer_class = MachineDetailSerializer
	queryset = Machine.objects.all()
	permission_classes = (IsOwnerOrReadOnly, )

from rest_framework import serializers
from machines.models import Machine


class MachineListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Machine
        fields = ('machineid', 'model', 'kind', 'brand')


class MachineDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Machine
        fields = ('__all__')
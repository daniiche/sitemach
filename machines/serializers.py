from rest_framework import serializers
from machines.models import Machine


# Machine serializer
class MachineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Machine
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Machine
        fields = ('machineId', 'model', 'kind', 'brand')

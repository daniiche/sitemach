from rest_framework import serializers
from machines.models import Machine


# Machine list serializer
class MachineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Machine
        fields = ('machineId', 'model', 'kind', 'brand', 'image1')


# Full machine details serializer
class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Machine
        fields = ('machineId',
                  'model', 'kind', 'brand',
                  'manufactured_date', 'purchased_date', 'warranty_date', 'created_date',
                  'length', 'width', 'height', 'weight',
                  'image1', 'image2', 'image3',
                  'spec_file', 'sparts_file', 'cons_file', 'warranty_file', 'instruct_file', 'main_file',
                  'qrcode_png', 'qrcode_small', 'qrcode_eps')

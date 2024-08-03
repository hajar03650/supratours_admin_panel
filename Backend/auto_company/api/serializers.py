from rest_framework import serializers
from .models import Chauffeur, Autocar, Carte, Mission

class ChauffeurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chauffeur
        fields = '__all__'

class AutocarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autocar
        fields = '__all__'

class CarteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carte
        fields = '__all__'

class MissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mission
        fields = '__all__'

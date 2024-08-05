from rest_framework import serializers
from .models import Chauffeur, Autocar, Carte, Mission,Counter

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
        
class CounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counter
        fields = ["chauffeur_count","autocar_count","carte_count","mission_count"]

# myapp/serializers.py

from rest_framework import serializers
from .models import Autocar, Carte, Mission, Profile

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

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

from rest_framework import viewsets
from .models import Autocar, Carte, Mission, Profile
from .serializers import AutocarSerializer, CarteSerializer, MissionSerializer, ProfileSerializer

class AutocarViewSet(viewsets.ModelViewSet):
    queryset = Autocar.objects.all()
    serializer_class = AutocarSerializer

class CarteViewSet(viewsets.ModelViewSet):
    queryset = Carte.objects.all()
    serializer_class = CarteSerializer

class MissionViewSet(viewsets.ModelViewSet):
    queryset = Mission.objects.all()
    serializer_class = MissionSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
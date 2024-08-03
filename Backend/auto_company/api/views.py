from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAdminOrReadOnly, IsAgent
from .models import Chauffeur, Autocar, Carte, Mission
from .serializers import ChauffeurSerializer, AutocarSerializer, CarteSerializer, MissionSerializer

class ChauffeurViewSet(viewsets.ModelViewSet):
    queryset = Chauffeur.objects.all()
    serializer_class = ChauffeurSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

class AutocarViewSet(viewsets.ModelViewSet):
    queryset = Autocar.objects.all()
    serializer_class = AutocarSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

class CarteViewSet(viewsets.ModelViewSet):
    queryset = Carte.objects.all()
    serializer_class = CarteSerializer
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

class MissionViewSet(viewsets.ModelViewSet):
    queryset = Mission.objects.all()
    serializer_class = MissionSerializer
    permission_classes = [IsAuthenticated, IsAgent]
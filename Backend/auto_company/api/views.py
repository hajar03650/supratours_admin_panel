from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Chauffeur, Autocar, Carte, Mission, Counter
from .serializers import ChauffeurSerializer, AutocarSerializer, CarteSerializer, MissionSerializer, CounterSerializer

class ChauffeurViewSet(viewsets.ModelViewSet):
    queryset = Chauffeur.objects.all()
    serializer_class = ChauffeurSerializer
    permission_classes = [IsAuthenticated]

class AutocarViewSet(viewsets.ModelViewSet):
    queryset = Autocar.objects.all()
    serializer_class = AutocarSerializer
    permission_classes = [IsAuthenticated]

class CarteViewSet(viewsets.ModelViewSet):
    queryset = Carte.objects.all()
    serializer_class = CarteSerializer
    permission_classes = [IsAuthenticated]

class MissionViewSet(viewsets.ModelViewSet):
    queryset = Mission.objects.all()
    serializer_class = MissionSerializer
    permission_classes = [IsAuthenticated]
    
class CounterViewSet(viewsets.ModelViewSet):
    queryset = Counter.objects.all()
    serializer_class = CounterSerializer
    permission_classes = [IsAuthenticated]
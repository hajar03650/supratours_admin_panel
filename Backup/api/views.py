from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
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

@api_view(['GET'])
def get_counts(request):
    data = {
        "autocar_count": Autocar.objects.count(),
        "carte_count": Carte.objects.count(),
        "mission_count": Mission.objects.count(),
        "profile_count": Profile.objects.count(),
    }
    return Response(data)
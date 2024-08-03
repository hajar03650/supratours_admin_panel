from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register(r'chauffeurs', views.ChauffeurViewSet)
router.register(r'autocars', views.AutocarViewSet)
router.register(r'cartes', views.CarteViewSet)
router.register(r'missions', views.MissionViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

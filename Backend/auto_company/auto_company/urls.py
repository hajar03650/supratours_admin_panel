from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api import views

router = DefaultRouter()
router.register(r'chauffeurs', views.ChauffeurViewSet)
router.register(r'autocars', views.AutocarViewSet)
router.register(r'cartes', views.CarteViewSet)
router.register(r'missions', views.MissionViewSet)
router.register(r'counter', views.CounterViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

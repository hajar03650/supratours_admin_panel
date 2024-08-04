from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import AutocarViewSet, CarteViewSet, MissionViewSet, ProfileViewSet, get_counts

router = DefaultRouter()
router.register(r'autocars', AutocarViewSet)
router.register(r'cartes', CarteViewSet)
router.register(r'missions', MissionViewSet)
router.register(r'profile', ProfileViewSet)


urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
    path('counts/', get_counts),
]

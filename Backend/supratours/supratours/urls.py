from django.contrib import admin
from django.urls import path, include
from supratours_api.views import UserCreate, UserList, CustomAuthToken

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', UserList.as_view(), name='user-list'),
    path('api/users/create/', UserCreate.as_view(), name='user-create'),
    path('api-token-auth/', CustomAuthToken.as_view()),
]
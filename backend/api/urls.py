from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from DiaryPost.views import DiaryViewSet

defaultRouter = routers.DefaultRouter()
defaultRouter.register('diary', DiaryViewSet, basename='diary')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(defaultRouter.urls)),
    path('api/auth/',include('djoser.urls')),
    path('api/auth/',include('djoser.urls.jwt')),
]

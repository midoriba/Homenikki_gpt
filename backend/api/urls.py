from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import routers
from DiaryPost.views import DiaryViewSet
from django.views.generic import TemplateView, RedirectView

defaultRouter = routers.DefaultRouter()
defaultRouter.register('diary', DiaryViewSet, basename='diary')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/', include(defaultRouter.urls)),
    path('api/auth/',include('djoser.urls')),
    path('api/auth/',include('djoser.urls.jwt')),
    re_path('', RedirectView.as_view(url='/'))
]

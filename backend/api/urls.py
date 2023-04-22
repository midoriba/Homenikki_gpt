from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from DiaryPost.views import DiaryViewSet
from accounts import views

defaultRouter = routers.DefaultRouter()
defaultRouter.register('diary', DiaryViewSet, basename='diary')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(defaultRouter.urls)),
    path('api-auth/login/', views.LoginView.as_view()),
    path('api-auth/logout/', views.LogoutView.as_view()),
]

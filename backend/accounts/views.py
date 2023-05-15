from django.shortcuts import render
'''from django.contrib.auth import login, logout
from rest_framework import generics, views
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import LoginSerializer


class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response({'detail': "ログインが成功しました"})


class LogoutView(views.APIView):

    def post(self, request, *arg, **kwargs):
        logout(request)
        return Response({'detail': "ログアウトが成功しました"})'''
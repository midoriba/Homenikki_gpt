from django.contrib.auth import authenticate
from rest_framework import serializers

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True, style={'input_type':'password'})

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        if(username and password):
            user = authenticate(request=self.context.get('request'), username=username, password=password)
            if(user is None or not user.is_active):
                raise serializers.ValidationError('ログインが失敗しました')
            attrs['user'] = user
        return attrs
    
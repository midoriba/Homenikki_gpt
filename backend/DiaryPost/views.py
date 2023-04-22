from rest_framework import viewsets
from .models import DiaryModel
from .serializers import DiarySerializer


class DiaryViewSet(viewsets.ModelViewSet):
    serializer_class = DiarySerializer
    def get_queryset(self):
        self.queryset = DiaryModel.objects.filter(author=self.request.user).order_by('-date_created')
        return super().get_queryset()

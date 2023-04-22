from django.db import models
from django.conf import settings
import uuid

class DiaryModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    summary = models.CharField(max_length=20)
    detail = models.TextField(max_length=200, null=True, blank=True)
    praise = models.CharField(max_length=50)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, verbose_name='author', related_name='post', on_delete=models.CASCADE)
    def __str__(self):
        return self.date_created.date().strftime("%Y/%m/%d") + f'({self.id})'
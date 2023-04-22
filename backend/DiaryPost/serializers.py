from rest_framework import serializers
from DiaryPost.models import DiaryModel
#from .libary.recognize import Recognizer

class DiarySerializer(serializers.ModelSerializer):
    class Meta:
        model = DiaryModel
        fields = ('id', 'summary', 'detail', 'praise', 'date_created', 'date_modified')
        read_only_fields = ('id', 'praise', 'date_created', 'dat_modified')
    def validate(self, data):
        # 日記から褒め文を生成
        #r = Recognizer()
        #l = r.fill_template(r.recognize(data['summary']))
        data['praise'] = "ここに褒め文"
        user = self.context['request'].user
        data['author'] = user
        return data


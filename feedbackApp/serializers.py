from  rest_framework import serializers
from feedbackApp.models import feedback

class feedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model=feedback
        fields=['id', 'salutation', 'first_name', 'last_name', 'comment']
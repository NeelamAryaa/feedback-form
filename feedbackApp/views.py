from feedbackApp.models import feedback
from rest_framework import generics
from feedbackApp.serializers import feedbackSerializer

# Create your views here.
# def feedbackView(request):
#     # queryset 
#     data=feedback.objects.all()
#     response = {'feedback': list(data.values('salutation','first_name','last_name','comment'))}

#     return JsonResponse(response)





class feedbackList(generics.ListCreateAPIView):
    queryset = feedback.objects.all()
    serializer_class = feedbackSerializer


class feedback(generics.RetrieveUpdateDestroyAPIView):
    queryset = feedback.objects.all()
    serializer_class = feedbackSerializer
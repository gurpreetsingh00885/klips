from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework import views
from api.serializers import UserSerializer
from rest_framework.response import Response

User = get_user_model()

board_id = 1021

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class Home(views.APIView):
    """
    Sample api view
    """
    def get(self, request, format=None):
        return Response({"status": "OK"})

home = Home.as_view()

class GenerateBoardId(views.APIView):
    """
    Creates new board id and returns it
    """
    def get(self, request, *args, **kwargs):
        global board_id
        board_id += 1
        return Response({"id": board_id})

get_id = GenerateBoardId.as_view()

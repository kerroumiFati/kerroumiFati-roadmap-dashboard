from django.shortcuts import render
from rest_framework import generics
from .models import Milestone
from .serializers import MilestoneSerializer

class MilestoneList(generics.ListAPIView):
    queryset = Milestone.objects.all().order_by('order')
    serializer_class = MilestoneSerializer

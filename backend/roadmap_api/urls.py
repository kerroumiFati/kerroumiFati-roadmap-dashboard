
from django.urls import path
from .views import MilestoneList

urlpatterns = [
    path('roadmap/', MilestoneList.as_view(), name='roadmap-list'),
]

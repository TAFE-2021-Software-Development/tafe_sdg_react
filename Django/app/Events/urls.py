from django.urls import path, include
from rest_framework import urlpatterns
from rest_framework import routers

from Events import views

router = routers.DefaultRouter()  # creates a router
router.register('registrations', views.RegistrationViewSet,
                basename='registrations')
router.register('events', views.EventViewSet, basename='events')

urlpatterns = [
    path('register/', views.RegisterView.as_view()),
    path('update/', views.UpdateRegistration.as_view()),
    path('', include(router.urls)),
]

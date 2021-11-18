from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status #HTTP STATUS codes 
from rest_framework import viewsets

from Events import serializers
from Events import models

class UpdateRegistration(APIView):
    serializer_class = serializers.RegistrationSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            attendees = serializer.validated_data.get('attendees')
            try:
                update_record = models.EventRegistration.objects.get(Email=email, Name=name)
                update_record.Name = name
                update_record.Email = email
                update_record.Attendees = attendees
                update_record.save()
                message = f'A record was updated for name: {name}, email: {email}, attendees: {attendees}'
            except:
                message = f'There was an error updating name: {name}, email: {email} attendees: {attendees}'
            return Response({'message': message})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
class RegisterView(APIView):
    serializer_class = serializers.RegistrationSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            name = serializer.validated_data.get('name')
            email = serializer.validated_data.get('email')
            attendees = serializer.validated_data.get('attendees')
            try:
                new_record = models.EventRegistration(Name=name, Email=email, Attendees=attendees)
                new_record.save()
                message = f'A new record was added, name: {name}, email: {email}, attendees: {attendees}'
            except:
                message = f'There was an error adding name: {name}, email: {email}, attendees: {attendees}'
            return Response({'message': message})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

####################### ViewSets ############################

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = models.EventRegistration.objects.all()
    serializer_class = serializers.RegistrationList
    http_method_names = ['get']
    
class EventViewSet(viewsets.ModelViewSet):
    queryset = models.Event.objects.all()
    serializer_class = serializers.EventList
    http_method_names = ['get']
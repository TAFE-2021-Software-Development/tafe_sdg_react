from rest_framework import serializers
from .models import EventRegistration, Event


class RegistrationList(serializers.ModelSerializer):
    class Meta:
        model = EventRegistration
        fields = ('idRegistration', 'Name', 'Email', 'Attendees', 'idEvent')


class RegistrationSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(max_length=255)
    attendees = serializers.IntegerField(min_value=1, max_value=5)


class EventList(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('idEvent', 'Name', 'Date', 'MaxAttendees',
                  'Description', 'Location', 'Active', 'ImageLink')

from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.


class Event(models.Model):
    idEvent = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=255)
    Date = models.DateTimeField()
    MaxAttendees = models.PositiveSmallIntegerField(
        default=1, validators=[MinValueValidator(1)])
    Description = models.TextField()
    Location = models.CharField(max_length=150)
    Active = models.BooleanField()
    ImageLink = models.FileField(upload_to=f'uploads/', blank=True)

    class Meta:
        db_table = 'Events'

    def __str__(self):
        return self.Name


class EventRegistration(models.Model):
    idRegistration = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    Email = models.EmailField(max_length=255)
    Attendees = models.PositiveSmallIntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(5)])
    idEvent = models.ForeignKey(
        'Event', on_delete=models.CASCADE, db_column='idEvent', default=2)

    class Meta:
        db_table = 'Registrations'

    def __str__(self):
        return self.Name

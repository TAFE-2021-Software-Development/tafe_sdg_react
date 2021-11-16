from django.contrib import admin
from rest_framework.fields import ReadOnlyField
from Events import models
from django.contrib.auth.models import Group, User
from rest_framework.authtoken.models import TokenProxy

# Register your models here.
admin.site.register(models.Event)
admin.site.register(models.EventRegistration, exclude=['idEvent'])
admin.site.site_header = "Tafe APP Admin"
admin.site.unregister(User)
admin.site.unregister(Group)
admin.site.unregister(TokenProxy)




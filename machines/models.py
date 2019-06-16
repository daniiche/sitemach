from django.conf import settings
from django.db import models
from django.utils import timezone

class Machine(models.Model):
    machineid = models.UUIDField(primary_key=True)
    clientid = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    kind = models.CharField(max_length=200)
    brand = models.CharField(max_length=200)
    characteristics = models.FileField(null=True)
    created_date = models.DateTimeField(default=timezone.now)
    manufactured_date = models.DateTimeField(blank=True, null=True)
    bought_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.save()

    def __str__(self):
        return self.name

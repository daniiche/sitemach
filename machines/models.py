from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone

User = get_user_model()


class Machine(models.Model):
    machineid = models.CharField(verbose_name='Machine id', max_length=50, primary_key=True, unique=True, db_index=True)
    clientid = models.ForeignKey(User, verbose_name='Client id', on_delete=models.CASCADE)
    model = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    kind = models.CharField(verbose_name='Machine kind',blank=True, null=True, max_length=200)
    brand = models.CharField(verbose_name='Machine brand',blank=True, null=True, max_length=200)
    characteristics = models.FileField(verbose_name='Characteristics',blank=True, null=True)
    created_date = models.DateTimeField(default=timezone.now)
    manufactured_date = models.DateTimeField(verbose_name='Manufactured date', blank=True, null=True)
    purchased_date = models.DateTimeField(verbose_name='Purchased date',blank=True, null=True)

    def publish(self):
        self.save()

    def __str__(self):
        return self.kind

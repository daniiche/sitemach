from django.contrib.auth.models import User
from django.db import models
from django.utils.crypto import get_random_string


class Machine(models.Model):
    machineId = models.CharField(verbose_name='Machine id', max_length=8, primary_key=True, unique=True, db_index=True, default=get_random_string(length=8))
    clientId = models.ForeignKey(User, verbose_name='Client id',blank=True, null=True, on_delete=models.CASCADE)
    model = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    kind = models.CharField(verbose_name='Machine kind',blank=True, null=True, max_length=200)
    brand = models.CharField(verbose_name='Machine brand',blank=True, null=True, max_length=200)
    characteristics = models.FileField(verbose_name='Characteristics',blank=True, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    manufactured_date = models.DateTimeField(verbose_name='Manufactured date', blank=True, null=True)
    purchased_date = models.DateTimeField(verbose_name='Purchased date',blank=True, null=True)

    def __str__(self):
        return self.kind

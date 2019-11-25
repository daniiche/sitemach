from django.contrib.auth.models import User
from django.db import models
from django.utils.crypto import get_random_string
import pyqrcode
from django.conf import settings


class Machine(models.Model):

    clientId = models.ForeignKey(User, verbose_name='Client id', related_name='machines', blank=True,
                                 null=True, on_delete=models.CASCADE)
    model = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    kind = models.CharField(verbose_name='Machine kind', blank=True, null=True, max_length=200)
    brand = models.CharField(verbose_name='Machine brand', blank=True, null=True, max_length=200)
    # Date data
    manufactured_date = models.DateField(verbose_name='Manufactured date', blank=True, null=True)
    purchased_date = models.DateField(verbose_name='Purchased date', blank=True, null=True)
    warranty_date = models.DateField(verbose_name='Warranty date', blank=True, null=True)
    created_date = models.DateTimeField(verbose_name='Created date', auto_now_add=True)
    # Measurement data
    length = models.IntegerField(verbose_name='Length, mm', blank=True, null=True)
    width = models.IntegerField(verbose_name='Width, mm', blank=True, null=True)
    height = models.IntegerField(verbose_name='Height, mm', blank=True, null=True)
    weight = models.IntegerField(verbose_name='Weight, kg', blank=True, null=True)
    # Image data
    image1 = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    image2 = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    image3 = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    # Files data
    spec_file = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    sparts_file = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    cons_file = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    warranty_file = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    instruct_file = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    main_file = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    # Auto generated data
    machineId = models.CharField(verbose_name='Machine id', max_length=12, primary_key=True, unique=True,
                                 db_index=True, editable=False)
    qrcode_png = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    qrcode_small = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    qrcode_eps = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)

    def __str__(self):
        return self.machineId

    def save(self, *args, **kwargs):
        # This code only happens if the objects is not in the database yet.
        # Otherwise it would have pk
        if not self.pk:
            # Generating id string and QR codes
            randid = get_random_string(allowed_chars='abcdefghijklmnopqrstuvwxyz0123456789')

            # Assigning pk and QR codes
            self.machineId = randid

            self.qrcode_eps = 'code/' +randid + '.eps'
            self.qrcode_png = 'code/' +randid + '.png'
            self.qrcode_small = 'code/' +randid + '_mini.png'
            super(Machine, self).save(*args, **kwargs)
        else:
            super(Machine, self).save(*args, **kwargs)

from django.contrib.auth.models import User
from django.db import models
from django.utils.crypto import get_random_string
import pyqrcode


class Machine(models.Model):

    clientId = models.ForeignKey(User, verbose_name='Client id', related_name='machines', blank=True,
                                 null=True, on_delete=models.CASCADE)
    model = models.CharField(verbose_name='Machine model', blank=True, null=True, max_length=200)
    kind = models.CharField(verbose_name='Machine kind', blank=True, null=True, max_length=200)
    brand = models.CharField(verbose_name='Machine brand', blank=True, null=True, max_length=200)

    manufactured_date = models.DateField(verbose_name='Manufactured date', blank=True, null=True)
    purchased_date = models.DateField(verbose_name='Purchased date', blank=True, null=True)
    warranty_date = models.DateField(verbose_name='Warranty date', blank=True, null=True)
    created_date = models.DateTimeField(verbose_name='Created date', auto_now_add=True)

    length = models.IntegerField(verbose_name='Length, mm', blank=True, null=True)
    width = models.IntegerField(verbose_name='Width, mm', blank=True, null=True)
    height = models.IntegerField(verbose_name='Height, mm', blank=True, null=True)
    weight = models.IntegerField(verbose_name='Weight, kg', blank=True, null=True)

    image1 = models.ImageField(verbose_name='Image 1', upload_to='image', blank=True, null=True)
    image2 = models.ImageField(verbose_name='Image 2', upload_to='image', blank=True, null=True)
    image3 = models.ImageField(verbose_name='Image 3', upload_to='image', blank=True, null=True)

    spec_file = models.FileField(verbose_name='Specifications file', upload_to='file', blank=True, null=True)
    sparts_file = models.FileField(verbose_name='Spare parts file', upload_to='file', blank=True, null=True)
    cons_file = models.FileField(verbose_name='Consumables file', upload_to='file', blank=True, null=True)
    warranty_file = models.FileField(verbose_name='Warranty file', upload_to='file', blank=True, null=True)
    instruct_file = models.FileField(verbose_name='Instructions file', upload_to='file', blank=True, null=True)
    main_file = models.FileField(verbose_name='Maintenance file', upload_to='file', blank=True, null=True)

    machineId = models.CharField(verbose_name='Machine id', max_length=12, primary_key=True, unique=True,
                                 db_index=True, editable=False)
    qrcode_png = models.ImageField(verbose_name='QR code image png', blank=True, null=True, max_length=200, editable=False)
    qrcode_small = models.ImageField(verbose_name='Mini QR image png', blank=True, null=True, max_length=200, editable=False)
    qrcode_eps = models.ImageField(verbose_name='QR code image eps', blank=True, null=True, max_length=200, editable=False)

    def __str__(self):
        return self.machineId

    def save(self, *args, **kwargs):
        if not self.pk:
            # This code only happens if the objects is
            # not in the database yet. Otherwise it would
            # have pk
            randid = get_random_string(allowed_chars='abcdefghijklmnopqrstuvwxyz0123456789')
            pyqrcode.create("domain/item/" + randid + "/").eps(
                    "media/code/" + randid + ".eps", scale=20)
            pyqrcode.create("domain:8000/item/" + randid + "/").png(
                "media/code/" + randid + ".png", scale=20)
            pyqrcode.create("domain:8000/item/" + randid + "/").png(
                "media/code/" + randid + "_mini.png", scale=6)
            self.machineId = randid
            self.qrcode_eps = "/code/" + randid + ".eps"
            self.qrcode_png = "/code/" + randid + ".png"
            self.qrcode_small = "/code/" + randid + "_mini.png"
            super(Machine, self).save(*args, **kwargs)
        else:
            super(Machine, self).save(*args, **kwargs)

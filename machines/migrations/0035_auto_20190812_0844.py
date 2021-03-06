# Generated by Django 2.2.2 on 2019-08-12 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0034_auto_20190807_2125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='qrcode_eps',
            field=models.ImageField(blank=True, editable=False, max_length=200, null=True, upload_to='', verbose_name='QR code image eps'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='qrcode_png',
            field=models.ImageField(blank=True, editable=False, max_length=200, null=True, upload_to='', verbose_name='QR code image png'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='qrcode_small',
            field=models.ImageField(blank=True, editable=False, max_length=200, null=True, upload_to='', verbose_name='Mini QR image png'),
        ),
    ]

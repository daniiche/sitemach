# Generated by Django 2.2.2 on 2019-08-07 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0029_auto_20190807_1102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='machineId',
            field=models.CharField(db_index=True, max_length=12, primary_key=True, serialize=False, unique=True, verbose_name='Machine id'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='qrcode_eps',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='QR code image eps'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='qrcode_png',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='QR code image png'),
        ),
    ]

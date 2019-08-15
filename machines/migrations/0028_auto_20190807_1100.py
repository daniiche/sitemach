# Generated by Django 2.2.2 on 2019-08-07 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0027_auto_20190807_1058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='machineId',
            field=models.CharField(db_index=True, default='dm6ehd39ksm8', max_length=12, primary_key=True, serialize=False, unique=True, verbose_name='Machine id'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='qrcode_eps',
            field=models.ImageField(blank=True, default='None', null=True, upload_to='code', verbose_name='QR code image eps'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='qrcode_png',
            field=models.ImageField(blank=True, default='None', null=True, upload_to='code', verbose_name='QR code image png'),
        ),
    ]

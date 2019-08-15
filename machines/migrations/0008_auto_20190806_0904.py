# Generated by Django 2.2.2 on 2019-08-06 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0007_auto_20190708_1432'),
    ]

    operations = [
        migrations.AddField(
            model_name='machine',
            name='qrcode_image',
            field=models.ImageField(blank=True, null=True, upload_to='code', verbose_name='QR code image'),
        ),
        migrations.AddField(
            model_name='machine',
            name='spec_file',
            field=models.FileField(blank=True, null=True, upload_to='file', verbose_name='Specifications file'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='created_date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created date'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='machineId',
            field=models.CharField(db_index=True, default='3omzfsw93kj1', max_length=8, primary_key=True, serialize=False, unique=True, verbose_name='Machine id'),
        ),
    ]

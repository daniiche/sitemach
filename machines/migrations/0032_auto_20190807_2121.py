# Generated by Django 2.2.2 on 2019-08-07 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0031_auto_20190807_1505'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='machine',
            name='spec_file1',
        ),
        migrations.AddField(
            model_name='machine',
            name='cons_file',
            field=models.FileField(blank=True, null=True, upload_to='file', verbose_name='Consumables file'),
        ),
        migrations.AddField(
            model_name='machine',
            name='height',
            field=models.IntegerField(blank=True, max_length=200, null=True, verbose_name='Height, mm'),
        ),
        migrations.AddField(
            model_name='machine',
            name='image1',
            field=models.ImageField(blank=True, null=True, upload_to='image', verbose_name='Image 1'),
        ),
        migrations.AddField(
            model_name='machine',
            name='image2',
            field=models.ImageField(blank=True, null=True, upload_to='image', verbose_name='Image 2'),
        ),
        migrations.AddField(
            model_name='machine',
            name='image3',
            field=models.ImageField(blank=True, null=True, upload_to='image', verbose_name='Image 3'),
        ),
        migrations.AddField(
            model_name='machine',
            name='instruct_file',
            field=models.FileField(blank=True, null=True, upload_to='file', verbose_name='Instructions file'),
        ),
        migrations.AddField(
            model_name='machine',
            name='length',
            field=models.IntegerField(blank=True, max_length=200, null=True, verbose_name='Length, mm'),
        ),
        migrations.AddField(
            model_name='machine',
            name='main_file',
            field=models.FileField(blank=True, null=True, upload_to='file', verbose_name='Maintenance file'),
        ),
        migrations.AddField(
            model_name='machine',
            name='qrcode_small',
            field=models.CharField(blank=True, editable=False, max_length=200, null=True, verbose_name='Mini QR image png'),
        ),
        migrations.AddField(
            model_name='machine',
            name='sparts_file',
            field=models.FileField(blank=True, null=True, upload_to='file', verbose_name='Spare parts file'),
        ),
        migrations.AddField(
            model_name='machine',
            name='warranty_date',
            field=models.DateField(blank=True, null=True, verbose_name='Warranty date'),
        ),
        migrations.AddField(
            model_name='machine',
            name='warranty_file',
            field=models.FileField(blank=True, null=True, upload_to='file', verbose_name='Warranty file'),
        ),
        migrations.AddField(
            model_name='machine',
            name='weight',
            field=models.IntegerField(blank=True, max_length=200, null=True, verbose_name='Weight, mm'),
        ),
        migrations.AddField(
            model_name='machine',
            name='width',
            field=models.IntegerField(blank=True, max_length=200, null=True, verbose_name='Width, mm'),
        ),
    ]
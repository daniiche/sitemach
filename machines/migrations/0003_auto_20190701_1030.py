# Generated by Django 2.2.2 on 2019-07-01 09:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0002_auto_20190701_0917'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='machine',
            name='bought_date',
        ),
        migrations.RemoveField(
            model_name='machine',
            name='name',
        ),
        migrations.AddField(
            model_name='machine',
            name='model',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Machine model'),
        ),
        migrations.AddField(
            model_name='machine',
            name='purchased_date',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Purchased date'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='brand',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Machine brand'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='characteristics',
            field=models.FileField(blank=True, null=True, upload_to='', verbose_name='Characteristics'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='clientid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Client id'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='kind',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Machine kind'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='machineid',
            field=models.CharField(max_length=50, primary_key=True, serialize=False, verbose_name='Machine id'),
        ),
        migrations.AlterField(
            model_name='machine',
            name='manufactured_date',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Manufactured date'),
        ),
    ]
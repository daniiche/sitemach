# Generated by Django 2.2.2 on 2019-08-06 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0015_auto_20190806_1201'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='machineId',
            field=models.CharField(db_index=True, default='79mygh9pu2ob', max_length=12, primary_key=True, serialize=False, unique=True, verbose_name='Machine id'),
        ),
    ]

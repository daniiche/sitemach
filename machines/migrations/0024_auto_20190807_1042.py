# Generated by Django 2.2.2 on 2019-08-07 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0023_auto_20190806_1910'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='machineId',
            field=models.CharField(db_index=True, default='xmuendht0spw', max_length=12, primary_key=True, serialize=False, unique=True, verbose_name='Machine id'),
        ),
    ]

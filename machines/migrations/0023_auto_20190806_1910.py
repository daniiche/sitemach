# Generated by Django 2.2.2 on 2019-08-06 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machines', '0022_auto_20190806_1908'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machine',
            name='machineId',
            field=models.CharField(db_index=True, default='23vvio5agnoz', max_length=12, primary_key=True, serialize=False, unique=True, verbose_name='Machine id'),
        ),
    ]

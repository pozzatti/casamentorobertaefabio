# Generated by Django 4.2.4 on 2023-09-08 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rvsp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='confirmacao',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

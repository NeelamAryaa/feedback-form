# Generated by Django 4.0.2 on 2022-02-05 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('feedbackApp', '0003_feedback_salutation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='salutation',
            field=models.CharField(max_length=5),
        ),
    ]

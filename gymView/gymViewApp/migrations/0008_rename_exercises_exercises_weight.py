# Generated by Django 4.2.7 on 2023-11-20 05:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gymViewApp', '0007_remove_exercises_training_remove_weight_exercises_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercises',
            old_name='exercises',
            new_name='Weight',
        ),
    ]

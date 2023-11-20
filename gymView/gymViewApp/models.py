from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission



class User(AbstractUser):
    email = models.EmailField(unique=True)
    nick = models.CharField(max_length=255, null=True, blank=True)
    username = models.CharField(max_length=150, unique=True, default='New_User')

    groups = models.ManyToManyField(Group, related_name='gymviewapp_user_set', blank=True)
    user_permissions = models.ManyToManyField(
        Permission, related_name='gymviewapp_user_set', blank=True
    )

class Weight(models.Model):
    date = models.DateField()
    weight = models.FloatField()
    User = models.ForeignKey('User', on_delete=models.CASCADE, null=True, blank=True)


class Training(models.Model):
    name = models.CharField(max_length=255, default="Trening")
    date = models.DateField()
    exercises = models.ManyToManyField('Exercises')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)


class SavedTrainings(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    exercises = models.ManyToManyField('Exercises')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField(null=True, blank=True)

class Exercises(models.Model):
    name = models.CharField(max_length=255)
    weeks = models.ManyToManyField('Week', related_name='exercise_weeks', blank=True, null=True)
    comment = models.TextField(null=True, blank=True)
    users = models.ManyToManyField('User', related_name='exercises')


class Week(models.Model):
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    number_of_series = models.IntegerField()
    number_of_replication = models.IntegerField()
    weight = models.FloatField()
    comment = models.TextField()
    exercises = models.ForeignKey(Exercises, on_delete=models.CASCADE, null=True, blank=True)


from django.db import models

class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    nick = models.CharField(max_length=255, null=True, blank=True)

class Weight(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.CharField(max_length=255)
    weight = models.FloatField()
    exercises = models.ForeignKey('Exercises', on_delete=models.CASCADE, null=True, blank=True)

class Training(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, default="Trening")
    date = models.CharField(max_length=255)
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
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    weeks = models.ManyToManyField('Week', related_name='exercise_weeks')
    comment = models.TextField(null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)

class Week(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    number_of_series = models.IntegerField()
    number_of_replication = models.IntegerField()
    weight = models.FloatField()
    comment = models.TextField()
    exercises = models.ForeignKey(Exercises, on_delete=models.CASCADE, null=True, blank=True)

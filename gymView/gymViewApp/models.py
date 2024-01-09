from django.db import models
from django.contrib.auth.models import User, Group, Permission

class Weight(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    weight = models.FloatField()

class Exercise(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)

class Training(models.Model):
    name = models.CharField(max_length=255, default="Trening")
    date = models.DateField()
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    exercises = models.ManyToManyField(Exercise, through='TrainingExercise')

class TrainingExercise(models.Model):
    training = models.ForeignKey(Training, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    comment = models.TextField()

class SavedTraining(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    exercises = models.ManyToManyField(Exercise, through='SavedTrainingExercise')

class SavedTrainingExercise(models.Model):
    saved_training = models.ForeignKey(SavedTraining, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    comment = models.TextField()

class Week(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    number_of_series = models.IntegerField()
    number_of_replication = models.IntegerField()
    weight = models.FloatField()
    comment = models.TextField()
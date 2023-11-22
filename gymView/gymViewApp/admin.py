from django.contrib import admin
from .models import User, Weight, Exercise, Training, TrainingExercise, SavedTraining, SavedTrainingExercise, Week

# Dodajemy modele do panelu admina

class TrainingExerciseInline(admin.TabularInline):
    model = TrainingExercise
    extra = 1


class SavedTrainingExerciseInline(admin.TabularInline):
    model = SavedTrainingExercise
    extra = 1


class TrainingAdmin(admin.ModelAdmin):
    inlines = [TrainingExerciseInline]


class SavedTrainingAdmin(admin.ModelAdmin):
    inlines = [SavedTrainingExerciseInline]


admin.site.register(User)
admin.site.register(Weight)
admin.site.register(Exercise)
admin.site.register(Training, TrainingAdmin)
admin.site.register(SavedTraining, SavedTrainingAdmin)
admin.site.register(Week)

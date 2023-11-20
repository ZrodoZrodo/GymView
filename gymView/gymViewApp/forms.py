from django import forms
from .models import Exercises

class ExerciseForm(forms.ModelForm):
    class Meta:
        model = Exercises
        fields = ['name', 'weeks', 'comment', 'users']

    def __init__(self, *args, **kwargs):
        super(ExerciseForm, self).__init__(*args, **kwargs)
        self.fields['weeks'].required = False
from django.shortcuts import render
from django.shortcuts import render, redirect
# Create your views here.
from django.http import HttpResponse
from .forms import ExerciseForm

def add_exercise(request):
    if request.method == 'POST':
        form = ExerciseForm(request.POST)
        if form.is_valid():
            exercise = form.save()
            return redirect('/user/test')  # Replace 'success_page' with the actual success page
    else:
        form = ExerciseForm()

    return render(request, 'gymViewApp/add_exercise.html', {'form': form})

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def test(request):
    return HttpResponse('<html><body>TEST</body></html>')
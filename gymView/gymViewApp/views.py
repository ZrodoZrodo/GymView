from django.shortcuts import render
from django.shortcuts import render, redirect
# Create your views here.
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def test(request):
    return HttpResponse('<html><body>TEST</body></html>')
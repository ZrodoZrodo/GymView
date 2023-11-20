from django.urls import path
from . import views

urlpatterns = [
     path('add_exercise/', views.add_exercise, name='add_exercise'),
    path("", views.index, name="index"),
    path("test", views.test, name="test"),
]


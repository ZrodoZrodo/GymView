from django.urls import path
from . import views
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path("", views.index, name="index"),
    path("test", views.test, name="test"),
         path('token/', 
          jwt_views.TokenObtainPairView.as_view(), 
          name ='token_obtain_pair'),
     path('token/refresh/', 
          jwt_views.TokenRefreshView.as_view(), 
          name ='token_refresh'),
    path('home/', views.HomeView.as_view(), name ='home'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('register/', views.CreateUser.as_view(), name ='Register'),
    path('Trening/<int:pk>/', views.TrainingView.as_view(), name ='TreningView'),
    path('Trenings/', views.TrainingView.as_view(), name ='TreningView'),
    path('exercise/', views.ExerciseView.as_view(), name ='ExerciseView'),
    path('exercise/<int:pk>/', views.ExerciseView.as_view(), name ='ExerciseView'),
]


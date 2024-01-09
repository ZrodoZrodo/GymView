
from django.shortcuts import render, redirect
# Create your views here.
from django.http import HttpResponse
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Training,Exercise,TrainingExercise

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def test(request):
    return HttpResponse('<html><body>TEST</body></html>')

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
class HomeView(APIView):
     
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
        return render(request,'../static/homePage.html')

class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               print(token)
               token.blacklist()
               return Response(status=205)
          except Exception as e:
               return Response(status=400)

class CreateUser(APIView):
    def post(self, request):
        try:
            user=User.objects.create_user(username=request.data["username"], email=request.data["email"], password=request.data["password"])
            user.save()
            return Response(status=201)
        except Exception as ex:
            return Response(status=400)
        
class AddTrainingSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    date = serializers.DateField()
    comment = serializers.CharField(allow_blank=True)
    exercises = serializers.ListField(child=serializers.DictField())


class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class TrainingExerciseSerializer(serializers.ModelSerializer):
    exercise = ExerciseSerializer()

    class Meta:
        model = TrainingExercise
        fields = ['exercise', 'comment']

class TrainingSerializer(serializers.ModelSerializer):
    exercises = TrainingExerciseSerializer(many=True, source='trainingexercise_set')

    class Meta:
        model = Training
        fields = '__all__'

class AddTrainingSerializer(serializers.ModelSerializer):
    exercises = serializers.ListField(child=serializers.DictField())

    class Meta:
        model = Training
        fields = ['name', 'date', 'comment', 'exercises']

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.date = validated_data.get('date', instance.date)
        instance.comment = validated_data.get('comment', instance.comment)

        # Update exercises associated with the training
        exercises_data = validated_data.get('exercises', [])
        instance.trainingexercise_set.all().delete()  # Remove existing exercises

        for exercise_data in exercises_data:
            exercise_name = exercise_data.get('name', '')
            exercise_comment = exercise_data.get('comment', '')

            # Create or get the exercise
            exercise, created = Exercise.objects.get_or_create(name=exercise_name)

            # Create TrainingExercise instance
            TrainingExercise.objects.create(training=instance, exercise=exercise, comment=exercise_comment)

        instance.save()
        return instance

class TrainingView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = AddTrainingSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            name = serializer.validated_data['name']
            date = serializer.validated_data['date']
            comment = serializer.validated_data.get('comment', '')

            # Create a new training for the user
            new_training = Training.objects.create(user=user, name=name, date=date, comment=comment)

            # Add exercises to the training
            exercises_data = serializer.validated_data['exercises']
            for exercise_data in exercises_data:
                exercise_name = exercise_data.get('name', '')
                exercise_comment = exercise_data.get('comment', '')

                # Create or get the exercise
                exercise, created = Exercise.objects.get_or_create(name=exercise_name)

                # Create TrainingExercise instance
                TrainingExercise.objects.create(training=new_training, exercise=exercise, comment=exercise_comment)

            return Response({'message': 'Training added successfully'}, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request,pk=None):
        if pk==None:
            user = request.user
            user_trainings = Training.objects.filter(user=user)
            serializer = TrainingSerializer(user_trainings, many=True)
            return Response(serializer.data)
        else:
            user = request.user
            user_trainings = Training.objects.filter(user=user,id=pk)
            serializer = TrainingSerializer(user_trainings, many=True)
            return Response(serializer.data)
    
    def put(self, request, pk):
        user = request.user
        try:
            training = Training.objects.get(user=user, id=pk)
        except Training.DoesNotExist:
            return Response({'message': 'Training not found'}, status=404)

        serializer = AddTrainingSerializer(training, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Training updated successfully'}, status=200)
        else:
            return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        user = request.user
        try:
            training = Training.objects.get(user=user, id=pk)
        except Training.DoesNotExist:
            return Response({'message': 'Training not found'}, status=404)

        training.delete()
        return Response({'message': 'Training deleted successfully'}, status=200)
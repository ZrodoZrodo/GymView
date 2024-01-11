
from django.shortcuts import render, redirect
# Create your views here.
from django.http import HttpResponse
from rest_framework import serializers,status
from django.contrib.auth.models import User
from .models import Training,Exercise,TrainingExercise,Week,ExerciseWeek,SavedTraining,SavedTrainingExercise

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def test(request):
    return HttpResponse('<html><body>TEST</body></html>')

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

class CreateUser(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        try:
            print(request.data)
            user=User.objects.create_user(username=request.data["username"], email=request.data["email"], password=request.data["password"])
            user.save()
            return Response(status=201)
        except Exception as ex:
            return Response(status=400)
        




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
    exercises = serializers.ListField(child=serializers.IntegerField())

    class Meta:
        model = Training
        fields = ['name', 'date', 'comment', 'exercises']

    def create(self, validated_data):
        user = self.context['request'].user
        name = validated_data['name']
        date = validated_data['date']
        comment = validated_data.get('comment', '')

        # Create a new training for the user
        new_training = Training.objects.create(user=user, name=name, date=date, comment=comment)

        # Add exercises to the training
        exercises_ids = validated_data['exercises']
        for exercise_id in exercises_ids:
            exercise = Exercise.objects.get(pk=exercise_id)

            # Create TrainingExercise instance
            TrainingExercise.objects.create(training=new_training, exercise=exercise)

        return new_training
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.date = validated_data.get('date', instance.date)
        instance.comment = validated_data.get('comment', instance.comment)

        # Update exercises associated with the training
        exercises_data = validated_data.get('exercises', [])
        instance.trainingexercise_set.all().delete()  # Remove existing exercises

        for exercise_id in exercises_data:
            exercise = Exercise.objects.get(pk=exercise_id)

            # Create TrainingExercise instance
            TrainingExercise.objects.create(training=instance, exercise=exercise)

        instance.save()
        return instance
    

class TrainingView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
            serializer = AddTrainingSerializer(data=request.data, context={'request': request})
            if serializer.is_valid():
                training = serializer.save()
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

class WeekSerializer(serializers.ModelSerializer):
    class Meta:
        model = Week
        fields = '__all__'



class ExerciseView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = ExerciseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'message': 'Exercise added successfully'}, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request,pk=None):
        if pk==None:
            user = request.user
            user_exercises = Exercise.objects.filter(user=user)
            serializer = ExerciseSerializer(user_exercises, many=True)
            
            # Serialize the data with WeekSerializer to include the full representation of Week objects
            serialized_data = []
            for exercise_data in serializer.data:
                weeks_data = exercise_data.get('weeks', [])

                # Retrieve Week instances using the IDs
                week_instances = Week.objects.filter(pk__in=weeks_data)
                week_serializer = WeekSerializer(week_instances, many=True)
                
                exercise_data['weeks'] = week_serializer.data
                serialized_data.append(exercise_data)

            return Response(serialized_data)
        else:
            user = request.user
            try:
                # Retrieve a single Exercise instance by ID
                user_exercise = Exercise.objects.get(pk=pk, user=user)
            except Exercise.DoesNotExist:
                return Response({'error': 'Exercise does not exist'}, status=404)

            # Serialize the single Exercise instance
            serializer = ExerciseSerializer(user_exercise)
            
            # Serialize the data with WeekSerializer to include the full representation of Week objects
            weeks_data = serializer.data.get('weeks', [])

            # Retrieve Week instances using the IDs
            week_instances = Week.objects.filter(pk__in=weeks_data)
            week_serializer = WeekSerializer(week_instances, many=True)

            # Add the serialized Week data to the Exercise data
            serialized_data = serializer.data
            serialized_data['weeks'] = week_serializer.data

            return Response(serialized_data)


    
    def put(self, request, pk):  # Assuming you pass the exercise ID in the URL
        exercise_id = pk
        try:
            exercise = Exercise.objects.get(pk=exercise_id)
        except Exercise.DoesNotExist:
            return Response({'error': 'Exercise does not exist'}, status=404)

        serializer = ExerciseSerializer(exercise, data=request.data)
        if serializer.is_valid():
            serializer.save()

            # Clear existing ExerciseWeek instances
            ExerciseWeek.objects.filter(exercise=exercise).delete()

            # Create or update related ExerciseWeek instances
            for week_data in request.data.get('weeks', []):
                week_serializer = WeekSerializer(data=week_data)
                if week_serializer.is_valid():
                    week_instance = week_serializer.save()
                    ExerciseWeek.objects.create(exercise=exercise, week=week_instance)

            return Response({'message': 'Exercise updated successfully'}, status=200)
        else:
            return Response(serializer.errors, status=400)
    def delete(self, request, pk):
            try:
                exercise = Exercise.objects.get(pk=pk)
            except Exercise.DoesNotExist:
                return Response({'error': 'Exercise does not exist'}, status=404)

            exercise.delete()
            return Response({'message': 'Exercise deleted successfully'}, status=200)

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'


class SavedTrainingSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(many=True, read_only=True)

    class Meta:
        model = SavedTraining
        fields = ['name', 'user', 'description', 'exercises']

    def create(self, validated_data):
        user = self.context['request'].user
        name = validated_data['name']
        description = validated_data.get('description', '')

        # Create a new saved training for the user
        new_saved_training = SavedTraining.objects.create(user=user, name=name, description=description)

        # Add exercises to the saved training
        exercises_data = validated_data.get('exercises', [])
        for exercise_data in exercises_data:
            exercise = Exercise.objects.get(pk=exercise_data['id'])  # Assumes 'id' is a key in the exercise_data dictionary

            # Create SavedTrainingExercise instance
            SavedTrainingExercise.objects.create(saved_training=new_saved_training, exercise=exercise)

        return new_saved_training
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)    

        # Update exercises associated with the training
        exercises_data = validated_data.get('exercises', [])

        for exercise_id in exercises_data:
            exercise = Exercise.objects.get(id=exercise_id)
            print(exercise)
            # Create TrainingExercise instance
            SavedTrainingExercise.objects.create(saved_training=instance, exercise=exercise)

        instance.save()
        return instance

class SavedTrainingView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = SavedTrainingSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            saved_training = serializer.save()
            return Response({'message': 'Saved training added successfully'}, status=201)
        else:
            return Response(serializer.errors, status=400)

    def get(self, request, pk=None):
        if pk is None:
            user = request.user
            user_saved_trainings = SavedTraining.objects.filter(user=user)
            serializer = SavedTrainingSerializer(user_saved_trainings, many=True)
            return Response(serializer.data)
        else:
            user = request.user
            user_saved_trainings = SavedTraining.objects.filter(user=user, id=pk)
            serializer = SavedTrainingSerializer(user_saved_trainings, many=True)
            return Response(serializer.data)

    def put(self, request, pk):
        user = request.user
        try:
            training = SavedTraining.objects.get(user=user, id=pk)
        except SavedTraining.DoesNotExist:
            return Response({'message': 'Training not found'}, status=404)

        serializer = SavedTrainingSerializer(training, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Training updated successfully'}, status=200)
        else:
            return Response(serializer.errors, status=400)
        
    def delete(self, request, pk):
        user = request.user
        try:
            saved_training = SavedTraining.objects.get(user=user, id=pk)
        except SavedTraining.DoesNotExist:
            return Response({'message': 'Saved training not found'}, status=404)

        saved_training.delete()
        return Response({'message': 'Saved training deleted successfully'}, status=200)
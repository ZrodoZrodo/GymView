from django.contrib import admin
# Register your models here.


from gymViewApp.models import User, Weight, Training, SavedTrainings, Exercises, Week

admin.site.register(User)
admin.site.register(Weight)
admin.site.register(Training)
admin.site.register(SavedTrainings)
admin.site.register(Exercises)
admin.site.register(Week)
from django.contrib import admin
from .models import *

# Register your models here.
admin.site.site_title = 'eBook House'
admin.site.site_header = 'eBook House'

my_models = (UserRole, Master, Profile, Category, Book)
for model in my_models:
    admin.site.register(model)
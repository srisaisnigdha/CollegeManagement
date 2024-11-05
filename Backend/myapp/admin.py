from django.contrib import admin
from .models import *
# Register your models here.

class_names = [
    StudentInfo,
    FacultyInfo,
    AdministrationInfo,
    CurrentCourses,
    CourseList,
    Result,
    ClassInfo,
    FeeDefaulters,
    Absentees,
    Todolist,
    Login,
    WeeklyTimeTable,
    TimeTable,
    Message,
    FacultyTimeTable,
]


for model in class_names:
    admin.site.register(model)
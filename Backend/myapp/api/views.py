from rest_framework import viewsets
from ..models import StudentInfo, FacultyInfo, AdministrationInfo, CurrentCourses, CourseList, Result, ClassInfo, FeeDefaulters, Absentees, Todolist, Login
from .serializers import StudentInfoSerializer, FacultyInfoSerializer, AdministrationInfoSerializer, CurrentCoursesSerializer, CourseListSerializer, ResultSerializer, ClassInfoSerializer, FeeDefaultersSerializer, AbsenteesSerializer, TodolistSerializer, LoginSerializer
from ..models import *
from .serializers import *
class StudentInfoViewSet(viewsets.ModelViewSet):
    queryset = StudentInfo.objects.all()
    serializer_class = StudentInfoSerializer

class FacultyInfoViewSet(viewsets.ModelViewSet):
    queryset = FacultyInfo.objects.all()
    serializer_class = FacultyInfoSerializer

class AdministrationInfoViewSet(viewsets.ModelViewSet):
    queryset = AdministrationInfo.objects.all()
    serializer_class = AdministrationInfoSerializer

class CurrentCoursesViewSet(viewsets.ModelViewSet):
    queryset = CurrentCourses.objects.all()
    serializer_class = CurrentCoursesSerializer

class CourseListViewSet(viewsets.ModelViewSet):
    queryset = CourseList.objects.all()
    serializer_class = CourseListSerializer

class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class ClassInfoViewSet(viewsets.ModelViewSet):
    queryset = ClassInfo.objects.all()
    serializer_class = ClassInfoSerializer

class FeeDefaultersViewSet(viewsets.ModelViewSet):
    queryset = FeeDefaulters.objects.all()
    serializer_class = FeeDefaultersSerializer

class AbsenteesViewSet(viewsets.ModelViewSet):
    queryset = Absentees.objects.all()
    serializer_class = AbsenteesSerializer

class TodolistViewSet(viewsets.ModelViewSet):
    queryset = Todolist.objects.all()
    serializer_class = TodolistSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

class TimeTableviewset (viewsets.ModelViewSet):
    queryset = TimeTable.objects.all()
    serializer_class = TimeTableSerializer

from rest_framework import serializers
from ..models import StudentInfo, FacultyInfo, AdministrationInfo, CurrentCourses, CourseList, Result, ClassInfo, FeeDefaulters, Absentees, Todolist, Login
from ..models import *
class StudentInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentInfo
        fields = ['roll_no', 'name', 'department', 'joining_year', 'blood_group', 'semester', 'contact_number', 'address', 'gender', 'email']

class FacultyInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacultyInfo
        fields = ['faculty_id', 'name', 'position', 'designation', 'email', 'description']

class AdministrationInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdministrationInfo
        fields = ['name', 'position']

class CurrentCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurrentCourses
        fields = ['course_code', 'total_classes', 'faculty_name', 'semester']

class CourseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseList
        fields = ['course_code', 'course_name', 'semester', 'department']

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ['course_code', 'faculty', 'ct_1', 'ct_2', 'assignments', 'end_sem', 'grade', 'roll_no']

class ClassInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassInfo
        fields = ['batch', 'department', 'class_coordinator', 'class_representative']

class FeeDefaultersSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeeDefaulters
        fields = ['department', 'batch', 'roll_no']

class AbsenteesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Absentees
        fields = ['course_code', 'date', 'roll_no']

class TodolistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todolist
        fields = ['roll_no', 'task','id','is_completed']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ['email', 'type_of_user']


class  ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model=Result
        fields=('id','course_code','faculty','ct_1','ct_2','assignments','end_sem','grade','roll_no')

 
class TimeTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeTable
        fields = ['semester','department','day','slot_1','slot_2','slot_3','slot_4','slot_5','slot_6','slot_7']
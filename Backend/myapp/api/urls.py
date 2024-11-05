from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import StudentInfoViewSet, FacultyInfoViewSet, AdministrationInfoViewSet, CurrentCoursesViewSet, CourseListViewSet, ResultViewSet, ClassInfoViewSet, FeeDefaultersViewSet, AbsenteesViewSet, TodolistViewSet, LoginViewSet
from .views import *
post_router = DefaultRouter()

post_router.register(r'student_info', StudentInfoViewSet)
post_router.register(r'faculty_info', FacultyInfoViewSet)
post_router.register(r'administration_info', AdministrationInfoViewSet)
post_router.register(r'current_courses', CurrentCoursesViewSet)
post_router.register(r'course_list', CourseListViewSet)
post_router.register(r'result', ResultViewSet)
post_router.register(r'class_info', ClassInfoViewSet)
post_router.register(r'fee_defaulters', FeeDefaultersViewSet)
post_router.register(r'absentees', AbsenteesViewSet)
post_router.register(r'todolist', TodolistViewSet)
post_router.register(r'login', LoginViewSet)
post_router.register(r'timetable', TimeTableviewset)

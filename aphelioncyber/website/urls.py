from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('platform/', views.platform, name='platform'),
    path('solutions/', views.solutions, name='solutions'),
    path('pricing/', views.pricing, name='pricing'),
    path('resources/', views.resources, name='resources'),
    path('company/', views.company, name='company'),
    path('login/', views.login, name='login'),
    path('contact/', views.contact, name='contact'),
    path('forgot-password/', views.forgot_password, name='forgot_password'),
    path('signup/', views.signup, name='signup'),  # Add this line
]
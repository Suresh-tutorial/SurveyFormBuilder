from django.urls import path
from . import views
urlpatterns=[
    path('', views.home, name='home'),
    path('forms',views.send, name='send'),
    path('response',views.response,name='response')
    
]
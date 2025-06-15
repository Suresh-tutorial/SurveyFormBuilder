from django.shortcuts import render

def home(request):
    return render(request,'home.html')

def send(request):
   
    return render(request,'send.html')
def response(requset):

    return render(requset,'Response.html')
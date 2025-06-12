from django.shortcuts import render
from django.http import HttpRequest

def home(request):
    return render(request,'home.html')
# Create your views here.
def send(request):
    Fn=request.GET['text1']
    Ln=request.GET['text2']
    Na=[Fn,Ln]
    return render(request,'send.html', {'Nae':list(Na)})
from django.shortcuts import render
from django.http import HttpResponse
import matplotlib.pyplot as plt
# Create your views here.

def index(request):
    return HttpResponse("Hello, World!")

def supplychain(request):
    return render(request,"app/index.html")
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ContactForm

def home(request):
    return render(request, 'website/home.html')

def platform(request):
    return render(request, 'website/platform.html')

def solutions(request):
    return render(request, 'website/solutions.html')

def pricing(request):
    return render(request, 'website/pricing.html')

def resources(request):
    return render(request, 'website/resources.html')

def company(request):
    return render(request, 'website/company.html')

def login(request):
    return render(request, 'website/login.html')

def forgot_password(request):
    if request.method == 'POST':
        # Add your password reset logic here
        # For example, send a reset email
        messages.success(request, 'Password reset instructions have been sent to your email.')
        return redirect('login')
    return render(request, 'website/forgot_password.html')

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Your message has been sent. We will get back to you soon!')
            return redirect('contact')
    else:
        form = ContactForm()
    
    return render(request, 'website/contact.html', {'form': form})

def signup(request):
    return render(request, 'website/signup.html')
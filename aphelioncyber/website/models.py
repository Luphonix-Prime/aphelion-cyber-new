from django.db import models

class ContactSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    company = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.company}"


# Add this after the ContactSubmission model
class UserSubscription(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    subscription_type = models.CharField(max_length=50)
    status = models.CharField(max_length=20)
    last_active = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.subscription_type}"
# myapp/models.py

from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class Autocar(models.Model):
    name = models.CharField(max_length=100)
    license_plate = models.CharField(max_length=50)
    capacity = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class Carte(models.Model):
    name = models.CharField(max_length=100)
    card_number = models.CharField(max_length=50)
    balance = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.username

class Mission(models.Model):
    driver = models.ForeignKey(User, on_delete=models.CASCADE)
    autocar = models.ForeignKey(Autocar, on_delete=models.CASCADE)
    destination = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    card = models.ForeignKey(Carte, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"Mission to {self.destination} by {self.driver.username}"

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    try:
        instance.profile.save()
    except Profile.DoesNotExist:
        pass

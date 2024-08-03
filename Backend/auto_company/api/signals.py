# api/signals.py

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import Chauffeur, Autocar, Carte, Mission, Counter

def update_counter():
    counter, created = Counter.objects.get_or_create(pk=1)
    counter.chauffeur_count = Chauffeur.objects.count()
    counter.autocar_count = Autocar.objects.count()
    counter.carte_count = Carte.objects.count()
    counter.mission_count = Mission.objects.count()
    counter.save()

@receiver(post_save, sender=Chauffeur)
@receiver(post_delete, sender=Chauffeur)
def update_chauffeur_counter(sender, instance, **kwargs):
    update_counter()

@receiver(post_save, sender=Autocar)
@receiver(post_delete, sender=Autocar)
def update_autocar_counter(sender, instance, **kwargs):
    update_counter()

@receiver(post_save, sender=Carte)
@receiver(post_delete, sender=Carte)
def update_carte_counter(sender, instance, **kwargs):
    update_counter()

@receiver(post_save, sender=Mission)
@receiver(post_delete, sender=Mission)
def update_mission_counter(sender, instance, **kwargs):
    update_counter()

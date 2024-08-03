from django.db import models
from django.contrib.auth.models import AbstractUser,Group ,Permission

class Chauffeur(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    permis_conduire = models.CharField(max_length=100, unique=True)

class Autocar(models.Model):
    immatriculation = models.CharField(max_length=100, unique=True)
    marque = models.CharField(max_length=100)
    modele = models.CharField(max_length=100)
    capacite = models.IntegerField()

class Carte(models.Model):
    numero = models.CharField(max_length=100, unique=True)
    solde = models.DecimalField(max_digits=10, decimal_places=2)

class Mission(models.Model):
    chauffeur = models.ForeignKey(Chauffeur, on_delete=models.CASCADE)
    autocar = models.ForeignKey(Autocar, on_delete=models.CASCADE)
    ville_depart = models.CharField(max_length=100)
    ville_arrivee = models.CharField(max_length=100)
    date_depart = models.DateTimeField()
    date_arrivee = models.DateTimeField()
    carte = models.ForeignKey(Carte, on_delete=models.CASCADE)

class Counter(models.Model):
    chauffeur_count = models.IntegerField(default=0)
    autocar_count = models.IntegerField(default=0)
    carte_count = models.IntegerField(default=0)
    mission_count = models.IntegerField(default=0)

class User(AbstractUser):
    is_agent = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        Group,
        related_name='autocar_agents',  # Ajouter un related_name unique
        blank=True,
        help_text='The groups this user belongs to.',
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='api_agent',  # Ajouter un related_name unique
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='user',
    )
# myapp/admin.py

from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Profile, Autocar, Carte, Mission

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = 'Profile'

class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)

# Register the custom User admin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)

class AutocarAdmin(admin.ModelAdmin):
    list_display = ('name', 'license_plate', 'capacity')
    search_fields = ('name', 'license_plate')

class CarteAdmin(admin.ModelAdmin):
    list_display = ('name', 'card_number', 'balance')
    search_fields = ('name', 'card_number')

class MissionAdmin(admin.ModelAdmin):
    list_display = ('driver', 'autocar', 'destination', 'departure_time', 'arrival_time', 'card')
    search_fields = ('destination', 'driver__username', 'autocar__name')
    list_filter = ('departure_time', 'arrival_time')

# Register the models with the admin site
admin.site.register(Autocar, AutocarAdmin)
admin.site.register(Carte, CarteAdmin)
admin.site.register(Mission, MissionAdmin)

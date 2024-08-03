from django.contrib import admin
from .models import User, Chauffeur, Autocar, Carte, Mission

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'is_staff', 'is_agent']

admin.site.register(User, UserAdmin)
admin.site.register(Chauffeur)
admin.site.register(Autocar)
admin.site.register(Carte)
admin.site.register(Mission)
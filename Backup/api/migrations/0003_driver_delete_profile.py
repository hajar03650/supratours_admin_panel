# Generated by Django 5.0.7 on 2024-08-02 23:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_autocar_carte_mission_profile_delete_item'),
    ]

    operations = [
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('license_number', models.CharField(max_length=15, unique=True)),
                ('phone_number', models.CharField(blank=True, max_length=15)),
                ('hire_date', models.DateField()),
            ],
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
    ]

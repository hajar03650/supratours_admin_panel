# Generated by Django 5.0.7 on 2024-08-03 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Counter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chauffeur_count', models.IntegerField(default=0)),
                ('autocar_count', models.IntegerField(default=0)),
                ('carte_count', models.IntegerField(default=0)),
                ('mission_count', models.IntegerField(default=0)),
            ],
        ),
    ]
# Generated by Django 5.0.7 on 2024-08-04 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_counter'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='is_agent',
            new_name='isAgent',
        ),
    ]

# Generated by Django 5.0.3 on 2024-03-26 05:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0005_user"),
    ]

    operations = [
        migrations.DeleteModel(
            name="User",
        ),
    ]

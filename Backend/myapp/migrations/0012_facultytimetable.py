# Generated by Django 4.0.6 on 2024-04-14 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0011_alter_administrationinfo_email_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FacultyTimeTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('day', models.CharField(max_length=10)),
                ('slot_1', models.CharField(blank=True, max_length=5, null=True)),
                ('slot_2', models.CharField(blank=True, max_length=5, null=True)),
                ('slot_3', models.CharField(blank=True, max_length=5, null=True)),
                ('slot_4', models.CharField(blank=True, max_length=5, null=True)),
                ('slot_5', models.CharField(blank=True, max_length=5, null=True)),
                ('slot_6', models.CharField(blank=True, max_length=5, null=True)),
                ('slot_7', models.CharField(blank=True, max_length=5, null=True)),
            ],
        ),
    ]

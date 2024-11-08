# Generated by Django 4.0.6 on 2024-04-13 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0010_message_administrationinfo_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='administrationinfo',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='administrationinfo',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='administrationinfo',
            name='position',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='administrationinfo',
            name='staff_id',
            field=models.CharField(max_length=255),
        ),
    ]

# Generated by Django 4.0.6 on 2022-07-30 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ebook_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='Content',
            field=models.TextField(default='', max_length=5000),
            preserve_default=False,
        ),
    ]

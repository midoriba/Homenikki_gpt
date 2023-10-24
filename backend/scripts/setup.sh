#!/bin/bash
python manage.py makemigrations accounts
python manage.py makemigrations DiaryPost
python manage.py migrate
from django.db import models

class Education(models.Model):
    degree = models.CharField(max_length=150)
    institute = models.CharField(max_length=200)
    duration = models.CharField(max_length=50)

    def __str__(self):
        return self.degree

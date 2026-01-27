from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    technologies = models.CharField(max_length=200)

    def __str__(self):
        return self.title

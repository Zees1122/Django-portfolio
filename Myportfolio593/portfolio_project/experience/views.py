from .models import Experience

def get_experience():
    return Experience.objects.all()

from .models import Bio

def get_bio():
    return Bio.objects.first()

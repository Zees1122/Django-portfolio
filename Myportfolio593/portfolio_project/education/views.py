from .models import Education

def get_education():
    return Education.objects.all()

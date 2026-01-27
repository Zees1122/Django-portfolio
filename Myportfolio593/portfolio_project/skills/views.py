from .models import Skill

def get_skills():
    return Skill.objects.all()

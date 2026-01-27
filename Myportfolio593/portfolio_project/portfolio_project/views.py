from django.shortcuts import render
from bio.views import get_bio
from education.views import get_education
from skills.views import get_skills
from projects.views import get_projects

def home(request):
    context = {
        'bio': get_bio(),
        'education_list': get_education(),
        'skills': get_skills(),
        'projects': get_projects(),
    }
    return render(request, 'index.html', context)

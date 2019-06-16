from django.shortcuts import render

def machines_list(request):
    return render(request, 'machines/machines_list.html', {})

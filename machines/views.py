from django.shortcuts import render
from django.utils import timezone
from .models import Machine

def machines_list(request):
	machines = Machine.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
	return render(request, 'machines/machines_list.html', {'machines': machines})

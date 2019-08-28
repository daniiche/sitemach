from django.contrib import admin
from .models import Machine

admin.site.register(Machine)


class MachinesAdmin(admin.ModelAdmin):
        list_display = ['machineId', 'created_at']

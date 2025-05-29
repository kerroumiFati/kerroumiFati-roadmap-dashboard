
from django.contrib import admin
from .models import Milestone

@admin.register(Milestone)
class MilestoneAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'status', 'date')
    list_filter = ('status',)                            
    search_fields = ('title', 'description')             
    ordering = ('order',)                                
    list_editable = ('status', 'date')
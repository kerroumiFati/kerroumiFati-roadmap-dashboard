from django.db import models



class Milestone(models.Model):
    STATUS_CHOICES = (
        ('done', 'Done'),
        ('current', 'Current'),
        ('upcoming', 'Upcoming'),
        ('tba', 'TBA'),
    )

    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.CharField(max_length=100, blank=True)  # Can be "TBA"
    order = models.IntegerField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    def __str__(self):
        return self.title

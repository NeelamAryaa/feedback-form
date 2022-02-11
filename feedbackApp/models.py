from django.db import models

# Create your models here.
class feedback(models.Model):
    salutation = models.CharField(max_length=5)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30, null=True)
    comment = models.TextField(max_length=1000)

    def __str__(self):
        return self.salutation+self.first_name+self.last_name+self.comment
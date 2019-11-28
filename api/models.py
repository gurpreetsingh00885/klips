from django.db import models

# Create your models here.
class Client:
	name = models.CharField(max_length=3000)
	board_id = models.IntegerField()

class Server:
	name = models.CharField(max_length=3000)
	board_id = models.IntegerField()

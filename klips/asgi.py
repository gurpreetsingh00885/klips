"""
ASGI entrypoint. Configures Django and then runs the application
defined in the ASGI_APPLICATION setting.
"""

import os
import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "klips.settings")
os.environ.setdefault("DJANGO_CONFIGURATION", "Development")

from configurations import importer
importer.install()

django.setup()
application = get_default_application()
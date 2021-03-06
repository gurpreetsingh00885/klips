from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
	path('id/issue/', views.get_id),
    path('', views.home),
    path('', include(router.urls)),
]

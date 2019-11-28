from channels.routing import ProtocolTypeRouter, URLRouter
from django.conf.urls import url
from channels.auth import AuthMiddlewareStack

from . import consumers

websocket_urlpatterns = [
    url(r'^ws/board/(?P<board_id>[^/]+)/$', consumers.BoardConsumer),
]

application = ProtocolTypeRouter({
	'websocket': AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    ),
})

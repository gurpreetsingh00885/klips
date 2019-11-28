from channels.generic.websocket import AsyncWebsocketConsumer
from api.models import Client, Server
import json


class BoardConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.board_id = self.scope['url_route']['kwargs']['board_id']
        self.board_group_name = 'board_%s' % self.board_id
        print(self.channel_name)
        await self.channel_layer.group_add(
            self.board_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        print(self.channel_name)
        await self.channel_layer.group_discard(
            self.board_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        await self.channel_layer.group_send(
            self.board_group_name,
            {
                'type': 'board_clip',
                'message': message
            }
        )

    async def board_clip(self, event):
        message = event['message']

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message
        }))

# class ChatConsumer(WebsocketConsumer):

#     def connect(self):
#         self.board_id = self.scope['url_route']['kwargs']['board_id']
#         Client.objects.create(name=self.channel_name, id=self.board_id)
#         Server.objects.create(name=self.channel_name, id=self.board_id)


#     def disconnect(self, close_code):
#         # Note that in some rare cases (power loss, etc) disconnect may fail
#         # to run; this naive example would leave zombie channel names around.
#         Clients.objects.filter(channel_name=self.channel_name).delete()

#     def chat_message(self, event):
#         # Handles the "chat.message" event when it's sent to us.
#         self.send(text_data=event["text"])
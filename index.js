import { ClientBuilder } from 'messaginghub-client';
import WebSocketTransport from 'lime-transport-websocket';

const identifier = ''; //Your identifier key
const accessKey = ''; //Your access key

let client = new ClientBuilder()
    .withIdentifier(identifier)
    .withAccessKey(accessKey)
    .withTransportFactory(() => new WebSocketTransport())
    .build();


// Register a receiver for messages of 'text/plain' type
client.addMessageReceiver('text/plain', message => {
  // TODO: Proccess the received message
  console.log(message);
});

// Register a receiver to any notification
client.addNotificationReceiver(true, notification => {
  // TODO: Proccess the received notification
  console.log(notification);
});


try {
    (async () => {
        let session = await client.connect();
        console.log(session);
    })();
}
catch(err) {
    throw err;
}
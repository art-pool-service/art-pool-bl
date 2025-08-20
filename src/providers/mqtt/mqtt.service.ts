import mqtt, { MqttClient } from 'mqtt';

export class MqttService {
  private _client: MqttClient;
  private _callbacks: Record<string, Function> = {};

  constructor(brokerUrl: string) {
    this._client = mqtt.connect(brokerUrl, { username: 'norduck', password: '586479' });

    this._client.on('connect', () => console.log('MQTT connected'));

    this._client.on('message', this._onMessageHandler);

    this._client.on('error', (err) => {
      console.error('MQTT error:', err);
    });
  }

  subscribe(topic: string, callback: Function) {
    this._client.subscribe(topic, (err) => {
      if (err) {
        console.error(`Failed to subscribe to topic ${topic}:`, err);
      } else {
        console.log(`Subscribed to topic: ${topic}`);
        this._addCallback(topic, callback);
      }
    });
  }

  publish(topic: string, message: string | Buffer) {
    this._client.publish(topic, message, (err) => {
      if (err) {
        console.error(`Failed to publish to ${topic}:`, err);
      } else {
        console.log(`Published to ${topic}: ${message}`);
      }
    });
  }


  private _onMessageHandler = (topic: string, message: Buffer<ArrayBufferLike>) => {
    const callback = this._callbacks[topic];

    if (callback) {
      callback(message)
    }
  }

  private _addCallback = (topic: string, callback: Function) => {
    this._callbacks[topic] = callback;
  }
}
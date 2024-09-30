// consumer.js

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'], // Change if your Kafka broker is running on a different port
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
    // Consuming messages
    await consumer.connect();
    console.log('Consumer connected');

    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Received message: ${message.value.toString()}`);
        },
    });
};

run().catch(console.error);

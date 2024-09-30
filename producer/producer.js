// producer.js

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka1:29092'], // Change if your Kafka broker is running on a different port
});

const producer = kafka.producer();

const run = async () => {
    // Producing a message
    await producer.connect();
    console.log('Producer connected');
    
    setInterval(async () => {
        try {
            const result = await producer.send({
                topic: 'test-topic',
                messages: [
                    { value: `Hello Kafka! ${new Date().toISOString()}` },
                ],
            });
            console.log('Message sent:', result);
        } catch (err) {
            console.error('Error sending message:', err);
        }
    }, 1000); // Send a message every second
};

run().catch(console.error);
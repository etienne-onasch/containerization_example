var db = db.getSiblingDB('messages');

db.createCollection('greetings');

db.greetings.insertOne({
  message: 'hello from server! (this message was inserted from mongo-init.js)'
});
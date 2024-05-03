var db = db.getSiblingDB('admin');

db.createCollection('greetings');

db.greetings.insertOne({
  message: 'hello from server! (this message was inserted from mongo-init.js)'
});
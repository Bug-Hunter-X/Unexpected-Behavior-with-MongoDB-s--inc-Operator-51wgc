```javascript
db.collection('myCollection').findOne({"_id":ObjectId("someId")}, (err, doc) => {
if (err) {
  console.error("Error finding document:", err);
  return;
}

if (doc && typeof doc.field === 'number') {
  db.collection('myCollection').updateOne({"_id":ObjectId("someId")}, {$inc: {field: value}});
} else {
  db.collection('myCollection').updateOne({"_id":ObjectId("someId")}, {$set: {field: value}}, {upsert:true});
}
});
```
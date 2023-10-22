const express = require('express');

const app = express();

const data = [
    {"name": "a", "size": "big", "rooms": 3, "price": 100000 }, 
    {"name": "b", "size": "small", "rooms": 2, "price": 200000 },
    {"name": "c", "size": "big", "rooms": 3, "price": 10000000 },
    {"name": "d", "size": "big", "rooms": 3, "price": 1000000 } 
]

app.get('/api/data', (req, res) => {
    res.json(data.sort(function (itemA, itemB) {
        return itemA.price < itemB.price;
      })
      .filter((element, index) => index < req.query.size));
});

app.listen(3100, () => {
console.log('Server is running on port 3100');
});

var menus = require('./data/restaurantsMenus.json');
var users = require('./data/users.json');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/menus', function(req, res) {
  
  let getRestaurantMenu = function(i){
    return{
      "id" : i,
      "name" : "Mi restaurante" + i,
      "phone" : "+34 000 000 00" + i,
      "menu" : [
          {
              "key" : "primeros",
              "items" : ["Plato 1" + i, "Plato 2", "Plato 3"] 
          },
          {
              "key" : "segundos",
              "items" : ["Plato 1b." + i, "Plato 2b", "Plato 3b"] 
          }
      ],
      "onlineEnabled" : i% 2 == 0
  }
  };

  let menus =[];
  for (let index = 0; index < 20; index++) {
    menus.push(getRestaurantMenu(index));
  }

  setTimeout(function(){
    res.send(JSON.stringify(menus));
  }, 3000);
});

app.post('/login', function(req, res) {
    var userInfo = users.filter(user => user.login == req.body.login && user.password == req.body.password);
    if(userInfo.length > 0){
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.end(JSON.stringify(userInfo[0]));

        return;
    }
       
    res.status(403);
    res.end(null);
});

var port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
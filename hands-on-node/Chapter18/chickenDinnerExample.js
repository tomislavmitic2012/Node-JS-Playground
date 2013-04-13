var Dummy = require('./chickenDinner.js'),
    tommy = new Dummy(),
    fried_chix = 'Yummy!',
    dinner = tommy.cooking(fried_chix);

dinner.cook(fried_chix,function(data){
  console.log('from cook cb: ' + data);
  dinner.on('cooked', function(data) {
    console.log('in here ' + data);
  });
});

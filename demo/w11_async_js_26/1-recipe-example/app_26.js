function boilWater(time, callback){
    console.log('boiling..');
    setTimeout(function(){
        console.log('done');
        callback();  
    }, time);
}

console.log('chop carrot');
boilWater(2000, function(){
 console.log('add carrot');
boilWater(1000, function(){
console.log('chop onion');
boilWater(1000, function(){
console.log('add onion');
boilWater(1000, function(){
console.log('all done');
            });
        });
    });
});

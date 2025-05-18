function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function cookRecipe() {
  console.log('Chop carrot');

  console.log('Boiling water…');
  await delay(2000);
  console.log('Add carrot');
  console.log('Still boiling…');
  await delay(1000);
  console.log('Carrot done');

  console.log('Chop onion');
  console.log('Still boiling…');
  await delay(1000);
  console.log('Onion done');

  console.log('Add onion');
  console.log('Still boiling…');
  await delay(1000);
  console.log('All done!');
}

cookRecipe().catch(err => console.error(err));


//function boilWater(time, callback){
//console.log('boiling..');
//setTimeout(function(){
//console.log('done');
  //      callback();  
    //}, time);
//}

//console.log('chop carrot');
//boilWater(2000, function(){
  //  console.log('add carrot');
    //boilWater(1000, function(){
      //  console.log('chop onion');
        //boilWater(1000, function(){
          //  console.log('add onion');
            //boilWater(1000, function(){
              //  console.log('all done');
            //});
  //      });
    //});
//});


const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const heading4 = document.querySelector('.four');

const btn = document.querySelector('.btn');

const addColor = (time, element, color) =>{
  return new Promise((resolve, reject)=>{
    if(element){
    setTimeout(()=>{
      element.style.color = color;
      resolve();
    },time);
    } else{
      reject(new Error(`There is no such element ${element}`));
    }
  });
}

const displayColor = async () =>{
  try{
  await addColor(1000, heading1, 'red');
  await addColor(2000, heading2, 'green');
  await addColor(1000, heading3, 'blue');
  await addColor(500, heading4,'purple');
} catch(error){
  console.log(error);
}

};


btn.addEventListener('click', async () =>{
  const result = await displayColor();
  console.log('result', result);
});

//btn.addEventListener('click', ()=>{
  //addColor(1000, heading1, 'red')
//  .then(() =>{
  //  return addColor(2000, heading2, 'green');
 // })
  //.then(() =>{
    //return addColor(1000, heading3, 'blue');
  //})
  //.then(() =>{
    //return addColor(500, heading4, 'purple');
  //})
  //.catch((error)=>console.log(error));
  //});


const btn = document.querySelector('.btn');
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=cheese';

btn.addEventListener('click', () => {
 getDataAsyncAwait(url);
});


const getDataAsyncAwait = async (url) =>{
  try{
const response = await fetch(url);
const data = await response.json();
console.log('data meals', data.meals);
      displayItems(data.meals);
  }catch(err){
    console.log(err);
  }
};
  const displayItems = (data) =>{
    const displayData = data
    .map((item) => {
      return`
      <p>${item.strMeal}</p>
      `;
    })
  .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};


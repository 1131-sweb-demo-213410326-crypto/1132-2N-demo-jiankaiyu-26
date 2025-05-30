const btn = document.querySelector('.btn');
const url = './api/person.json';

btn.addEventListener('click', () => {
 getDataByFetchApI2(url);
});


const getDataByFetchApI = () => {
  fetch(url)
  .then((response)=>{
    console.log('response',response);
   // console.log('response.json()',response.json());
    return response.json();
})
.then((data)=>{
console.log('data',data);
displayItems(data);
//return data;
})
  .catch((err) => console.log(err));
  };


  const getDataByFetchApI2 = (url) =>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log('data',data);
      displayItems(data);
    })
    .catch((err) => console.log(err));
  };

  const displayItems = (persons) =>{
    const displayData = persons
    .map((person) =>{
      return`
      <p>${person.name}</p>
      `;
    })
  .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

const getDataByXHR = () => {
  const xhr = new XMLHttpRequest();
  console.log('xhr0', xhr);
  xhr.open('GET', url);
  console.log('xhr', xhr);

  xhr.onreadystatechange = () => {
    console.log('xhr', xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log('data',data);
      //console.log('data in string',JSON.stringify(data));
     const displayData = data.map((item) => {
      return`
      <p>${item.name}</p>`;
     })
     .join('');
      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text:   xhr.statusText,
      });
    }
  };

  xhr.send();
};

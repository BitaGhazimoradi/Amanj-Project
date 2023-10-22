

async function fetchPropertyData() {
    const url = 'http://localhost:3100/api/data?size=2';
  
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  fetchPropertyData();
  // Call the async function
  
//   async function createCard(){
//     const homeData = await fetchPropertyData();
//     const listCardContainer = document.getElementById('listCardContainer');
//     homeData.forEach(dataElement => {
//         const listCard=document.createElement('li');
//         const imageHome=document.createElement('img');
//         const priceHome=document.createElement('h3');
//         const name=document.createElement('h4');
//         const discription=document.createElement('h6');
//         imageHome.src=homeData.imageSrc;
//         listCardContainer.appendChild(listCard);
//         listCard.appendChild(imageHome);
//     });

//   }
//   createCard();
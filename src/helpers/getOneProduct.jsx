const oneProduct = 
    { id: 1, foto: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/13207_800.jpg', categoria: 'Procesadores', name: "Micro i9", price: 80000 }


const getOneProduct = new Promise((resolve)=>
{
    setTimeout(()=>{
        resolve(oneProduct);
    },2000);
});

export default getOneProduct;
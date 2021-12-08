const productos = [
  { id: 1, foto: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/13207_800.jpg', categoria: 'Procesadores', name: "Micro i9", price: 80000 },
  { id: 2, foto: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-corsair-32gb-2x16gb-ddr4-3200--vengeance-rgb-pro-0.jpg', categoria: 'Memorias', name: "Crucial 32GB DDR4 3000Mhz", price: 20000 },
  { id: 3, foto: 'https://www.deffo.com.ar/wp-content/uploads/2020/07/WDS100T2B0C-4.jpg', categoria: 'Discos Sólidos', name: "WD M2 1TB", price: 15000 },
  { id: 4, foto: 'https://www.asus.com/media/global/gallery/wzlsdp20wfsur5rr_setting_xxx_0_90_end_800.png', categoria: 'Motherboards', name: "Asus TUF Z490 Wifi", price: 25000 },
]



export const getFetch = new Promise((resolve) =>{
    // acciones que pueden ser asincrónicas o no setTime
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
    
}) // Instanciar el objeto
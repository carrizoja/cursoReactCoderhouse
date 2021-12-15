const productos = [
  { id: 1, foto: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/13207_800.jpg', categoria: 'procesadores', name: "Micro i9", price: 80000, stock: 20, descripcion: "hola" },
  { id: 2, foto: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/memoria-corsair-32gb-2x16gb-ddr4-3200--vengeance-rgb-pro-0.jpg', categoria: 'memorias', name: "Crucial 32GB DDR4 3000Mhz", price: 20000, stock: 20, descripcion: "hola" },
  { id: 3, foto: 'https://www.deffo.com.ar/wp-content/uploads/2020/07/WDS100T2B0C-4.jpg', categoria: 'discos', name: "WD M2 1TB", price: 15000 },
  { id: 4, foto: 'https://www.asus.com/media/global/gallery/wzlsdp20wfsur5rr_setting_xxx_0_90_end_800.png', categoria: 'motherboards', name: "Asus TUF Z490 Wifi", price: 25000, stock: 20, descripcion: "hola" },
  { id: 5, foto: 'https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-5037984.png', categoria: 'placas', name: "Gigabyte Geforce 1050Ti", price: 60000, stock: 20, descripcion: "hola" },
  { id: 6, foto: 'https://images.fravega.com/f500/634670ec36999b1131c2fc49e9c53e58.jpg', categoria: 'discos', name: "Disco Rígido Western Digital Blue 1TB", price: 5200, stock: 20, descripcion: "hola" },
  { id: 7, foto: 'https://http2.mlstatic.com/D_NQ_NP_990419-MLA30203508080_052019-O.jpg', categoria: 'gabinetes', name: "Gabinete Sentey Z20", price: 30000 , stock: 20, descripcion: "hola"},
  { id: 8, foto: 'https://http2.mlstatic.com/D_NQ_NP_800160-MLU46342965628_062021-O.jpg', categoria: 'fuentes', name: "Fuente thermaltake Smart 600W", price: 12000, stock: 20, descripcion: "hola"}
]



export const getFetch = new Promise((resolve) =>{
    // acciones que pueden ser asincrónicas o no setTime
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
    
}) // Instanciar el objeto
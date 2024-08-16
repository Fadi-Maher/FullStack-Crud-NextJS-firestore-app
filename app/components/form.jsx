import { useState } from "react";

const ProductsForm=(fFlag)=>{
    let [id,setId]=useState('');
    let [title,setTitle]=useState('');
    let [price,setPrice]=useState('');
    let [quantity,setQuantity]=useState('');
    async  function  addProduct(){
        // if(id=''){
            let res=await fetch('/api/products/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pTitle:title,
                    pPrice: price,
                    pQuantity: quantity,
                }),
            });
            let data=await res.json();
            console.log(data);
      
     }
     async function  updateProduct(){
                  setId(prod.id);
                  setTitle(prod.title);
                  setPrice(prod.title);
                  setQuantity(prod.price);
        
         
      }

    
    return(<div className="ml-2 ">
  <div className="mb-5 mt-2 ">
    <label htmlFor="id" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
    value={id}>id</label>
    <input type="text"  readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  <div className="mb-2 mt-2">
    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
    <input type="text"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
    onChange={(e)=>setTitle(e.target.value)} value={title}/>
  </div>
  <div className="mb-2">
    <label htmlFor="Price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Price</label>
    <input type="price" onChange={(e)=>setPrice(e.target.value)} value={price}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-2">
    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> quantity</label>
    <input type="quantity" onChange={(e)=>setQuantity(e.target.value)} value={quantity}
     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  onClick={addProduct}>Add</button>
  </div>
    );
}
export default ProductsForm;
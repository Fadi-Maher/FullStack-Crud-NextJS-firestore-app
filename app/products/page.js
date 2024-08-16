'use client'
import { useEffect, useState } from "react";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [id, setId] = useState('');
  let [title, setTitle] = useState('');
  let [price, setPrice] = useState('');
  let [quantity, setQuantity] = useState('');
  let [btnTitle, setBtnTitle] = useState('Add');
  const [isMounted, setIsMounted] = useState(false);

  async function fetchData() {
    let res = await fetch('/api/products');
    let jsonData = await res.json();
    let prod = jsonData['data'];
    setProducts(prod);
  }

  useEffect(() => {
    setIsMounted(true);
    fetchData();
  }, []);

  if (!isMounted) {
    return null;
  }

  async function deleteProduct(pId) {
    let res = await fetch('api/products/deleteProduct', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: pId
      }),
    });
    let data = await res.json();
    console.log(data);
    fetchData();
  }

  function updateProducts(_id, _title, _price, _quantity) {
    setId(_id);
    setTitle(_title);
    setPrice(_price);
    setQuantity(_quantity);
    setBtnTitle('Update');
  }

  async function addProduct() {
    if (id == '') {
      let res = await fetch('/api/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pTitle: title,
          pPrice: price,
          pQuantity: quantity,
        }),
      });
      let data = await res.json();
      console.log(data);
      resetData();
      fetchData();
    } else {
      let res = await fetch('/api/products/updateProduct', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pId: id,
          pTitle: title,
          pPrice: price,
          pQuantity: quantity,
        }),
      });
      let data = await res.json();
      console.log(data);
      resetData();
      fetchData();
    }
  }

  function resetData() {
    setId('');
    setTitle('');
    setPrice('');
    setQuantity('');
    setBtnTitle('Add');
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 w-auto mx-w-md flex">
     <div className="border w-fit  p-5 shadow h-fit">
      <div className="mb-5 mt-2">
        <label htmlFor="id" className="mb-2 text-sm font-medium text-gray-300">Id</label>
        <input type="text" readOnly className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg block w-96 p-2.5" value={id} />
      </div>
      <div className="mb-2 mt-2">
        <label htmlFor="title" className="block  mb-2 text-lg font-medium text-gray-300">Title</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg block w-96 p-2.5" />
      </div>
      <div className="mb-2">
        <label htmlFor="price" className="block mb-2 text-lg font-medium text-gray-300">Price</label>
        <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg block w-96 p-2.5" />
      </div>
      <div className="mb-2">
        <label htmlFor="quantity" className="block mb-2 text-lg font-medium text-gray-300">Quantity</label>
        <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} className="bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg block w-96 p-2.5" />
      </div>
      <button type="button" className="text-white mt-2 bg-blue-700 m-auto hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5" onClick={addProduct}>{btnTitle}</button>
</div>

      <div className=" w-full   shadow-md sm:rounded-lg mt-4">
        <h1 className="text-4xl font-bold text-center p-4">Products</h1>
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">#id</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3" colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, i) => (
              <tr key={i} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600 ">
                <th scope="row" className="px-6 py-4 font-medium text-white">{prod.id}</th>
                <td className="px-6 py-4">{prod.title}</td>
                <td className="px-6 py-4">{prod.price}</td>
                <td className="px-6 py-4">{prod.quantity}</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5" onClick={() => updateProducts(prod.id, prod.title, prod.price, prod.quantity)}>Update</button>
                  <button className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 ml-2" onClick={() => deleteProduct(prod.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;

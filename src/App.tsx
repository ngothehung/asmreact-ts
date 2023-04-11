import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import { IProduct } from './types/product'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import Signin from './pages/signin'
import Signup from './pages/signup'



function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item._id !== id)))
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  const onHandleUpdate = (product: IProduct) => {
    
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
 
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<WebsiteLayout/>}>
          <Route path='products' element={<ProductPage  onRemove={onHandleRemove}  products={products}/>} />
          <Route path='signin' element={<Signin/>} />
          <Route path='signup' element={<Signup/>} />
          <Route path='detail' element={<ProductDetailPage/>} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
            <Route path='products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path='products/:id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

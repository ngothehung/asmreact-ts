import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../api/auth';
import '../main.css';
import { useNavigate } from 'react-router-dom';
import { IProduct } from "../types/product"
interface Props { }



const ProductDetailPages = (props) => {


    return (
        <div className=" mx-auto max-w-4xl">
            <div className=" grid grid-cols-2 gap-16 pt-10 pb-10">
                <div >
                    <img src="https://cdn.shopify.com/s/files/1/0448/3081/8454/products/09LayeredGrey-1.jpg?v=1675758235&width=1206" alt="" />
                </div>
                <div>
                    <div>
                        <div className='pb-5'>danh muc</div>
                        <div className='pb-8'>giá</div>
                        <p className='pb-8 text-[12px]'>Càng kính chất liệu B-titanium cùng cải tiến mới giúp giảm 15% trọng lượng so với bộ sưu tập tiền nhiệm, tăng độ thoải mái khi đeo.</p>
                    </div>
                    <div className='pt-10'>
                        <div className='w-full flex  '>
                            <button className='px-10  from-current hover:bg-[#c5c5c5] bg-[#f3f3f3] transition  py-3 text-center w-full justify-center'>Thêm vào giỏ hàng</button>
                        </div>
                        <div className='w-full pt-5 flex  '>
                            <button className='px-10  from-current hover:bg-[#c5c5c5] bg-[#f3f3f3] transition  py-3 text-center w-full justify-center'>Thêm vào giỏ hàng</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
    
};

export default ProductDetailPages;



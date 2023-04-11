import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../types/product';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
    onAdd: (product: IProduct) => void
}

// const AddProductPage = (props) => { // nhận props từ App.tsx 
//     // props - onAdd
//     const navigate = useNavigate() // khởi tạo navigate để điều hướng
//     const [inputValue, setInputValue] = useState({}) // khởi tạo state để lưu giá trị input
//     const onHandleChange = (e) => { // hàm xử lý sự kiện khi input thay đổi
//         const name = e.target.name;
//         const value = e.target.value;
//         setInputValue({ ...inputValue, [name]: value });
//         // n -> n
//         // e -> e

//         // setInputValue({ name: e.target.value }); // set giá trị cho state

//     }
//     const onHandleSubmit = (e) => { // hàm xử lý sự kiện khi submit form
//         e.preventDefault()
//         // console.log(inputValue);

//         props.onAdd(inputValue); // gọi hàm onAdd từ props truyền vào
//         navigate('/admin/products') // điều hướng đến trang /admin/products
//     }
//     return (
//         <div>
//             <form action="" onSubmit={onHandleSubmit}>
//                 <input type="text" placeholder='Product Name' onChange={onHandleChange} name='name' />
//                 <input type="number" onChange={onHandleChange} name='price' />
//                 <button type="submit">Add New Product</button>
//             </form>
//         </div>
//     )
// }

interface IProps {
    onAdd: (product: IProduct) => void
}
const AddProductPage = (props: IProps) => { // nhận props từ App.tsx 
    /*
        {

        }
    */
    const navigate = useNavigate() // khởi tạo navigate để điều hướng
    // const { register, handleSubmit } = useForm()
    // const onHandleSubmit = (data) => {
    //     props.onAdd(data);
    //     navigate('/admin/products')
    // }


    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" placeholder='Product Name' {...register('name')} />
                <input type="number" {...register('price')} />
                <button type="submit">Add New Product</button>
            </form> */}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 900, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image' }]}
                    
                >
                    
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product categoryId"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your categoryId' }]}
                >
                    <Input />
                </Form.Item>
                

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" style={{ backgroundColor: 'blue' }} htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage
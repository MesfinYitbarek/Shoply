import { Reviews, Star } from '@mui/icons-material'
import React from 'react'
import img from "../../assets/original-84270be086ac1611476289257ab639d9.png"

const product = [
    {   
        id: "1",
        img: img,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "2",
        img: img,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "3",
        img: img,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "3",
        img: img,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "4",
        img: img,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
    {   
        id: "5",
        img: img,
        title:"Best Nike shoe for men",
        review: "4",
        price: "234",
    },
]
const Products = () => {
  return (
    <div className=' px-28 py-14'>
      <div>
        <div className=' grid grid-cols-3 gap-10'>
            {
            product.map((product)=> (
                <div className=' border p-7 rounded-md'>
                    <img src={product.img} alt="image" />
                    <div className=' flex flex-col gap-2 pt-4'>
                        <h1 className=' font-bold text-[18px]'>{product.title}</h1>
                        <h1><Star className=' text-yellow-500'/>{product.review}</h1>
                        <h1 className=' font-bold'>&#36;{product.price }</h1>
                    </div>
                </div>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default Products

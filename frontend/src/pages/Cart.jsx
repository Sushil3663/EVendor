import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component/CartItem'

const Cart = () => {
    const cartItem = useSelector((state) => state.product.cartItem)
    console.log(cartItem)
    const totalPrice = cartItem.reduce((acc, curr) => acc + parseInt(curr.total),0);
    const totalQty = cartItem.reduce((acc, curr) => acc + parseInt(curr.qtn),0);
    return (

        <div className='p-2 md:p-4'>
            <h2 className='text-slate-700 text-lg md:text-2xl font-bold'>Your Shoping Cart Item</h2>

            {/* display cart Item Here */}
            <div className="w-1/2">
                <div className="mt-2">
                    {
                        cartItem.map((e) => {
                            return (
                                <CartItem
                                    key={e._id}
                                    id = {e._id}
                                    image={e.image}
                                    name={e.name}
                                    price={e.price}
                                    category={e.category} 
                                    qtn ={e.qtn}
                                    total = {e.total}

                                />
                            )
                        })
                    }
                </div>

            </div>

            {/* Total Amount Display */}
            <div className="w-full max-w-md  ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">Rs. {totalPrice}</span></p>
            </div>
            <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
              Payment
            </button>
          </div>

        </div>
    )
}

export default Cart
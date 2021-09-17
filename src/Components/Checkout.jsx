import React from 'react'

 const Checkout = () => {
    return (
        <div>
            <div className='check-out'>
                <div className='btn'>
                    <div className='voucher' >
               <p>Voucher Code</p></div>
              <button><a href="">Redeem</a></button> 
                </div>
                <div className='total'>
                <div className='total-1' >
                    <p>Subtotal</p>
                    <p>Shiping fee</p>
                    <p>Coupon</p>
                </div>
                <div className='total-2'>
                    <p>$998</p>
                    <p>$20</p>
                    <p>No</p>
                </div>
                </div>
                </div>
                <div className='bill'>
                <p>TOTAL</p>
                <p className='cash'>$118</p>
                </div>
                <button className='check-btn'><a href="">Check Out</a></button>
        </div>
    )
}
 export default Checkout
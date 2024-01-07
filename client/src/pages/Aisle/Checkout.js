import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const my_cart = JSON.parse(localStorage.getItem('my_cart'));
  var totalPrice = 0;

  const addToTotal = (price) => {
    try {
      totalPrice = totalPrice + price
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div class='layout'>
      <main>
        <div class='general-body'>
        <div class='flex flex-row'>
          <div class='w-1/2 vertical-center'>
            <div class='area-check main-text'>
              쇼핑이 끝나셨나요? <br/><br/>
              <img src={'/media/images/Aisle/checkout_aisle.png'} alt="결제섹션" class='checkout-image'/><br/><br/>
              이제 쇼핑하신 상품들을 결제하실 수 있습니다.
            </div>
          </div>
          <div class='w-1/2'>
            <div class='flex flex-row'>
              <div class='w-2/3'/>
              <div class='w-1/3'><img src={'/media/images/Maps/checkout_map.jpg'} className='aisle-map-image' alt='checkout map'/></div>
            </div>
            <div class='area-check'>
              <div class='flex flex-row items-center'>
                <img src={'/media/images/cart.svg'} className='checkout-button' alt='cart'/>
                <div class='accent-black'>&nbsp;&nbsp;결제상품</div>
              </div>

              {my_cart.map((item) => (
                <>
                  <div><br/></div>
                  <div class='flex flex-row items-center '>
                    <div class='w-1/5'>
                      <img
                        src={`https://research-backend-3mwd.onrender.com/api/item/productphoto/${item._id}`} alt={`${item.name}`}/>
                    </div>
                    <div class='w-4/5'>
                      <div class='mini-text'>&nbsp;&nbsp;{item.name}<br/>&nbsp;&nbsp;{item.price}원</div>
                    </div>
                    {addToTotal(item.price)}
                  </div>
                </>
              ))}
              <div class='large-font'><br/>총 결제가격: {totalPrice}원</div>
            </div>
          </div>
        </div>

        <div className='footer'>
          <Link to='../snack'><img src='/media/images/back.svg' class='icon-button' alt='back'/></ Link>
          <Link to='../../thankyou/survey' onClick={() => {localStorage.setItem('total_price', totalPrice)}}><img src='/media/images/forward.svg' class='icon-button' alt='forward'/></Link>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Checkout
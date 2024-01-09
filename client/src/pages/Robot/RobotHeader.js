import React from 'react'

const Header = () => {
    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')

    const item1_bool = localStorage.getItem('item1')
    const item2_bool = localStorage.getItem('item2')

    const my_cart = localStorage.getItem('my_cart')
    const help_location = localStorage.getItem('help_location')

    return (
        <div class='detailed-header robot-header flex flex-row justify-between'>
            <div>
                <div class='shopping-header'>
                    장보기 목록: <br />
                </div>
                <div>
                    {item1} 1 <br /> {item2} 1 <br />
                </div>
                <div class='header-text'>
                <br/>각 제품의 이미지를 클릭하시면 제품에 대한 자세한 정보를 확인하실 수 있습니다. 제품을 구매하시려면 해당 이미지 아래에 위치한 검은색 쇼핑카트 아이콘을 클릭하세요. 장바구니에 담긴 상품들은 화면 우측 하단에 있는 쇼핑카트 아이콘을 클릭하여 언제든지 확인하실 수 있습니다. <br/><br/>
                </div>
            </div>

            <div class='columns-2'>
                <img src={`/media/images/Aisle/${help_location}_aisle.jpg`} class='detailed-header-image' alt='condiment aisle'/>
                <img src={`/media/images/Maps/${help_location}_map.jpg`} class='detailed-header-image' alt='condiment map' 
                    onClick={() => {
                    localStorage.setItem('my_cart', JSON.stringify(my_cart))
                    if(item1_bool > 0 && item2_bool > 0) {window.location.replace('../checkout')}
                }}/>
            </div>
        </div>
    )
}

export default Header;
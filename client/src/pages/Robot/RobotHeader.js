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
                {localStorage.getItem('experiment_type') !== 'treatment3' &&
                <>
                <div class='shopping-header'>
                    장보기 목록: <br />
                </div>
                <div>
                    {item1} 1 <br /> {item2} 1 <br />
                </div>
                <div>
                <br/>이미지를 클릭하시면 보다 자세한 정보를 확인하실 수 있습니다. <br/>제품 구매시 "해당 상품 이미지" 우측 하단에 위치한 쇼핑카트 아이콘을 클릭하세요.<br/> 카트에 담긴 제품들은 화면 아래에 있는 큰 쇼핑카트 아이콘을 클릭하면 확인하실 수 있습니다. <br/><br/>
                </div>
                </>}
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
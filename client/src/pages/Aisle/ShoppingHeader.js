import React from 'react'

const Shopping = () => {
    const item1 = localStorage.getItem('item1')
    const item2 = localStorage.getItem('item2')
    return (
        <>
            <div class='shopping-header'>
                장보기 목록: <br />
            </div>
            <div>
                {item1} 1 <br /> {item2} 1 <br />
            </div>
            <div class='header-text'>
            <br/>각 제품의 이미지를 클릭하시면 제품에 대한 자세한 정보를 확인하실 수 있습니다. 제품을 구매하시려면 해당 이미지 아래에 위치한 검은색 쇼핑카트 아이콘을 클릭하세요. 장바구니에 담긴 상품들은 화면 우측 하단에 있는 쇼핑카트 아이콘을 클릭하여 언제든지 확인하실 수 있습니다. <br/><br/>
            </div>
        </>
    )
}

export default Shopping;
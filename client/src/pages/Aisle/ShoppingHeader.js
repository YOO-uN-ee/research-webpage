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
            <div>
            <br/>이미지를 클릭하시면 보다 자세한 정보를 확인하실 수 있습니다. <br/>제품 구매시 "해당 상품 이미지" 우측 하단에 위치한 쇼핑카트 아이콘을 클릭하세요.<br/> 카트에 담긴 제품들은 화면 아래에 있는 큰 쇼핑카트 아이콘을 클릭하면 확인하실 수 있습니다. <br/><br/>
            </div>
        </>
    )
}

export default Shopping;
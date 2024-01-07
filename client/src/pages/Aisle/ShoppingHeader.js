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
        </>
    )
}

export default Shopping;
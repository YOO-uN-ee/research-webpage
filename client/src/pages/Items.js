export const category_mapping = {
    'fruit':'과일',
    'vegetable':'야채',
    'condiment':'통조림/조미료',
    'dessert':'디저트',
    'snack':'과자/라면',
}

export const slug_mapping = {
    '콩나물':'beansprout', 
    '두부':'tofu', 
    '배추':'cabbage', 
    '참치캔':'can', 
    '마요네즈':'mayo', 
    '파스타 소스':'pasta', 
    '포도':'grape', 
    '딸기':'strawberry', 
    '망고':'mango', 
    '젤리':'jelly', 
    '케이크':'cake', 
    '타르트':'tart', 
    '과자칩':'chips', 
    '라면':'ramen', 
    '스틱과자':'stick'
}

export const option_recommendation = {
    'grape':['청포도를 구매하고 싶으신가요,', '적포도를 구매하고 싶으신가요?', 'fruit'],
    'mango':['생망고를 구매하고 싶으신가요,', '건망고를 구매하고 싶으신가요?', 'fruit'],
    'strawberry':['생딸기를 구매하고 싶으신가요,', '냉동딸기를 구매하고 싶으신가요?', 'fruit'],
    'beansprout':['무농약 콩나물을 구매하고 싶으신가요,', '유기농 콩나물을 구매하고 싶으신가요?', 'vegetable'],
    'cabbage':['알배기 배추를 구매하고 싶으신가요,', '쌈용 배추를 구매하고 싶으신가요?', 'vegetable'],
    'tofu':['부침/찌개용 두부를 구매하고 싶으신가요,', '순두부를 구매하고 싶으신가요?', 'vegetable'],
    'can':['살코기 참치캔을 구매하고 싶으신가요,', '야채 참치캔을 구매하고 싶으신가요?', 'condiment'],
    'mayo':['기본 마요네즈를 구매하고 싶으신가요,', '하프 칼로리 마요네즈를 구매하고 싶으신가요?', 'condiment'],
    'pasta':['레드 파스타 소스를 구매하고 싶으신가요,', '화이트 파스타 소스를 구매하고 싶으신가요?', 'condiment'],
    'jelly':['봉지형 젤리를 구매하고 싶으신가요,', '컵젤리를 구매하고 싶으신가요?', 'dessert'],
    'cake':['치즈 케이크를 구매하고 싶으신가요,', '티라미수를 구매하고 싶으신가요?', 'dessert'],
    'tart':['에그타르트를 구매하고 싶으신가요,', '과일타르트를 구매하고 싶으신가요?', 'dessert'],
    'chips':['감자칩을 구매하고 싶으신가요,', '고구마칩을 구매하고 싶으신가요?', 'snack'],
    'ramen':['국물라면을 구매하고 싶으신가요,', '짜장라면을 구매하고 싶으신가요?', 'snack'],
    'stick':['빼빼로를 구매하고 싶으신가요,', '감자맛 스틱과자를 구매하고 싶으신가요?', 'snack'],
}

export const utilitarian_list = [
    '콩나물', '두부', '배추', '참치캔', '마요네즈', '파스타 소스'
]

export const hedonic_list = [
    '포도', '딸기', '망고', '젤리', '케이크', '타르트', '과자칩', '라면', '스틱과자'
]

export const item_list_kr = [
    '콩나물', '두부', '배추', '참치캔', '마요네즈', '파스타 소스', '포도', '딸기', '망고', '젤리', '케이크', '타르트', '과자칩', '라면', '스틱과자'
]

export function modify_list(item) {
    const idx = item_list_kr.indexOf(item)
    item_list_kr.splice(idx, 0);
}
export const reducer = (state, action) => {
    if(action.type === "REMOVE_ITEM") {
        return  {
            ...state,
            item: state.item.filter((curEle) => {
                return curEle.id !== action.payload
            }),
        }
    }

    if(action.type === "INCREMENT") {
        const updatedCart = state.item.map((curEle) => {
            if(curEle.id === action.payload) {
                return {...curEle, quantity: curEle.quantity+1}
            }
            return curEle;
        })
        return {...state, item: updatedCart}
    }

    if(action.type === "DECREMENT") {
        const updatedCart = state.item.map((curEle) => {
            if(curEle.id === action.payload) {
                return {...curEle, quantity: curEle.quantity-1}
            }
            return curEle;
        }).filter((curEle) => 
            curEle.quantity !== 0
        )
        return {...state, item: updatedCart}
    }


    if(action.type === "GET_TOTAL") {
        let { totalItems, totalAmount, normalDiscount, typeDiscount, orderTotal } = state.item.reduce(
            (accum, curVal) => {
                let { price, quantity, discount, type } = curVal;

                let updatedTotalAmount = price*quantity;
                accum.totalAmount += updatedTotalAmount;
                
                if(type === "fiction") {
                    accum.typeDiscount += 0.15*price*quantity;
                }
                accum.normalDiscount += discount*quantity; 
                accum.orderTotal += (price*quantity) - ((0.15*price*quantity) - (discount*quantity));
                accum.totalItems += quantity;
                return accum;
            },
            {
                totalItems: 0,
                totalAmount: 0,
                normalDiscount: 0,
                typeDiscount: 0,
                orderTotal: 0,
            }
        );
        return { ...state, totalItems, totalAmount, normalDiscount, typeDiscount, orderTotal};
    }
    return state;
}
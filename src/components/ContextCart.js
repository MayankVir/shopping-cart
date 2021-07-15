import React, {useContext} from "react";
import Items from "./Items"
import {CartContext} from "./Cart"
import {data} from "./data"

const ContextCart = () => {

    const initialState = {
        item:data,
        totalItems: 8,
        totalAmount: 2760,
        normalDiscount: 100,
        typeDiscount: 82.5,
        orderTotal: 2446
    }
    
    const {item, totalItems, totalAmount, normalDiscount, typeDiscount, orderTotal} = useContext(CartContext);
    return (
        <>
        <div className="cart">
            <section className="header">
                {/* ICON */}
                <div className="headerLeft">
                    <i class="fas fa-chevron-left"></i>
                    {/* Heading */}
                    <div className="heading">Order Summary</div>
                </div>
                <div className="reloadBtn" onClick={
                    () => {
                        window.location.reload();
                        localStorage.clear();
                        localStorage.setItem("items", JSON.stringify(initialState))
                    }
                }>
                        Reload Cart
                </div>
            </section>
            <section className="main">
                <div className="items">
                    <hr />
                    <div className="items_header">
                    <div className="total_item_">Items ({totalItems})</div>
                    <div className="qty_price">
                        <div className="qty">Qty</div>
                        <div className="price">Price</div>
                    </div>
                    </div>
                    <hr />
                    <div className="cart-items">
                        {item.map((curItem) => {
                            return <Items key={curItem.id} {...curItem} />;
                        })}
                    </div>
                </div>
                <div className="total_price">
                    <div className="total_heading">
                        Total
                    </div>
                    <div className="total_itemsName">
                        <div className="total_itemsNumber">
                            Items ({totalItems}) :
                        </div>
                        <div className="total_itemsPrice">
                            ${totalAmount}
                        </div>
                    </div>
                    <div className="total_discount">
                        <div className="total_discountHeading">
                            Discount :
                        </div>
                        <div className="total_discountPrice">
                        ${normalDiscount}
                        </div>
                    </div>
                    <div className="total_typeDiscount">
                        <div className="total_typeDiscountHeading">
                            Type Discount :
                        </div>
                        <div className="total_typeDiscountPrice">
                            ${typeDiscount}
                        </div>
                    </div>

                    <div className="orderTotal">
                        <div className="orderTotalHeading">
                            Order Total :
                        </div>
                        <div className="orderTotalPrice">
                            ${orderTotal}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default ContextCart;

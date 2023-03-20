import React from 'react';
class CartItem extends React.Component {
    constructor() {
        super()
        this.state = {
            price: 999,
            title: "Phone",
            qty: 1,
            img: ''

        }
    }
    // Arrow function is used to remove bind function  this.increaseNumber.bind()
    increaseNumber=()=>{
console.log("this",this.state)
    }
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 35 }}>{title}</div>
                    <div style={{ color: "#777" }}>Rs {price}</div>
                    <div style={{ color: "#777" }}>Qty {qty}</div>
                
                <div className='cart-item-actions'>
                    {/* buttons */}
                    <img className='action-icons'
                        alt="increase"
                        src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                        onClick={this.increaseNumber}
                        />
                       
                    <img className='action-icons'
                        alt="decrease"
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png" />
                    <img className='action-icons'
                        alt="delete"
                        src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" />

                </div>
</div>
            </div>
        )
    }
}
const styles = {
    image: {
        height: 140,
        width: 140,
        borderRadius: 4,
        backgroundColor: '#ccc'
    }
}
export default CartItem;
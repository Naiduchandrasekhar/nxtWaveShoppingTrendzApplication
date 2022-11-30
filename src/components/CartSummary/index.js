// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCost = 0
      cartList.forEach(eachOne => {
        totalCost += eachOne.quantity * eachOne.price
      })
      return (
        <div className="cartSummaryContainer">
          <div>
            <h1 className="orderTotal">
              Order Total: <span className="cost">Rs {totalCost}/-</span>
            </h1>
            <p className="itemsTotal">{cartList.length} items in cart</p>
            <button type="button" className="checkOutButton">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

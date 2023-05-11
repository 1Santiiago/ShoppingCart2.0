import './cartButton.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function CartButton() {
  return (
   <button type="button" className="cart__button">
<AiOutlineShoppingCart />
<span className='cart-status'>2</span>
   </button>
  )
}

export default CartButton
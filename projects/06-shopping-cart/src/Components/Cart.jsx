import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <button>
          Quantity: {quantity}
        </button>
        <button onClick={addToCart}>
          +
        </button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul className=''>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

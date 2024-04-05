export default function Header ({cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart}) {

    const isEmpty = () => cart.length === 0
    const cartTotal = () => cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)  

    return (
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="/img/logo.svg" alt="image logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="cart"
                    >
                        <img className="img-fluid" src="/img/cart.png" alt="cart img" />

                        <div id="cart" className="bg-white p-3">
                            {isEmpty() 
                                ? (<p className="text-center">The cart is empty</p>)
                                : (
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map( guitar => (
                                                <tr key={guitar.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="image guitar" />
                                                    </td>
                                                    <td>{guitar.name}</td>
                                                    <td className="fw-bold">
                                                            ${guitar.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => decreaseQuantity(guitar.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {guitar.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => increaseQuantity(guitar.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removeFromCart(guitar.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                        
                                    </tbody>
                                </table>
                                )
                            }
                            
                           

                            <p className="text-end">Total to pay: <span className="fw-bold">${cartTotal()}</span></p>
                            <button 
                                className="btn btn-dark w-100 mt-3 p-2"
                                onClick={() => clearCart()}
                            >
                                Empty Cart
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    )
}
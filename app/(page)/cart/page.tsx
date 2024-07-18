'use client';
import React, {useState} from "react";

interface Phone {
    id: number;
    name: string;
    price: number;
    brand: string;
    color: string;
    quantity: number;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<Phone[]>([
        {id: 1, name: "iPhone 12", price: 999, brand: "Apple", color: "Black", quantity: 1},
        {id: 2, name: "Galaxy S21", price: 899, brand: "Samsung", color: "White", quantity: 1},
    ]);

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleQuantityChange = (index: number, quantity: number) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index] = {...updatedCartItems[index], quantity};
        setCartItems(updatedCartItems);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold">Giỏ hàng của bạn</h2>
            <div className="grid grid-cols-1 gap-4 mt-6">
                {cartItems.map((phone, index) => (
                    <div key={phone.id} className="p-4 bg-white shadow-md rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    className="h-16 w-16 object-cover rounded"
                                    src={`https://via.placeholder.com/150/${phone.color}`}
                                    alt={phone.name}
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold">{phone.name}</h3>
                                    <p className="text-gray-500">{phone.brand} - {phone.color}</p>
                                    <p className="text-gray-500">${phone.price} x {phone.quantity}</p>
                                    <p className="text-gray-500">Tổng: ${phone.price * phone.quantity}</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => handleQuantityChange(index, phone.quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="mx-2">{phone.quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded"
                                    onClick={() => handleQuantityChange(index, phone.quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <h3 className="text-lg font-semibold">Tổng giá trị đơn hàng: ${getTotalPrice()}</h3>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Thanh
                        toán
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;

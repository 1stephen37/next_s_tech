"use client";
import React, {useState} from 'react';

const PaymentInterface: React.FC = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [shippingMethod, setShippingMethod] = useState('standard');
    const [voucher, setVoucher] = useState('');

    const cart = [
        {id: 1, name: 'Product 1', price: 10.99, quantity: 2},
        {id: 2, name: 'Product 2', price: 15.49, quantity: 1},
        {id: 3, name: 'Product 3', price: 7.99, quantity: 3},
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý logic thanh toán ở đây
        console.log('Thông tin thanh toán:', {
            name,
            address,
            phone,
            email,
            shippingMethod,
            voucher,
        });
    };

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Thanh Toán
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Thông tin giao hàng
                        </h2>
                        <form onSubmit={handleSubmit}>
                            {/* Các trường nhập liệu như trước */}
                            {/* ... */}
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="shippingMethod"
                                >
                                    Phương thức giao hàng
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="shippingMethod"
                                    value={shippingMethod}
                                    onChange={(e) => setShippingMethod(e.target.value)}
                                >
                                    <option value="standard">Tiêu chuẩn</option>
                                    <option value="express">Nhanh chóng</option>
                                    <option value="priority">Ưu tiên</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="voucher"
                                >
                                    Mã giảm giá
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="voucher"
                                    type="text"
                                    placeholder="Nhập mã giảm giá"
                                    value={voucher}
                                    onChange={(e) => setVoucher(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Thanh toán
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Giỏ hàng
                        </h2>
                        <div className="divide-y divide-gray-200">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="py-4 flex justify-between items-center"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold">{item.name}</h3>
                                        <p className="text-gray-500">
                                            Giá: {item.price.toFixed(2)} VND
                                        </p>
                                    </div>
                                    <div className="text-gray-500">
                                        Số lượng: {item.quantity}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                            <p className="text-gray-700 font-bold">
                                Tổng cộng:{' '}
                                {cart.reduce(
                                    (total, item) => total + item.price * item.quantity,
                                    0
                                ).toFixed(2)}{' '}
                                VND
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentInterface;

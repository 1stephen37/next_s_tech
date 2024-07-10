import React from 'react';

const CartPage = () => {
    return (
        <section className="container mt-[4rem]">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Giỏ hàng</h2>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <img src="https://via.placeholder.com/100x100" alt="Sản phẩm"
                                 className="w-24 h-24 object-cover rounded-lg"/>
                            <div>
                                <h3 className="text-xl font-bold">Sản phẩm 1</h3>
                                <p className="text-gray-500">12.000.000 VND</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">-
                            </button>
                            <span className="text-lg font-medium">1</span>
                            <button
                                className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">+
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <img src="https://via.placeholder.com/100x100" alt="Sản phẩm"
                                 className="w-24 h-24 object-cover rounded-lg"/>
                            <div>
                                <h3 className="text-xl font-bold">Sản phẩm 2</h3>
                                <p className="text-gray-500">8.000.000 VND</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">-
                            </button>
                            <span className="text-lg font-medium">2</span>
                            <button
                                className="bg-gray-200 hover:bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center">+
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-6 mt-6">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold">Tổng cộng:</p>
                        <p className="text-2xl font-bold text-red-500">20.000.000 VND</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg w-full mt-6">
                        Thanh toán
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CartPage;

import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
            <div
                className="bg-white p-10 rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <h1 className="text-7xl font-bold text-gray-800 text-center mb-8">404</h1>
                <h2 className="text-4xl font-semibold text-gray-700 text-center mb-6">Trang Không Tìm Thấy</h2>
                <p className="text-2xl text-gray-600 text-center mb-10">
                    Xin lỗi! Trang bạn đang truy cập có thể đã bị xóa hoặc tạm thời không khả dụng. Vui lòng kiểm tra
                    URL hoặc quay lại trang chủ.
                </p>
                <div className="flex justify-center">
                    <Link href={'/'}
                          className="bg-blue-500 hover:bg-blue-700 text-2xl text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105">
                        Quay Về Trang Chủ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

import React from 'react';
import Image from 'next/image'

function Reviews() {
    return (
        <section className="mt-[4rem]">
            <div className="">
                <h2 className="heading mb-5">Đánh giá của người dùng</h2>
                <div className="grid grid-cols-3 gap-12">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center space-x-6 mb-6">
                            <div className="w-[5rem] h-[5rem] relative">
                                <Image fill priority={false} src="/images/sections/avatar-user-review-1.jpg"
                                       alt="User Avatar"
                                       className="object-cover rounded-full"/>
                            </div>
                            <span className="text-3xl font-semibold">Shizuka</span>
                        </div>
                        <p className="text-gray-700 text-2xl mb-6">Tôi rất thích website này ! Giao diện sạch sẽ và dễ
                            sử
                            dụng. Tôi đã tìm thấy tất cả thông tin cần thiết mà không mất quá nhiều thời gian.</p>
                        <div className="flex items-center ">
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center space-x-6 mb-6">
                            <div className="w-[5rem] h-[5rem] relative">
                                <Image fill priority={false} src="/images/sections/avatar-user-review-2.jpg"
                                       alt="User Avatar"
                                       className="object-cover rounded-full"/>
                            </div>
                            <span className="text-3xl font-semibold">Doraemon</span>
                        </div>
                        <p className="text-gray-700 text-2xl mb-6">
                            Đây là một trong những website tuyệt vời nhất mà tôi đã sử dụng gần đây, nó có giảm giá nhiều và sản phẩm thật sự rất chất lượng từ các hãng điện thoại nổi tiếng.
                        </p>
                        <div className="flex items-center ">
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center space-x-6 mb-6">
                            <div className="w-[5rem] h-[5rem] relative">
                                <Image fill priority={false} src="/images/sections/avatar-user-review-3.jpg"
                                       alt="User Avatar"
                                       className="object-cover rounded-full"/>
                            </div>
                            <span className="text-3xl font-semibold">Dekisugi</span>
                        </div>
                        <p className="text-gray-700 text-2xl mb-6">
                            Website quá chất lượng với hiệu năng vượt qua các website mà tôi đã từng sử dụng. Đồng thời đội ngũ chăm sóc khách hàng cũng rất nhiệt tình tư vấn cho khách hàng.
                        </p>
                        <div className="flex items-center ">
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                            <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;

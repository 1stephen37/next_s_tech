import Heading from '@/components/sections/Heading';
import React from 'react';

function Page() {
    return (
        <section className="container ">
            <Heading title={'Liên hệ'}/>
            <div className="bg-gray-100 mt-[4rem] py-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        Liên hệ với chúng tôi
                    </h1>
                    <p className="text-gray-700 mb-8">
                        Nếu bạn có bất kỳ câu hỏi hoặc phản hồi nào, vui lòng điền vào mẫu bên
                        dưới và chúng tôi sẽ liên lạc với bạn sớm nhất có thể.
                    </p>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="name"
                            >
                                Tên
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Nhập tên của bạn"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Nhập email của bạn"
                            />
                        </div>
                        {/* Thêm các trường khác ở đây */}
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Gửi
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Page;

import React from 'react';
import Heading from "@/components/sections/Heading";

function Page() {
    return (
        <section className="container mt-[4rem]">
            <Heading title={'chính sách'}/>
            <div className="mt-[4rem]">
                <div className="">
                    <h1 className="text-[3rem] font-bold text-gray-900 mb-12">Chính Sách Của Chúng Tôi</h1>
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-[2rem] font-bold text-gray-900 mb-6">Chính Sách Bảo Mật</h2>
                            <p className="text-gray-700 text-[1.8rem] mb-6 ">
                                Chúng tôi coi trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của bạn.
                                Chính sách bảo mật của chúng tôi nêu rõ cách chúng tôi thu thập, sử dụng và bảo vệ dữ
                                liệu của bạn.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Chúng tôi chỉ thu thập thông tin cá nhân của bạn khi bạn tự nguyện cung cấp cho chúng
                                tôi, chẳng hạn như khi bạn đăng ký tài khoản, đặt mua sản phẩm hoặc liên hệ với chúng
                                tôi. Thông tin này có thể bao gồm tên, địa chỉ email, số điện thoại và thông tin thanh
                                toán.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Chúng tôi sử dụng thông tin của bạn để cung cấp và cải thiện các dịch vụ của chúng tôi,
                                xử lý các giao dịch, liên hệ với bạn và tuân thủ các yêu cầu pháp lý. Chúng tôi không
                                bán hoặc chia sẻ thông tin cá nhân của bạn với bên thứ ba trừ khi được sự cho phép của
                                bạn hoặc theo yêu cầu của pháp luật.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Chúng tôi sử dụng các biện pháp an ninh công nghệ và tổ chức để bảo vệ thông tin của bạn
                                khỏi truy cập, sử dụng hoặc tiết lộ trái phép. Bạn cũng có thể lựa chọn không cung cấp
                                thông tin cá nhân cho chúng tôi, nhưng điều này có thể giới hạn khả năng của chúng tôi
                                trong việc cung cấp các dịch vụ cho bạn.
                            </p>
                            <a href="/chinh-sach-bao-mat" className="text-blue-600 hover:text-blue-800 text-[1.8rem]">
                                Đọc Chính Sách Bảo Mật của Chúng Tôi
                            </a>
                        </section>

                        <section>
                            <h2 className="text-[3rem] font-bold text-gray-900 mb-6">Điều Khoản Dịch Vụ</h2>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý với điều khoản dịch vụ của chúng
                                tôi, điều này điều chỉnh việc sử dụng nền tảng và dịch vụ của chúng tôi.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Điều khoản dịch vụ này áp dụng cho tất cả người dùng của trang web của chúng tôi. Bằng
                                cách sử dụng trang web, bạn đồng ý tuân thủ các điều khoản này. Nếu bạn không đồng ý với
                                các điều khoản, vui lòng không sử dụng trang web của chúng tôi.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Các điều khoản này bao gồm quyền sở hữu trí tuệ, giới hạn trách nhiệm, bảo mật, quyền
                                riêng tư, quy định về nội dung và nhiều vấn đề khác. Chúng tôi có quyền sửa đổi các điều
                                khoản này vào bất kỳ thời điểm nào và sẽ thông báo cho bạn về bất kỳ thay đổi quan trọng
                                nào.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Nếu bạn vi phạm các điều khoản này, chúng tôi có thể chấm dứt hoặc hạn chế quyền truy
                                cập của bạn vào trang web. Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào, vui lòng liên hệ
                                với chúng tôi.
                            </p>
                            <a href="/dieu-khoan-dich-vu" className="text-blue-600 hover:text-blue-800 text-[1.8rem]">
                                Đọc Điều Khoản Dịch Vụ của Chúng Tôi
                            </a>
                        </section>

                        <section>
                            <h2 className="text-[3rem] font-bold text-gray-900 mb-6">Chính Sách Hoàn Tiền</h2>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Chúng tôi cung cấp một chính sách hoàn tiền công bằng và minh bạch để đảm bảo sự hài
                                lòng của khách hàng. Vui lòng xem xét chính sách hoàn tiền của chúng tôi để biết thêm
                                thông tin.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Nếu bạn không hài lòng với sản phẩm hoặc dịch vụ của chúng tôi, bạn có thể yêu cầu hoàn
                                tiền trong vòng 30 ngày kể từ ngày mua hàng. Chúng tôi sẽ hoàn trả toàn bộ số tiền bạn
                                đã thanh toán, bao gồm phí vận chuyển (nếu có).
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Để yêu cầu hoàn tiền, vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi
                                bằng email hoặc điện thoại. Chúng tôi sẽ xem xét yêu cầu của bạn và cung cấp hướng dẫn
                                về cách hoàn tiền. Chúng tôi cam kết xử lý các yêu cầu hoàn tiền một cách nhanh chóng và
                                công bằng.
                            </p>
                            <p className="text-gray-700 mb-6 text-[1.8rem]">
                                Vui lòng lưu ý rằng một số sản phẩm và dịch vụ có thể bị loại trừ khỏi chính sách hoàn
                                tiền này. Chúng tôi sẽ cung cấp thông tin chi tiết về các loại trừ này trong các điều
                                khoản và điều kiện cụ thể của từng sản phẩm hoặc dịch vụ.
                            </p>
                            <a href="/chinh-sach-hoan-tien" className="text-blue-600 hover:text-blue-800 text-[1.8rem]">
                                Đọc Chính Sách Hoàn Tiền của Chúng Tôi
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Page;

import React from 'react';
import Heading from "@/components/sections/Heading";
import Image from "next/image";

function Page() {
    return (
        <section className="container mt-[3rem]">
            <Heading title={"về chúng tôi"}/>
            <div className="bg-white mt-10">
                <div className="lg:grid lg:grid-cols-1 lg:gap-8">
                    <div>
                        <h2 className="heading font-extrabold">Về STECH</h2>
                        <p className="mt-3 p">
                            Chào mừng đến với <b>STECH</b> - điểm đến đáng tin cậy của bạn cho các sản phẩm điện thoại
                            thông minh. Tại STech, chúng tôi tự hào là một trong những nhà bán lẻ hàng đầu trong
                            ngành công nghệ di động, luôn nỗ lực để mang đến cho khách hàng những trải nghiệm mua
                            sắm tuyệt vời nhất.

                            Với nhiều năm kinh nghiệm trong lĩnh vực này, STech đã xây dựng được uy tín vững chắc và
                            trở thành địa chỉ tin cậy của hàng triệu khách hàng trên khắp cả nước. Chúng tôi không
                            chỉ cung cấp các sản phẩm điện thoại thông minh chất lượng cao, mà còn đem lại dịch vụ
                            chăm sóc khách hàng ưu việt, nhằm mang đến trải nghiệm mua sắm tuyệt vời từ đầu đến
                            cuối.

                            Bên cạnh đó, STech luôn cập nhật những xu hướng công nghệ mới nhất, cung cấp đa dạng các
                            dòng sản phẩm từ các thương hiệu hàng đầu thế giới như Apple, Samsung, Oppo, Vivo và
                            nhiều hãng khác. Chúng tôi tự hào mang đến cho khách hàng sự lựa chọn phong phú, đáp ứng
                            mọi nhu cầu và phù hợp với từng phong cách sử dụng.

                            Với mục tiêu trở thành đối tác tin cậy số một của khách hàng, STech cam kết luôn nỗ lực
                            không ngừng để cải thiện chất lượng sản phẩm và dịch vụ, đồng thời mang đến những ưu
                            đãi, chương trình khuyến mãi hấp dẫn nhằm mang lại giá trị tối đa cho khách hàng. Chúng
                            tôi tin rằng với sự đầu tư không ngừng vào việc nâng cao trải nghiệm mua sắm, STech sẽ
                            tiếp tục khẳng định vị thế là nhà bán lẻ hàng đầu trong ngành công nghệ di động.

                            Hãy đến với STech - điểm đến đáng tin cậy cho những chiếc điện thoại thông minh ưng ý
                            của bạn. Cùng trải nghiệm dịch vụ hoàn hảo và mua sắm một cách thoải mái tại <b>STECH</b>!
                        </p>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <h2 className="heading text-gray-900">Sứ mệnh của chúng tôi</h2>
                        <div className="flex gap-5 items-center">
                            <div className="w-max h-max bg-white shadow-xl">
                                <Image alt={''} width={450} height={550} className={'rounded w-[100rem]'}
                                       src={'/images/sections/sm.png'}/>
                            </div>
                            <p className="mt-3 max-w-[70%] p">
                                Sứ mệnh của <b>STECH</b> là trở thành đối tác tin cậy số một của khách hàng khi họ
                                tìm kiếm
                                các thiết bị điện thoại thông minh chất lượng cao. Chúng tôi không ngừng nỗ lực để
                                hiểu rõ những kỳ vọng, nhu cầu và xu hướng công nghệ mới nhất của người dùng, từ đó
                                luôn cập nhật và cung cấp những sản phẩm với thiết kế hiện đại, tính năng ưu việt và
                                giá cả cạnh tranh nhất. Mục tiêu của chúng tôi là mang đến trải nghiệm mua sắm tuyệt
                                vời cho khách hàng, làm hài lòng và vượt qua mong đợi của họ trong từng giao dịch.

                                Với việc không ngừng cải thiện chất lượng sản phẩm và dịch vụ, sTech cam kết sẽ luôn
                                là điểm đến tin cậy nhất của khách hàng khi họ tìm kiếm những chiếc điện thoại thông
                                minh ưng ý. Chúng tôi sẽ tiếp tục nỗ lực trở thành nhà cung cấp hàng đầu, mang lại
                                những trải nghiệm tuyệt vời và làm hài lòng từng khách hàng, góp phần nâng cao chất
                                lượng cuộc sống số của người dùng.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="heading text-gray-900">Cam kết của chúng tôi</h2>
                    <ul className="mt-5 grid grid-cols-3 gap-x-[3rem]">
                        <li className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <p className="ml-3 text-[2rem] text-gray-500">100% sản phẩm chính hãng</p>
                        </li>
                        <li className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <p className="ml-3 text-[2rem] text-gray-500">Đội ngũ nhân viên chuyên nghiệp</p>
                        </li>
                        <li className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <p className="ml-3 text-[2rem] text-gray-500">Đội ngũ tư vấn hỗ trợ 24/7</p>
                        </li>
                        <li className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <p className="ml-3 text-[2rem] text-gray-500">Chính sách bảo hành và đổi trả linh hoạt</p>
                        </li>
                        <li className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <p className="ml-3 text-[2rem] text-gray-500">Giao hàng nhanh chóng và an toàn</p>
                        </li>
                        <li className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                            <p className="ml-3 text-[2rem] text-gray-500">Giá cả cạnh tranh và minh bạch</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Page;

import React, {useState} from 'react';
import ReviewsModel from "@/models/reviews/reviews.model";
import Image from 'next/image'
import {ApiImage} from "@/app/constants";
import {Button} from "@/components/ui/button";


const CommentSection = ({idProduct}: { idProduct: string }) => {
    const {data: commentsList, isError, isLoading} = ReviewsModel.GetAllReviewsByIdProduct(idProduct);

    const [replyingToComment, setReplyingToComment] = useState('');

    const handleReplyClick = (commentId: string) => {
        setReplyingToComment(commentId);
    };

    const handleCancelReply = () => {
        setReplyingToComment('');
    };
    console.log(commentsList);

    return (
        <section className="w-[65%]">
            <h2 className="heading">Bình luận</h2>
            <div className="mt-5">
                {commentsList?.map((comment, index) => (
                    <div key={index} className="w-full bg-gray-100 p-4 rounded-lg">
                        <div className="flex items-center gap-5">
                            <div className="w-max h-max">
                                {comment.avatar ? (
                                    <Image alt={''} className={'rounded-full'} src={ApiImage + comment.avatar}
                                           width={50} height={50}/>
                                ) : (
                                    <Image alt={''} className={'rounded-full'}
                                           src={'/images/sections/avatar-user-review-2.jpg'} width={50} height={50}/>
                                )}
                            </div>
                            <h3 className="text-3xl capitalize font-bold mb-2">{comment.name}</h3>
                        </div>
                        <p className="text-gray-700 mt-5 text-3xl">{comment.content}</p>
                        <div className="ml-auto mt-2 w-max flex items-center ">
                            <Button variant={'link'}>
                                Thích
                            </Button>
                            <Button onClick={() => handleReplyClick(comment.id_review)} variant={'link'} className="">
                                Trả lời
                            </Button>
                        </div>
                        {replyingToComment === comment.id_review && (
                            <div className="flex space-x-2 my-3">
                                <input
                                    type="text"
                                    placeholder="Nhập phản hồi của bạn"
                                    className="bg-white border-gray-300 rounded-md px-3 py-2 border border-solid w-full outline-none text-2xl"
                                />
                                <button
                                    onClick={handleCancelReply}
                                    className="bg-red-500 hover:bg-red-600 text-2xl text-white px-4 py-2 rounded-md"
                                >
                                    Hủy
                                </button>
                            </div>
                        )}
                        {comment.replies.map((reply, index) => (
                            <div key={index} className="pl-20">
                                <div className="flex items-center gap-5">
                                    <div className="w-max h-max">
                                        {reply.avatar ? (
                                            <Image alt={''} className={'rounded-full'} src={ApiImage + reply.avatar}
                                                   width={50} height={50}/>
                                        ) : (
                                            <Image alt={''} className={'rounded-full'}
                                                   src={'/images/sections/avatar-user-review-2.jpg'} width={50}
                                                   height={50}/>
                                        )}
                                    </div>
                                    <h3 className="text-3xl capitalize font-bold mb-2">{reply.name}</h3>
                                </div>
                                <p className="text-gray-700 mt-5 text-3xl">@{comment.name} {reply.content}</p>
                                <Button variant={'link'} className={'mt-1 ml-auto'}>
                                    Thích
                                </Button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommentSection;

import React, {FormEvent, useState} from 'react';
import ReviewsModel from "@/models/reviews/reviews.model";
import Image from 'next/image'
import {ApiImage} from "@/app/constants";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea"
import reviewsModel from "@/models/reviews/reviews.model";


const CommentSection = ({idProduct}: { idProduct: string }) => {
    const {trigger: createRepComment} = reviewsModel.CreateNewRepComment();
    const {data: commentsList, isError, isLoading} = ReviewsModel.GetAllReviewsByIdProduct(idProduct);
    const [newComment, setNewComment] = useState('');
    const [newRepComment, setNewRepComment] = useState('');
    const [idReview, setIdReview] = useState('');
    const [replyingToComment, setReplyingToComment] = useState('');
    const handleReplyClick = (commentId: string, name: string) => {
        setReplyingToComment(commentId);
        setNewRepComment(`@${name} `)
    };
    const handleCancelReply = () => {
        setReplyingToComment('');
    };
    const handleRepComment = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createRepComment({
            content: newRepComment,
            id_review: replyingToComment
        })
            .then((data) => {
                console.log(data);
            })
    }

    return (
        <section className="w-[65%]">
            <h2 className="heading">Bình luận</h2>
            <div className="mt-5">
                {commentsList?.map((comment, index) => (
                    <div key={index} className="w-full p-4 rounded-lg shadow-md">
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
                            <Button onClick={() => handleReplyClick(comment.id_review, comment.name)} variant={'link'}
                                    className="">
                                Trả lời
                            </Button>
                        </div>
                        {comment.replies.map((reply, index) => (
                            <div key={index} className="ml-20 pl-5 border-solid border-l-2 border-gray-200">
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
                                <p className="text-gray-700 mt-5 text-3xl">{reply.content}</p>
                                <div className="ml-auto mt-2 w-max flex items-center ">
                                    <Button variant={'link'}>
                                        Thích
                                    </Button>
                                    <Button onClick={() => handleReplyClick(comment.id_review, reply.name)}
                                            variant={'link'}
                                            className="">
                                        Trả lời
                                    </Button>
                                </div>
                            </div>
                        ))}
                        {replyingToComment === comment.id_review && (
                            <form onSubmit={e => handleRepComment(e)} className="w-full mt-10">
                                <Textarea
                                    placeholder={"cảm nghĩ của bạn"}
                                    value={newRepComment}
                                    onChange={(e) => setNewRepComment(e.target.value)}
                                    className="bg-white border-gray-300 h-[3rem] rounded-md px-3 py-2 border border-solid w-full outline-none text-2xl"/>
                                <div className="flex justify-end gap-5 mt-3 ">
                                    <button
                                        onClick={handleCancelReply}
                                        className="bg-red-500 hover:bg-red-600 text-2xl text-white px-4 py-2 rounded-md">
                                        Hủy
                                    </button>
                                    <button type='submit'
                                            className="bg-primary hover:bg-secondary hover:text-primary border border-solid hover:border-primary text-2xl text-white px-4 py-2 rounded-md">
                                        Gửi
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                ))}
                <div className="">
                    <div className="">

                    </div>
                    <div className="">
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommentSection;

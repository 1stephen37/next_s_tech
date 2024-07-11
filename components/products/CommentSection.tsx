import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'Nguyễn Văn A',
            content: 'Sản phẩm rất tốt, giá cả hợp lý!',
            replies: [
                {
                    id: 1,
                    author: 'Điện thoại ABC',
                    content: 'Cảm ơn bạn đã đánh giá cao sản phẩm của chúng tôi!'
                }
            ]
        },
        {
            id: 2,
            author: 'Trần Thị B',
            content: 'Giao hàng nhanh, dịch vụ tuyệt vời!',
            replies: []
        }
    ]);

    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            setComments([
                ...comments,
                {
                    id: comments.length + 1,
                    author: 'Khách hàng',
                    content: newComment,
                    replies: []
                }
            ]);
            setNewComment('');
        }
    };

    return (
        <div className="mt-[4rem] shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Bình luận</h2>
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-3xl font-bold mb-2">{comment.author}</h3>
                            <p className="text-gray-700 text-3xl">{comment.content}</p>
                        </div>
                        <div className="ml-8 mt-4 space-y-4">
                            {comment.replies.map((reply) => (
                                <div key={reply.id} className="bg-gray-200 p-4 rounded-lg">
                                    <h4 className="text-3xl font-bold mb-2">{reply.author}</h4>
                                    <p className="text-gray-700 text-3xl">{reply.content}</p>
                                </div>
                            ))}
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    className="flex-1 px-4 py-2 text-3xl bg-gray-200 rounded-lg mr-2"
                                    placeholder="Trả lời..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                />
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-3xl rounded-lg"
                                    onClick={handleCommentSubmit}
                                >
                                    Gửi
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;

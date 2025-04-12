import React from 'react';

const AddComment = ({commentFormData,handleSubmitComment,handleChangeComment,editCommentID}) => {
  

    return (
        <form onSubmit={handleSubmitComment} className="mb-4">
            <div className="mb-3">
                 <label className="form-label">client Name</label>
                 <input
                   type="text"
                   className="form-control"
                   name="clientName"
                   value={commentFormData.clientName}
                   onChange={handleChangeComment}
                   required
                 />
            </div>
            <div className="mb-3">
                <label htmlFor="comment">Add Comment:</label>
                <input
                    type="text"
                    className="form-control"
                    name="comment"
                    id="comment"
                    value={commentFormData.comment}
                    onChange={handleChangeComment}
                    placeholder="Write your comment here"
                />
            </div>
             <button type="submit" className="btn btn-primary">
        {editCommentID ? 'Edit Comment' : 'Submit Comment'}
      </button>
        </form>
    );
};

export default AddComment;
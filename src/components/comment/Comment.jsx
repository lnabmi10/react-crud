import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowComments from './ShowComments';
import AddComment from './AddComment';

const API_URL_COMMENTS = 'https://67f8fc36094de2fe6ea00241.mockapi.io/api/v1/comments';

function Comment() {
    const [allComments, setAllComments] = useState([])
    const [commentFormData, setCommentFormData] = useState({ clientName: '', comment: '' });
    const [editCommentID, setEditCommentID] = useState(null);


    useEffect(() => {
      fetchAllComment()
    }, [])
    

    const fetchAllComment = async() => {
        try {
            const res = await axios.get(API_URL_COMMENTS)
            setAllComments(res.data)
            
        } catch (error) {
            console.log()
        }
    }
    const handleEditComment = () => {
        console.log("comment edited")
    }
    const handleDeleteComment = () => {
        console.log("comment Deleted")
    }
    const handleLikes = () => {
        console.log(" handel likes")
    }
    const handleChangeComment = (e) => {
        setCommentFormData({ ...commentFormData, [e.target.name]: e.target.value })
    }
    const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      if (editCommentID) {
        await axios.put(`${API_URL_COMMENTS}/${editCommentID}`, commentFormData);
      } else {
        await axios.post(API_URL_COMMENTS, commentFormData);
      }
      setCommentFormData({ clientName: '', comment: '' });
      setEditCommentID(null);
      fetchAllComment();
    } catch (err) {
      console.log('Erreur lors de l\'enregistrement', 'error');
    }
  };



  return (
      <>
          <h1 className='text-center'>add Comment</h1>
          <AddComment
            commentFormData={commentFormData}
            handleSubmitComment={handleSubmitComment}
            handleChangeComment={handleChangeComment}
            editCommentID={editCommentID}
          />
          
        <h2>Comments</h2>
        <ShowComments
        allComments={allComments}
        handleEditComment={handleEditComment}
        handleDeleteComment={handleDeleteComment}
        handleLikes={handleLikes}      
        />
          
    </>
  )
}

export default Comment
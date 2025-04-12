import React from 'react'

function ShowComments({allComments,handleDeleteComment,handleEditComment,handleLikes}) {
    return (<>
        <div><h1>ShowComments</h1></div>
        <div>
            <table className="table table-bordered">
        <thead>
          <tr>
            <th>clientName</th>
            <th>comment</th>
            <th>likes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allComments.map((oneComment) => (
            <tr key={oneComment.id}>
              <td>{oneComment.clientName}</td>
              <td>{oneComment.comment}</td>
              <td>{oneComment.likes}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditComment(oneComment)}>
                  Modifier
                </button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteComment(oneComment.id)}>
                  Supprimer
                      </button>
                      <button className="btn btn-primary btn-sm me-2" onClick={() => handleLikes(oneComment)}>
                  like
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
  </>
    
  )
}

export default ShowComments
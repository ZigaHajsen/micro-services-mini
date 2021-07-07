export const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    const { status, content, id } = comment;
    let shownContent;

    if (status === 'approved') {
      shownContent = content;
    }

    if (status === 'pending') {
      shownContent = 'This comment is awaiting moderation';
    }

    if (status === 'rejected') {
      shownContent = 'This comment has been rejected';
    }

    return <li key={id}>{shownContent}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

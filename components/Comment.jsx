{
  /**
     * <ul className="text-slate-700">
            {comments.map((comment) => (
              <li className="mb-3" key={comment.id}>
                {comment.id}. {comment.body}
              </li>
            ))}
          </ul>
     */
}

export default async function Comments({ commentsPromise }) {
  const comments = await commentsPromise;
  console.log(comments);

  return (
    <ul className="text-slate-700">
      {comments.map((comment) => (
        <li className="mb-3" key={comment.id}>
          {comment.id}. {comment.body}
        </li>
      ))}
    </ul>
  );
}

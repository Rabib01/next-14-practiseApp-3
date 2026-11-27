import getPost from "@/api/getPost";
import getPostComments from "@/api/getPostComments";
import Comments from "@/components/Comment";
import { Suspense } from "react";

export default async function PostPage({ params: { postId } }) {
  //  this was the problem here  ! how to do the data fetching parallely ?
  // we remove the awaits from here and we would not get a resolved promise but a promise object !

  const postPromise = getPost(postId);
  const commentsPromise = getPostComments(postId);
  {
    // so the trick to do them parallely - the trick to doing anything complicated lies in vanilla js
    // we make use of Promise.all() -> so that the one that is resolved first will automatically return
    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);  -
    //  rendering will not be complete unless both of these things are resolved !
    // ager tar theke parthokko hocche ager ta sequentially hocchil ar eita parallely hocchilo !
  }

  // improved version
  const post = await postPromise;
  // eita taratari hobe amra jani so eitake age resolve kore diye
  // comments k amra suspense boundary diye morai dibo

  return (
    <div className="px-8">
      <h2 className="text-slate-800">{post.title}</h2>
      <p className="mt-4 text-emerald-700">{post.body}</p>
      <div className="mt-8 border-t border-slate-500 p-4 rounded">
        <h2 className="text-slate-800">Comments</h2>
        <div className="mt-4">
          <Suspense
            fallback={<div className="loading">Loading Comments ..</div>}
          >
            <Comments commentsPromise={commentsPromise} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

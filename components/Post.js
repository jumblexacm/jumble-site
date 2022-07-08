
function Post({ post }) {
  return (
    <article>
      <a
        rel="noopener noreferrer"
        href="#"
        className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-gray-50"
      >
        <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">
          {`OrgID: ` + post.orgID}
        </h3>
        <time
          dateTime=""
          className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 text-gray-600"
        >
          {post.date}
        </time>
        <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 text-gray-700">
          {post.msg}
        </p>
      </a>
    </article>
  );
}

export default Post;

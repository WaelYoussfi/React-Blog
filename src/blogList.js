const BlogList = ({ blog, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blog.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

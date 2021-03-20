import { useState } from "react";

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "1" },
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "2" },
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "3" },
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "4" },
  ]);
  return (
    <div className="home">
      {blog.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Written by {post.Author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

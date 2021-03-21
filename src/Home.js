import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "CarsWael", body: "Ford cars", Author: "Wael", id: "1" },
    { title: "CarsLouay", body: "Ford cars", Author: "Louay", id: "2" },
    { title: "CarsWala", body: "Ford cars", Author: "Wala", id: "3" },
    { title: "CarsWael", body: "Ford cars", Author: "Wael", id: "4" },
  ]);
  const handleDeletePost = (id) => {
    const newBlog = blog.filter((post) => post.id !== id);
    setBlog(newBlog);
  };
  return (
    <div className="home">
      <BlogList
        blog={blog}
        title="All posts"
        handleDeletePost={handleDeletePost}
      />
    </div>
  );
};

export default Home;

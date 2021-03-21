import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "1" },
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "2" },
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "3" },
    { title: "Cars", body: "Ford cars", Author: "Wael", id: "4" },
  ]);
  return (
    <div className="home">
      <BlogList blog={blog} title="My Blog" />
    </div>
  );
};

export default Home;

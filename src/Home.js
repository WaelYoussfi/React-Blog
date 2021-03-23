import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blog")
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't fetch data");
          }
          return res.json();
        })
        .then((dataFetched) => {
          setBlog(dataFetched);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Data is loading ...</div>}
      {blog && <BlogList blog={blog} title="All posts" />}
    </div>
  );
};

export default Home;

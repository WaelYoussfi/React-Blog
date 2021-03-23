import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blog, isLoading, error } = useFetch(
    "http://localhost:8000/blog"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Data is loading ...</div>}
      {blog && <BlogList blog={blog} title="All posts" />}
    </div>
  );
};

export default Home;

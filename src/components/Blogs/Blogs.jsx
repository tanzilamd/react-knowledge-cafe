import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <div className="w-3/3 md:w-2/3 mt-4">
            {/* <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1> */}

            {blogs.map((blog) => (
                <Blog
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                    key={blog.id}
                    blog={blog}
                ></Blog>
            ))}
        </div>
    );
};

Blog.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
};

export default Blogs;

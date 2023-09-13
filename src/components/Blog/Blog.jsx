import PropTypes from "prop-types";
import "./Blog.css";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {
        id,
        title,
        cover,
        author,
        author_img,
        posted_date,
        reading_time,
        hashtags,
    } = blog;

    return (
        <div className="mb-14 blog-shadow p-4">
            <img
                className="w-full h-96 mb-4 rounded-lg"
                src={cover}
                alt={`Image of ${title} blog`}
            />
            <div className="flex justify-between items-center">
                <div className="flex mb-2">
                    <img className="w-14" src={author_img} alt="" />

                    <div className="ml-4">
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p className="text-lg">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className="text-2xl"
                    >
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx} className="mr-2 text-[#11111199]">
                        <a>#{hash}</a>
                    </span>
                ))}
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className="text-indigo-500 underline mt-4 font-medium"
            >
                Mark as Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
};

export default Blog;

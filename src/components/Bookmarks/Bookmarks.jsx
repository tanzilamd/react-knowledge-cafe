import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import ReadingTime from "../ReadingTime/ReadingTime";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-3/3 md:w-1/3 bg-[#1111110d] p-4 rounded-md mt-4">
            <ReadingTime readingTime={readingTime}></ReadingTime>
            <h2 className="text-2xl font-bold text-center">
                Bookmarked Blogs : {bookmarks.length}
            </h2>

            {bookmarks.map((bookmark) => (
                <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
            ))}
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
};

export default Bookmarks;

import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    console.log(bookmark);
    return (
        <div className="bg-white p-4 rounded-lg my-3 font-semibold">
            <h3>{title}</h3>
        </div>
    );
};

// Bookmark.propTypes = {
//     bookmark: PropTypes.func,
// };

export default Bookmark;

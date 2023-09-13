import PropTypes from "prop-types";

const ReadingTime = ({ readingTime }) => {
    return (
        <div className="bg-[#6047ec1a] border-[#6047EC] border-2 p-4 rounded-md text-xl font-bold mb-4 text-center text-[#6047EC]">
            <h3>Spent time on read : {readingTime} min</h3>
        </div>
    );
};

ReadingTime.propTypes = {
    readingTime: PropTypes.number,
};

export default ReadingTime;

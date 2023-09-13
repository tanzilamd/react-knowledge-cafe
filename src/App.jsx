import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Bookmark from "./components/Bookmark/Bookmark";

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };

    const handleMarkAsRead = (id, time) => {
        setReadingTime(readingTime + time);
        console.log(id, time);

        const remainingBookmarks = bookmarks.filter(
            (bookmark) => bookmark.id !== id
        );

        setBookmarks(remainingBookmarks);
    };

    return (
        <>
            <Header></Header>
            <div className="flex flex-col-reverse md:flex md:flex-row container mx-auto gap-4">
                <Blogs
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blogs>
                <Bookmarks
                    bookmarks={bookmarks}
                    readingTime={readingTime}
                ></Bookmarks>
            </div>
        </>
    );
}

export default App;

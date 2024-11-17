import { FaRegBookmark, FaShareAlt } from 'react-icons/fa'; // Import icons from React Icons
import { AiFillStar } from 'react-icons/ai'; // For star rating
import { BiShow } from 'react-icons/bi'; // For views icon

const NewsCard = ({ news }) => {
    const { author, title, image_url, details, rating, total_view } = news;

    return (
        <div className="card bg-base-100 shadow-lg rounded-lg mb-6">
            {/* Author Info */}
            <div className="flex items-center p-4">
                <img
                    src={author?.img}
                    alt={author?.name}
                    className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                    <p className="font-bold">{author?.name}</p>
                    <p className="text-sm text-gray-500">
                        {new Date(author?.published_date).toLocaleDateString()}
                    </p>
                </div>
                <div className="ml-auto flex space-x-3">
                    <FaRegBookmark className="text-gray-500 cursor-pointer" />
                    <FaShareAlt className="text-gray-500 cursor-pointer" />
                </div>
            </div>

            {/* Thumbnail */}
            <img
                src={image_url}
                alt={title}
                className="w-full h-64 object-cover rounded-t-md"
            />

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-700 text-sm mb-4">
                    {details.length > 100
                        ? `${details.slice(0, 100)}...`
                        : details}{' '}
                    <span className="text-blue-500 font-semibold cursor-pointer">
                        Read More
                    </span>
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center text-yellow-400">
                            <AiFillStar />
                            <p className="ml-1 font-bold">{rating?.number}</p>
                        </div>
                        <span className="text-gray-500 text-sm">
                            {rating?.badge}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <BiShow className="text-gray-500" />
                        <span className="text-gray-500 text-sm">
                            {total_view} views
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

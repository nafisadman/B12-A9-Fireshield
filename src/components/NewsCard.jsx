import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router";

export default function NewsCard({ news }) {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      {/* Author & Share */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-xl">
          <CiBookmark />
          <CiShare2 />
        </button>
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link
                to={`/news-details/${id}`}
                className="text-primary font-semibold cursor-pointer hover:underline"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            <FaStar /> <span className="font-semibold">{rating?.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaRegEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

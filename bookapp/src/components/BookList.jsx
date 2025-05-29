import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loading from "./Loading";
import Error from "./Error";
import { getBookEmoji, renderStars } from "./../util";
import useCustomMove from "../hooks/useCustomMove";

const BookList = () => {
  const { data, loading, error } = useFetch();
  const { moveToDetail } = useCustomMove();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="p-0">
      {data.dtoList.map((book) => (
        <article className="flex items-center border-2 border-stone-200 rounded-[5px] p-4 mb-2.5 bg-white">
          <div className="first:text-5xl pr-4">{getBookEmoji(book.id)}</div>
          <div className="grow-1">
            <h3>{book.title}</h3>
            <p>
              {book.author} / {book.genreName}
            </p>
            <p>{renderStars(book.rating)}</p>
          </div>
          <div className="flex flex-col text-[0.9em]">
            <button
              className={
                `w-[100px] m-1 py-2.5 bg-sky-500 text-white rounded-[3px] text-center hover:bg-sky-700` +
                (book.available ? "" : ` opacity-33`)
              }
            >
              {book.available ? "Available" : "Unavailable"}
            </button>
            <a
              href=""
              onClick={() => moveToDetail(book.id)}
              className="w-[100px] m-1 py-2.5 bg-sky-100 rounded-[3px] text-center"
            >
              Details
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default BookList;

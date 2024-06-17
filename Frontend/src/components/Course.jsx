import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Welcome to the {" "} 
            <span className="text-pink-500"> PREMIUM SECTION :)</span>
          </h1>
          <p className="mt-12">
          Here, we offer an exquisite selection of rare, first-edition, and collector's books that cater to true bibliophiles. Our premium collection boasts timeless classics, limited editions, and unique finds that are sure to enhance any personal library. Enjoy the luxury of owning exceptional literary masterpieces and indulge in the unparalleled beauty and craftsmanship of these special editions. Happy browsing, and may you find the perfect addition to your treasured collection!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 height: '100%' width: '250px' height: '350px' ">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

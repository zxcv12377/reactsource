import React, { useEffect } from "react";
import { Link, Outlet, Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log("currentPath ", location.pathname);
  }, [location]);

  return <h1>Home Page</h1>;
}

function User() {
  const location = useLocation();
  const { id } = useParams();
  useEffect(() => {
    console.log("currentPath ", location.pathname);
  }, [location, id]);
  return <h1>User ID : {id}</h1>;
}

function Search() {
  //   const location = useLocation();
  // URLSearchParams() : 브라우저 API이용
  //   const queryParams = new URLSearchParams(location.search);
  //   const keyword = queryParams.get("keyword");

  //   useEffect(() => {
  //     console.log("currentPath ", location.pathname);
  //     console.log("keyword ", keyword);
  //   }, [location, keyword]);
  const [queryParams] = useSearchParams();
  const keyword = queryParams.get("keyword");
  //   const page = queryParams.get("page");

  return <h1>Search Keyword : {keyword} </h1>;
}

function Articles() {
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to={"/articles/1"}>게시글 1</Link>
        </li>
        <li>
          <Link to={"/articles/2"}>게시글 2</Link>
        </li>
        <li>
          <Link to={"/articles/3"}>게시글 3</Link>
        </li>
      </ul>
    </>
  );
}

function Article() {
  const { id } = useParams();
  return <h2>게시글 : {id} </h2>;
}

function Error() {
  return <h2>404 - Page Not Found</h2>;
}
const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="/articles" element={<Articles />}>
          <Route path="/articles/:id" element={<Article />} />
        </Route>
        <Route path="*" element={<Error />} />
        {/* <Route path="/articles/:id" element={<Article />}></Route> */}
      </Routes>
    </div>
  );
};

export default Pages;

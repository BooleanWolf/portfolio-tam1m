import { Link } from "react-router-dom";

const RouteItem = () => {
  return (
    <>
      <div className="my-8">
        <div className="">
          <ul className="flex gap-4 font-semibold p-3 bg-black text-white  ">
            <li>
              <Link to="/research">Research</Link>
            </li>
            <li>
              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/award">Award</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/educations">Educations</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RouteItem;

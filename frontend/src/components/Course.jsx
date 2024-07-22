import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";

export default function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:pd-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorum
            voluptates, excepturi voluptate modi eveniet quidem sunt omnis
            quibusdam, dolorem obcaecati reiciendis id enim deserunt voluptas.
            Ipsam ipsum excepturi, minus, deserunt a sequi mollitia qui minima
            nesciunt quis alias nobis. lore12
          </p>
          <Link to="/">
            {" "}
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

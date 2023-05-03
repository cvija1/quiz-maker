import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex-grow-1 bg-primary d-flex justify-content-center align-items-center row m-0">
        <div className="bg-dark text-white col-11 col-sm-8 col-lg-5 hero rounded text-center border border-2 border-dark">
          <p className="mt-5 ">Dobrodošli na stranicu Quiz maker.</p>
          <div className="pt-5 mb-5 text-light">
            <Link className="text-white" to={"/review"}>
              Pokreni neki od kvizova
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

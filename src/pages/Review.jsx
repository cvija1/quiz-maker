import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuizzes, reset } from "../features/quizzes/quizSlice";
import Table from "../components/Table";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Review = () => {
  const dispatch = useDispatch();
  const { quizzes, isLoading, isSuccess, message } = useSelector(
    (state) => state.quiz
  );
  useEffect(() => {
    dispatch(getQuizzes());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      dispatch(getQuizzes());
    }

    return () => {
      dispatch(reset());
    };
  }, [isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {quizzes?.length === 0 ? (
        <>
          <div className="flex-grow-1 bg-primary d-flex justify-content-center align-items-center row m-0">
            <div className="bg-opacity-50 bg-dark text-white col-11 col-sm-8 col-lg-5 hero rounded text-center border border-2 border-dark">
              <p className="mt-4 mb-5">
                Trenutno ne postoji nijedan kviz. Ukoliko želite da dodate novi
                pritisnite{" "}
                <Link className="text-white" to="/create">
                  ovdje
                </Link>
              </p>
            </div>
          </div>
        </>
      ) : (
        <Table quizzes={quizzes} />
      )}
    </>
  );
};

export default Review;

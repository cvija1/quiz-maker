import { useEffect } from "react";
import { useParams } from "react-router-dom";
import QuizForm from "../components/QuizForm";
import { getQuestions, getQuiz, reset } from "../features/quizzes/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";

const EditQuiz = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getQuiz(params.id));
    dispatch(getQuestions());
    return () => {
      dispatch(reset());
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex-grow-1 bg-primary d-flex justify-content-center row m-0">
      <div className="bg-dark text-white col-11 col-sm-8 col-lg-5 hero rounded  border border-2 border-dark mt-4 mb-4">
        <QuizForm id={params.id} />
      </div>
    </div>
  );
};

export default EditQuiz;

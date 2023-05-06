import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../features/quizzes/quizSlice";
import { useParams } from "react-router-dom";

const StartQuiz = () => {
  const [answer, setAnswer] = useState({ answer0: false });

  const params = useParams();
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quiz);
  const { questions } = quiz;

  const handleAnswer = (e) => {
    const stateCopy = { ...answer };
    Object.keys(stateCopy).forEach((v) => (stateCopy[v] = false));
    setAnswer({
      ...stateCopy,
      [e.target.name]: true,
    });
  };

  useEffect(() => {
    dispatch(getQuiz(params.id));
  }, []);

  return (
    <div
      id="carouselExampleControls"
      data-bs-interval="false"
      data-bs-wrap="false"
      className="carousel bg-primary slide flex-grow-1 row d-flex justify-content-center align-items-center m-0 "
    >
      <div className="carousel-inner">
        {questions?.map((question, index) => (
          <Fragment key={index}>
            <div
              className={
                index == 0 ? `carousel-item active ` : `carousel-item `
              }
            >
              <div className="mx-auto  bg-dark col-9 rounded text-center pb-5 pt-5">
                <h1 className=" text-info">{quiz.name}</h1>
                <h2 className="pt-3 text-light">{index + 1}. pitanje</h2>
                <h2 className="pt-5 pb-4">{question.question}</h2>
                {answer[`answer${index}`] && (
                  <h2 className="pb-4  text-success">{question.answer}</h2>
                )}
                <button
                  onClick={handleAnswer}
                  type="button"
                  name={`answer${index}`}
                  className="btn btn-secondary"
                >
                  Prikazi odgovor
                </button>
              </div>
            </div>
          </Fragment>
        ))}

        <div className="carousel-item  ">
          <div className="mx-auto  bg-dark col-9 rounded text-center pb-5 pt-5">
            <h1 className="text-info pb-1">{quiz.name}</h1>
            <h2 className="pt-4 pb-4 text-danger">Kraj kviza</h2>
            <h2 className="pt-3 pb-4 text-info">Hvala na paznji</h2>
            <button
              data-bs-target="#carouselExampleControls"
              data-bs-slide-to="0"
              type="button"
              className="btn btn-secondary"
            >
              Vrati se na pocetak
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Prethodno</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Sljedece</span>
      </button>
    </div>
  );
};

export default StartQuiz;

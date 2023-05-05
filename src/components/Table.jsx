import { Link } from "react-router-dom";
import QuizItem from "./QuizItem";
import ModalDelete from "./ModalDelete";
import { useState } from "react";

const Table = ({ quizzes }) => {
  const [quizForModal, setQuizForModal] = useState({});
  const giveQuizToModal = (quiz) => {
    setQuizForModal(quiz);
  };

  return (
    <div className="flex-grow-1 bg-primary ">
      <div className="container rounded bg-dark p-4 text-white mt-4 mb-4">
        <div className="container p-0 ">
          <div className="h5 mb-4 d-flex align-items-center">
            <p className="m-0">Spisak svih kvizova</p>
            <Link className="ms-auto btn btn-info" to={"/create"}>
              Dodaj kviz
            </Link>
          </div>
        </div>

        <div className="table-responsive mb-2 ">
          <table className="table table-hover mb-0">
            <thead>
              <tr className="table-dark">
                <th className="ps-0" scope="col">
                  Naziv kviza
                </th>
              </tr>
            </thead>
            <tbody>
              {quizzes?.map((quiz) => (
                <QuizItem
                  giveQuizToModal={giveQuizToModal}
                  key={quiz.id}
                  quiz={quiz}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalDelete quiz={quizForModal} />
    </div>
  );
};

export default Table;

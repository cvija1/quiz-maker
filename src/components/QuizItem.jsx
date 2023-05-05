import { useNavigate } from "react-router-dom";

const QuizItem = ({ quiz, giveQuizToModal }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr
        onClick={() => navigate(`/quiz/${quiz.id}`)}
        style={{ cursor: "pointer" }}
        className="table-dark "
      >
        <td className="d-flex align-items-center pe-0 ps-0">
          <div>{quiz.name}</div>
          <div className="ms-auto d-flex">
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/quiz/${quiz.id}/start`);
                }}
                type="button"
                className="btn btn-success"
              >
                Pokreni
              </button>
            </div>
            <div className=" ms-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  giveQuizToModal(quiz);
                }}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal"
                className="btn btn-danger"
              >
                Izbrisi
              </button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default QuizItem;

import { useDispatch } from "react-redux";
import { deleteQuiz } from "../features/quizzes/quizSlice";

const ModalDelete = ({ quiz }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteQuiz(quiz.id));
  };
  return (
    <div
      className="modal fade"
      id="modal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center">
            Da li zaista zelite da izbrisete {quiz.name}
          </div>
          <div className="modal-footer">
            <button
              data-bs-dismiss="modal"
              onClick={onDelete}
              type="button"
              className="btn btn-danger mx-auto"
            >
              Izbrisi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;

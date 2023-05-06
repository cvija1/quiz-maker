import { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createQuiz, reset, updateQuiz } from "../features/quizzes/quizSlice";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const QuizForm = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message, quiz, questions } =
    useSelector((state) => state.quiz);
  const [title, setTitle] = useState("");
  const [pageTitle, setPageTitle] = useState("Napravi novi kviz");
  const [buttonTitle, setButtonTitle] = useState("Napravi kviz");
  const [inputList, setInputList] = useState([
    { question: "", answer: "", id: 1 },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    // const list = [...inputList];
    const list = inputList.map((el) => {
      return { ...el };
    });
    list[index][name] = value;
    setInputList(list);
  };

  const setRecycle = (i, question) => {
    const list = inputList.map((el) => {
      return { ...el };
    });
    list[i] = { ...question, id: i + 1 };
    setInputList(list);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    for (let i = index; i < inputList.length; i++) {
      list[i].id = list[i].id - 1;
    }
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = (i) => {
    setInputList([...inputList, { question: "", answer: "", id: i + 2 }]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const quizData = { name: title, questions: inputList };
    if (Object.keys(quiz).length > 0) {
      dispatch(updateQuiz({ id, quizData }));
    } else {
      dispatch(createQuiz(quizData));
    }
  };

  useEffect(() => {
    if (Object.keys(quiz).length > 0) {
      setTitle(quiz.name);
      setPageTitle("Izmijeni kviz");
      setButtonTitle("Izmijeni kviz");
      if (quiz.questions.length > 0) {
        setInputList([...quiz.questions]);
      }
    } else {
      setTitle("");
      setPageTitle("Napravi novi kviz");
      setButtonTitle("Napravi kviz");
      setInputList([{ question: "", answer: "", id: 1 }]);
    }
  }, [quiz]);

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
      dispatch(reset());
      navigate("/review");
    }
    if (isError) {
      toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [isSuccess, isError]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex pt-lg-1 pt-1 row g-md-3 align-items-center container p-4">
        <h3 className="text-center mb-4 mt-4">{pageTitle}</h3>
        <label
          htmlFor="title"
          className={"col-md-2 col-form-label text-start m-0"}
        >
          Naziv kviza
        </label>
        <div className={"col-md-10 mt-0"}>
          <input
            type="text"
            className="form-control "
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            placeholder="Unesite naziv kviza"
            required
          />
        </div>
        {inputList.map((x, i) => (
          <Fragment key={i}>
            <div className="col-md-12 mt-3 mt-md-3">
              <div className="col-md-12">
                <p className="m-0 mb-2">{i + 1}. Pitanje</p>
                <input
                  value={x.question}
                  onChange={(e) => handleInputChange(e, i)}
                  type="text"
                  className="form-control "
                  id="question"
                  name="question"
                  placeholder="Unesite pitanje"
                  required
                />
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <p className="m-0 mb-2">Odgovor</p>
                  <input
                    value={x.answer}
                    onChange={(e) => handleInputChange(e, i)}
                    type="text"
                    className="form-control "
                    id="answer"
                    name="answer"
                    placeholder="Unesite odgovor"
                    required
                  />
                </div>

                <div className="col-md-6 mt-2 mt-md-0 d-flex align-self-end ">
                  {inputList.length - 1 === i && (
                    <button
                      onClick={() => handleAddClick(i)}
                      type="button"
                      className="btn btn-primary me-1"
                    >
                      Dodaj pitanje
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-primary me-1 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Recikliraj
                  </button>
                  <ul className="dropdown-menu">
                    {questions.length > 0 ? (
                      questions.map((question) => {
                        return (
                          <li key={question.id}>
                            <a
                              className="dropdown-item"
                              onClick={() => setRecycle(i, question)}
                            >
                              {question.question}
                            </a>
                          </li>
                        );
                      })
                    ) : (
                      <li>Trenutno nema pitanja za recikliranje</li>
                    )}
                  </ul>
                  {inputList.length !== 1 && (
                    <button
                      onClick={() => handleRemoveClick(i)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Izbrisi
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Fragment>
        ))}
        <div className="mt-5 text-center">
          <button type="submit" className="btn btn-info btn-rsp">
            {buttonTitle}
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuizForm;

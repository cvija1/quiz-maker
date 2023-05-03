import { useState } from "react";

const QuizForm = () => {
  const [title, setTitle] = useState("");
  const [inputList, setInputList] = useState([
    { question: "", answer: "", id: 1 },
  ]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
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
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex pt-lg-1 pt-1 row g-md-3 align-items-center container p-4">
        <h3 className="text-center mb-4 mt-4">Napravi novi kviz</h3>
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
          <>
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
                  <button type="button" className="btn btn-primary me-1">
                    Recikliraj
                  </button>
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
          </>
        ))}
        <div className="mt-5 text-center">
          <button type="submit" className="btn btn-info btn-rsp">
            Napravi kviz
          </button>
        </div>
      </div>
    </form>
  );
};

export default QuizForm;

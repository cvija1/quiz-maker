const QuizItem = () => {
  return (
    <tr
      onClick={() => console.log("sss")}
      style={{ cursor: "pointer" }}
      className="table-dark"
    >
      <td className="d-flex align-items-center">
        <div>Kviz 1</div>
        <div className="ms-auto d-flex">
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("ddd");
              }}
              type="button"
              className="btn btn-success"
            >
              Pokreni
            </button>
          </div>
          <div className="me-2 ms-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("eee");
              }}
              type="button"
              className="btn btn-danger"
            >
              Izbrisi
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default QuizItem;

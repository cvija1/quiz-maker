import QuizItem from "./QuizItem";

const Table = ({ quizzes }) => {
  return (
    <div className="flex-grow-1 bg-primary ">
      <div className="container rounded bg-dark p-4 text-white mt-4">
        <div className="container p-0 ">
          <div className="h5 mb-4 ">
            <p>Spisak svih kvizova</p>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr className="table-dark">
                <th scope="col">Naziv kviza</th>
              </tr>
            </thead>
            <tbody>
              {quizzes?.map((quiz) => (
                <QuizItem key={quiz.id} quiz={quiz} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

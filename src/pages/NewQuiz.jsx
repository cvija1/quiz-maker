import QuizForm from "../components/QuizForm";

const NewQuiz = () => {
  return (
    <div className="flex-grow-1 bg-primary d-flex justify-content-center row m-0">
      <div className="bg-dark text-white col-11 col-sm-8 col-lg-5 hero rounded  border border-2 border-dark mt-4 mb-4">
        <QuizForm />
      </div>
    </div>
  );
};

export default NewQuiz;

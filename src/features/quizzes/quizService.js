import axios from "axios";
const API_URL = "https://64520028bce0b0a0f739fb2f.mockapi.io/quizzes/";
const API_QUESTION = "https://64520028bce0b0a0f739fb2f.mockapi.io/questions/";

const createQuiz = async (quizData) => {
  const questionForm = quizData.questions.map((el) => {
    return { ...el };
  });
  const questions = questionForm.map((question) => ({
    question: question.question,
    answer: question.answer,
  }));
  const questionsForMock = { questions };
  console.log(quizData);
  await axios.post(API_QUESTION, questionsForMock);
  const response = await axios.post(API_URL, quizData);

  return response.data;
};

const updateQuiz = async (quizId, quizData) => {
  //kada bi postojao backend bio bi dovoljan jedan PUT request a zatim bi se podaci kopirali u tabelu questions
  const questions = quizData.questions.map((el) => {
    return { ...el };
  });
  questions.forEach((question) => {
    delete question["id"];
  });

  const questionsForMock = { questions };
  await axios.post(API_QUESTION, questionsForMock);
  const response = await axios.put(API_URL + quizId, quizData);
  return response.data;
};

const getQuizzes = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getQuestions = async () => {
  const response = await axios.get(API_QUESTION);
  const data = response.data;
  //ova f-ja bi se mijenjala kad se implementira backend
  const arrOfArrOfQuestions = data.map((questionObject) => {
    return questionObject.questions;
  });
  const arrOfQuestions = arrOfArrOfQuestions.reduce((acc, arr) => {
    return [...acc, ...arr];
  }, []);

  console.log(arrOfQuestions);
  //filtriranje na frontu ne preporucujem al posto ne postoji backend implementiran moram ovako (MockApi)
  const uniqueQuestions = arrOfQuestions.filter((question, index, arr) => {
    return index === arr.findIndex((o) => o.question === question.question);
  });

  return uniqueQuestions;
};

const getQuiz = async (quizId) => {
  const response = await axios.get(API_URL + quizId);
  return response.data;
};

const deleteQuiz = async (quizId) => {
  const response = await axios.delete(API_URL + quizId);
  return response.data;
};

const quizService = {
  createQuiz,
  getQuizzes,
  getQuiz,
  deleteQuiz,
  updateQuiz,
  getQuestions,
};

export default quizService;

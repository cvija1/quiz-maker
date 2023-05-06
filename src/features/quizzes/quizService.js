import axios from "axios";
const API_URL = "https://64520028bce0b0a0f739fb2f.mockapi.io/quizzes/";
const API_QUESTION = "https://64520028bce0b0a0f739fb2f.mockapi.io/questions/";

const createQuiz = async (quizData) => {
  const response = await axios.post(API_URL, quizData);
  return response.data;
};

const updateQuiz = async (quizId, quizData) => {
  const response = await axios.put(API_URL + quizId, quizData);
  return response.data;
};

const getQuizzes = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const getQuestions = async () => {
  const response = await axios.get(API_QUESTION);
  return response.data;
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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quizService from "./quizService";

const initialState = {
  quizzes: [],
  additional: [],
  questions: [],
  quiz: {},
  isSuccess: false,
  isError: false,
  isLoading: false,
  message: "",
};

export const createQuiz = createAsyncThunk(
  "quiz/create",
  async (quizData, thunkAPI) => {
    try {
      return await quizService.createQuiz(quizData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getQuizzes = createAsyncThunk(
  "quizzes/getQuizzes",
  async (_, thunkAPI) => {
    try {
      return await quizService.getQuizzes();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getQuestions = createAsyncThunk(
  "quizzes/getQusetions",
  async (_, thunkAPI) => {
    try {
      return await quizService.getQuestions();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getQuiz = createAsyncThunk(
  "quiz/get",
  async (quizId, thunkAPI) => {
    try {
      return await quizService.getQuiz(quizId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateQuiz = createAsyncThunk(
  "quiz/update",
  async (formData, thunkAPI) => {
    try {
      const { id, quizData } = formData;
      return await quizService.updateQuiz(id, quizData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteQuiz = createAsyncThunk(
  "quizzes/delete",
  async (quizId, thunkAPI) => {
    try {
      return await quizService.deleteQuiz(quizId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuiz.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Uspjesno ste dodali novi kviz";
      })
      .addCase(createQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(updateQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQuiz.fulfilled, (state, action) => {
        state.quiz = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Uspjesno ste izmijenili kviz";
      })
      .addCase(updateQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(getQuizzes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuizzes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quizzes = action.payload || [];
      })
      .addCase(getQuizzes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.questions = action.payload || [];
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quiz = action.payload;
      })
      .addCase(getQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteQuiz.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Uspjesno izbrisan kviz";
      })
      .addCase(deleteQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = quizSlice.actions;
export default quizSlice.reducer;

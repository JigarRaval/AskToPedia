import "../../assets/CSS/AskQuestion.css"
import { useForm } from "react-hook-form";

export const AskQuestion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Question Submitted:", data);
  };

  return (
    <div className="question-form-container">
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title:</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          placeholder="Enter a short and descriptive title"
        />
        {errors.title && <p className="error">{errors.title.message}</p>}

        <label>Description:</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Provide a detailed description of your question"
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}

        <label>Tags:</label>
        <input
          type="text"
          {...register("tags")}
          placeholder="Add relevant tags, separated by commas"
        />

        <button type="submit">Post Question</button>
      </form>
    </div>
  );
};


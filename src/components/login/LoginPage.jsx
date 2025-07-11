// LoginPage.jsx
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (!data.username || !data.password) {
      alert("Please fill all fields");
      return;
    }
    login("fake-login-token");
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} className="form-control mb-3" placeholder="Username" />
        <input {...register("password", { required: true })} type="password" className="form-control mb-3" placeholder="Password" />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/user";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import api from "../../services/api";
import { FormRegister } from "../../components/Form";
import { Button } from "../../components/Button";
import { ContainerForm } from "../../styles/container";

const Register = ({ navigate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    api
      .post(`/users`, data)
      .then(() => {
        toast.success("Usuario criaado com sucesso!");

        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2500);
      })
      .catch((err) => {
        // toast.error(err.response.data.message);
        toast.error("Email já existe", {
          style: {
            background: "var(--color-gray-3)",
            color: "var(--color-gray-0)",
            width: "20%",
            height: "60px",
          },
        });
      });
  };

  return (
    <ContainerForm>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Kenzie Hub</h1>
      <FormRegister onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <p>Nome</p>
          <input id="name" {...register("name")} />
          <h4>{errors.name?.message}</h4>
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input id="email" {...register("email")} />
          <h4>{errors.email?.message}</h4>
        </label>
        <label htmlFor="password">
          <p>Senha</p>
          <input type="password" id="password" {...register("password")} />
          <h4>{errors.password?.message}</h4>
        </label>
        <label htmlFor="passwordConfirm">
          <p>Confirmar senha</p>
          <input
            type="password"
            id="passwordConfirm"
            {...register("passwordConfirm")}
          />
          <h4>{errors.passwordConfirm?.message}</h4>
        </label>
        <label htmlFor="bio">
          <p>Bio</p>
          <input id="bio" {...register("bio")} />
          <h4>{errors.bio?.message}</h4>
        </label>
        <label htmlFor="contact">
          <p>Contato</p>
          <input id="contact" {...register("contact")} />
          <h4>{errors.contact?.message}</h4>
        </label>

        <label htmlFor="course_module">
          <p>Selecionar módulo</p>
          <select id="course_module" {...register("course_module")}>
            <option value="">Módulo</option>
            <option value="1o Módulo">Módulo 01</option>
            <option value="2o Módulo">Módulo 02</option>
            <option value="3o Módulo">Módulo 03</option>
            <option value="4o Módulo">Módulo 04</option>
            <option value="5o Módulo">Módulo 05</option>
            <option value="6o Módulo">Módulo 06</option>
            <option value="Graduated">Formado</option>
          </select>
          <h4>{errors.course_module?.message}</h4>
        </label>
        <p>
          Já possui uma conta? <Link to={"/login"}>Entrar</Link>
        </p>
        <Button type="submit">Cadastrar</Button>
      </FormRegister>
    </ContainerForm>
  );
};

export default Register;

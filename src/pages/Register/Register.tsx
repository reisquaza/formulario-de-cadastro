import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/user";
import { Link } from "react-router-dom";
import { FormRegister } from "../../components/Form";
import { Button } from "../../components/Button";
import { ContainerForm } from "../../styles/container";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { iData } from "../../contexts/UserContexts";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iData>({
    resolver: yupResolver(registerSchema),
  });

  const { singUp } = useContext(UserContext);

  return (
    <ContainerForm>
      <h1>Kenzie Hub</h1>
      <FormRegister onSubmit={handleSubmit(singUp)}>
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
          <p>Selecionar m??dulo</p>
          <select id="course_module" {...register("course_module")}>
            <option value="">M??dulo</option>
            <option value="1o M??dulo(FrontEnd Iniciante)">M??dulo 01</option>  
            <option value="2o M??dulo(FrontEnd Avan??ado)">M??dulo 02</option>
            <option value="3o M??dulo(FrondEnd Intermedi??rio)">M??dulo 03</option>
            <option value="4o M??dulo(BackEnd Iniciante)">M??dulo 04</option>
            <option value="5o M??dulo(BackEnd Avan??ado)">M??dulo 05</option>
            <option value="6o M??dulo(FullStack)">M??dulo 06</option>
            <option value="Formado(FullStack)">Formado</option>
          </select>
          <h4>{errors.course_module?.message}</h4>
        </label>

        <p>
          J?? possui uma conta? <Link to={"/login"}>Entrar</Link>
        </p>
        <Button type="submit">Cadastrar</Button>
      </FormRegister>
    </ContainerForm>
  );
};

export default Register;

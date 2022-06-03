import "./login.component.css";
import Button from "../button/button.component";

const Login = () => {
  return (
    <div className="login--content">
      <div className="login--content--textbox">
        <label for="fname">Usuario</label>
        <input type="text" />
        <label for="fclave">Clave</label>
        <input type="text" />
      </div>
      <div className="login--buttons">
        <Button colorButton="#1883ba" textButton="Iniciar Sesión"></Button>
        <Button colorButton="#949494" textButton="Cancelar"></Button>
      </div>
    </div>
  );
};

export default Login;

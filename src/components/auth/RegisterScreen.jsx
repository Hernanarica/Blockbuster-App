import { Link } from "react-router-dom";

function RegisterScreen() {
	return (
		<section className="wrapper register-section">
			<h2 className="form__title">Registrate</h2>
			<form action="" className="register__form">
				<div className="register__form-content">
					<label htmlFor="name" className="register__form-field-title">Ingresa tu nombre</label>
					<input type="text" name="name" className="register__form-field" id="name" placeholder="Ingresa tu nombre" />
				</div>
				<div className="register__form-content">
					<label htmlFor="email" className="register__form-field-title">Ingresa tu email</label>
					<input type="email" name="email" className="register__form-field" id="email" placeholder="Ingresa tu email" />
				</div>
				<div className="register__form-content">
					<label htmlFor="password" className="register__form-field-title">Ingresa tu password</label>
					<input type="password" name="password" className="register__form-field" id="password" placeholder="Ingresa tu password" />
				</div>
				<button type="submit" className="btn btn--active">
					Registrar
				</button>
				<p className="helps__text">¿Ya estas registrado? <Link to="/login" className="helps__link">Inicia sesión</Link>
				</p>
			</form>
		</section>
	);
}

export default RegisterScreen;
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase/firebase.config";

function RegisterScreen() {
	const user = {
		name: 'Hernan',
		lastname: 'Arica',
		email: 'hernommm@gmail.com',
		password: 'asdf1234'
	}
	
	const handleSubmit = e => {
		e.preventDefault();
		
		const { email, password } = user;
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
		
		console.log('registrando...');
	};
	
	return (
		<section className="wrapper register-section">
			<h2 className="form__title">Registrate</h2>
			<form className="register__form"
			      onSubmit={ handleSubmit }
			>
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
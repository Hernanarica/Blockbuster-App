import { Link } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider } from "../../firebase/firebase.config";
import getImagePath from "../../helpers/getImagePath";

function LoginScreen() {
	const user = {
		email: 'hernommm@gmail.com',
		password: 'asdf1234'
	};
	
	const handleSubmit = e => {
		e.preventDefault();
		console.log('Login...');
		
		signInWithEmailAndPassword(auth, user.email, user.password)
			.then(r => {
				console.log(r);
			}).catch(err => {
			console.log(err);
		});
	};
	
	const handleLoginWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then(r => {
				console.log(r);
			}).catch((error) => {
			console.log(error);
		});
	};
	
	
	return (
		<section className="wrapper login-section">
			<h2 className="form__title">Inicia sesión</h2>
			<form action="#"
			      className="login__form"
			      onSubmit={ handleSubmit }
			>
				<div className="login__form-content">
					<label htmlFor="email" className="login__form-field-title">Ingresa tu email</label>
					<input type="email" name="email" className="login__form-field" id="email" placeholder="Ingresa tu email" autoComplete="off" />
				</div>
				<div className="login__form-content">
					<label htmlFor="password" className="login__form-field-title">Ingresa tu password</label>
					<input type="password" name="password" className="login__form-field" id="password" placeholder="Ingresa tu password" autoComplete="off" />
				</div>
				<button type="submit" className="btn btn--active">
					Iniciar sesión
				</button>
				<button className="btn" onClick={ handleLoginWithGoogle }>
					<img src={ getImagePath('login-google.png') } alt="Google" />
				</button>
				<p className="helps__text">¿Aún no tenés una cuenta? <Link to="/register" className="helps__link">Registrate</Link>
				</p>
			</form>
		</section>
	);
}

export default LoginScreen;
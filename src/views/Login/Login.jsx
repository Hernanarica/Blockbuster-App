import { Link } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";
import { auth, googleProvider, db } from "../../firebase/firebase.config";
import getImagePath from "../../helpers/getImagePath";
import useForm from "../../hooks/useForm";

function LoginScreen() {
	const [ formValues, handleInputChange ] = useForm({
		email: '',
		password: ''
	});
	
	const handleSubmit = e => {
		e.preventDefault();
		
		signInWithEmailAndPassword(auth, formValues.email, formValues.password)
			.then(async ({ user: { uid } }) => {
				console.log(uid);
			}).catch(err => {
			console.log(err);
		});
	};
	
	const handleLoginWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((r) => {
				// Guardamos el uid en firestore para asignar rol a los usuarios
				console.log(r);
			}).catch((error) => {
			console.log(error);
		});
	};
	
	
	const handleRecoverPassword = () => {
		console.log('recovering password, check your mail...');
		
		const email = 'hernan.arica@kickas.mobi'
		sendPasswordResetEmail(auth, email)
			.then((r) => {
				// Password reset email sent!
				// ..
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
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
					<input type="email"
					       name="email"
					       className="login__form-field"
					       id="email"
					       placeholder="Ingresa tu email"
					       autoComplete="off"
					       onChange={ handleInputChange }
					/>
				</div>
				<div className="login__form-content">
					<label htmlFor="password" className="login__form-field-title">Ingresa tu password</label>
					<input type="password"
					       name="password"
					       className="login__form-field"
					       id="password"
					       placeholder="Ingresa tu password"
					       autoComplete="off"
					       onChange={ handleInputChange }
					/>
				</div>
				<button type="submit" className="btn btn--active">
					Iniciar sesión
				</button>
				<div className="btn" onClick={ handleLoginWithGoogle }>
					<img src={ getImagePath('login-google.png') } alt="Google" />
				</div>
				<p className="helps__text">
					¿Aún no tenés una cuenta?
					<Link to="/register" className="helps__link"> Registrate</Link>
				</p>
				<p className="helps__text">
					¿No recordas tu password?
					<span className="helps__link" onClick={ handleRecoverPassword}> Recuperala</span>
				</p>
			</form>
		</section>
	);
}

export default LoginScreen;
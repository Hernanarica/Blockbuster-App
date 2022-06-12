import { Link } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore";
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
			.then(async ({ user: { displayName, email, uid } }) => {
				// Obtenemos el documento por uid de firestore
				const docRef  = doc(db, `usuarios/${ uid }`);
				const docSnap = await getDoc(docRef);
				
				if (docSnap.exists()) {
					console.log('Usuario existente!', docSnap.data());
				} else {
					console.log("Creando usuario en firestore...");
					// Creamos al usuario
					const user = {
						displayName,
						email,
						uid,
						role: ''
					};
					
					// Grabamos en firestore al usuario
					await setDoc(doc(db, `usuarios/${ uid }`), {
						...user
					});
				}
			}).catch((error) => {
			console.log(error);
		});
	};
	
	return (
		<section className="wrapper login-section">
			<h2 className="form__title">Inicia sesión</h2>
			<form action="#" className="login__form" onSubmit={ handleSubmit }>
				<div className="login__form-content">
					<label htmlFor="email" className="login__form-field-title">Ingresa tu email</label>
					<input type="email" name="email" className="login__form-field" id="email" placeholder="Ingresa tu email" autoComplete="off" onChange={ handleInputChange } />
				</div>
				<div className="login__form-content">
					<label htmlFor="password" className="login__form-field-title">Ingresa tu password</label>
					<input type="password" name="password" className="login__form-field" id="password" placeholder="Ingresa tu password" autoComplete="off" onChange={ handleInputChange } />
				</div>
				<button type="submit" className="btn btn--active">
					Iniciar sesión
				</button>
				<div className="btn" onClick={ handleLoginWithGoogle }>
					<img src={ getImagePath('login-google.png') } alt="Google" />
				</div>
				<p className="helps__text">
					¿Aún no tenés una cuenta? <Link to="/register" className="helps__link"> Registrate</Link>
				</p>
				<p className="helps__text">
					¿No recordas tu password? <span className="helps__link"> Recuperala</span>
				</p>
			</form>
		</section>
	);
}

export default LoginScreen;
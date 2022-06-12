import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth, db, googleProvider } from "../../firebase/firebase.config";
import useForm from "../../hooks/useForm";

function RegisterScreen() {
	const [ formValues, handleInputChange ] = useForm({
		name: '',
		email: '',
		rol: '',
		password: ''
	});
	
	const handleSubmit = e => {
		e.preventDefault();
		
		createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
			.then(async (userCredential) => {
				const { uid } = userCredential.user;
				
				// updateProfile(auth.currentUser, {
				// 	displayName: `"{"name": "${ formValues.name }", "rol": "${ formValues.rol }"}"`
				// }).catch((error) => {
				// 	console.log(error);
				// });
				
				await setDoc(doc(db, `usuarios/${ uid }`), {
					...formValues
				});
				
				console.log('registrando...');
			})
	};
	
	return (
		<section className="wrapper register-section">
			<h2 className="form__title">Registrate</h2>
			<form className="register__form"
			      onSubmit={ handleSubmit }
			>
				<div className="register__form-content">
					<label htmlFor="name" className="register__form-field-title">Ingresa tu nombre</label>
					<input type="text"
					       name="name"
					       className="register__form-field"
					       id="name"
					       placeholder="Ingresa tu nombre"
					       onChange={ handleInputChange }
					/>
				</div>
				<div className="register__form-content">
					<label htmlFor="email" className="register__form-field-title">Ingresa tu email</label>
					<input type="email"
					       name="email"
					       className="register__form-field"
					       id="email"
					       placeholder="Ingresa tu email"
					       onChange={ handleInputChange }
					/>
				</div>
				<div className="register__form-content">
					<label htmlFor="rol" className="register__form-field-title">Rol</label>
					<select name="rol" id="rol" className="register__form-field" onChange={ handleInputChange }>
						<option value="Selecciona aun rol">Selecciona aun rol</option>
						<option value="Admin">Admin</option>
						<option value="Finance">Finance</option>
						<option value="Accounting-colombia">Accounting-colombia</option>
					</select>
				</div>
				<div className="register__form-content">
					<label htmlFor="password" className="register__form-field-title">Ingresa tu password</label>
					<input type="password"
					       name="password"
					       className="register__form-field"
					       id="password"
					       placeholder="Ingresa tu password"
					       onChange={ handleInputChange }
					/>
				</div>
				<button type="submit" className="btn btn--active">
					Registrar
				</button>
				<p className="helps__text">
					¿Ya estas registrado?
					<Link to="/login" className="helps__link"> Inicia sesión</Link>
				</p>
			</form>
		</section>
	);
}

export default RegisterScreen;
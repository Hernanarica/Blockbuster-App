import AppRouter from "./router/AppRouter";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Context from "./context/Context";

function App() {
	const [ user, setUser ] = useState( {})
	const [ authenticated, setAuthenticated ] = useState( false)
	
	useEffect(() => {
		onAuthStateChanged(auth, async (userCredentials) => {
			if (userCredentials) {
				// Camino 2(En base al uid obtenemos los datos del usuario de firestore)
				const docRef = doc(db, `usuarios/${ userCredentials.uid }`);
				const docSnap = await getDoc(docRef);
				
				if (docSnap.exists()) {
					console.log("Document data:", docSnap.data());
					setUser(docSnap.data())
					setAuthenticated(true)
				} else {
					console.log("No such document!");
				}
				
			} else {
				// User is signed out
			}
		});
	}, []);
	
	
	
	return (
		<Context.Provider value={ { user, authenticated } }>
			<AppRouter />
		</Context.Provider>
	);
}

export default App;
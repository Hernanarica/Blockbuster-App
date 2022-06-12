import { createContext } from "react";

const Context = createContext({
	user: {},
	authenticated: false
});

export default Context;
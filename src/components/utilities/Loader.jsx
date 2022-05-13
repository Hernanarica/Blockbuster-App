import { SpinnerCircular } from "spinners-react";

function Loader({ size }) {
	return (
		<div className="loader">
			<SpinnerCircular size={ size } color="#fed941" />
		</div>
	);
}

export default Loader;
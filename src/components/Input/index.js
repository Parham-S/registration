import "./style.css";

function Input({ text }) {
	return (
		<div className='input'>
			<input placeholder={text} />
		</div>
	);
}

export default Input;

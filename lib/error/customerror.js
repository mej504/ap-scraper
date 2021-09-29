const ErrorWithCode = ( msg, code ) => {
	let error = new Error( msg );
	error.code = code;
	return error;
}

const TypeErrorWithCode = ( msg, code ) => {
	let error = new TypeError( msg );
	error.code = code;
	return error;
}

module.exports = {
	ErrorWithCode,
	TypeErrorWithCode
}

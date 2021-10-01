const ErrorWithCode = ( msg, code ) => {
	let error = new Error( msg );
	error.code = code;
	return error;
}

module.exports = ErrorWithCode;

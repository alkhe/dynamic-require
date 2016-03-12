import reg from 'babel-register';

export default sourceRoot => {
	reg({ sourceRoot });
	return require;
};

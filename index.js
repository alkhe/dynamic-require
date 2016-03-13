import register from 'babel-register';
import { join } from 'path';

export default (relativePath, options) => {
	register(options);
	// require . join relativePath
	return path => require(join(relativePath, path));
};

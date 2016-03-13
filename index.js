import register from 'babel-register';
import { join, isAbsolute } from 'path';

export default (relativePath, options) => {
	register(options);
	return path =>
		require(isAbsolute(path) ? path : join(relativePath, path));
};

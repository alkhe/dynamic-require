import register from 'babel-register';
import { join } from 'path';

export default (relativePath, options) => {
	register(options);
	return (path, absolute = false) =>
		require(absolute ? path : join(relativePath, path));
};

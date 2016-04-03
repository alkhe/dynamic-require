import { join } from 'path';

export let plain = (relativePath) =>
	(path, absolute = false) =>
		require(absolute ? path : join(relativePath, path));

export let babel = (relativePath, babelOptions) => {
	require('babel-register')({
		ast: false,
		comments: false,
		compact: true,
		...babelOptions
	});
	return plain(relativePath);
};

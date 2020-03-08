import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import { argv } from 'yargs';

const format = argv.format || argv.f || 'iife';
const compress = argv.uglify;

const babelOptions = {
  exclude: 'node_modules/**',
  presets: [['@babel/preset-env', { modules: false }]],
  babelrc: false
};

const dest = {
  amd: `dist/amd/i18nextICU${compress ? '.min' : ''}.js`,
  umd: `dist/umd/i18nextICU${compress ? '.min' : ''}.js`,
  iife: `dist/iife/i18nextICU${compress ? '.min' : ''}.js`
}[format];

export default {
  entry: 'src/index.js',
  format,
  plugins: [
    babel(babelOptions),
    nodeResolve({ jsnext: true })
  ].concat(compress ? uglify() : []),
  moduleName: 'i18nextICU',
  //moduleId: 'i18nextXHRBackend',
  dest
};

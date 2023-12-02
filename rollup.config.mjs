import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: "src/index.js",
  output: {
    file: "cdn/bundle.js",
    format: "cjs",
  },
  plugins: [nodeResolve({ browser: true }), commonjs(), builtins(), terser()],
};

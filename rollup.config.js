import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import url from "@rollup/plugin-url";
import imagemin from "rollup-plugin-imagemin";
import replace from "@rollup/plugin-replace";
import path from "path";

export default {
  input: "./src/App.jsx",
  output: {
    file: "dist/App.jsx",
    format: "cjs",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    resolve({ extensions: [".js", ".jsx", ".json"] }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      babelrc: false,
      babelHelpers: "runtime",
      plugins: [
        "emotion",
        [
          "@babel/plugin-transform-runtime",
          {
            regenerator: true,
          },
        ],
      ],
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    copy({
      targets: [
        { src: "src/index.html", dest: "dist/" },
        { src: "src/images/loader.svg", dest: "dist/" },
      ],
    }),
    url({
      destDir: "dist",
      fileName: "[name][extname]",
      include: ["**/*.otf", "**/*.ttf"],
    }),
    ...(process.env.NODE_ENV === "development"
      ? //Development Plugins
        [
          url({
            destDir: "dist",
            fileName: "[name][extname]",
            include: [
              "**/*.svg",
              "**/*.png",
              "**/*.gif",
              "**/*.jpg",
              "**/*.jpeg",
            ],
          }),
          serve({
            contentBase: "dist",
            port: 1234,
            historyApiFallback: true,
          }),
          livereload({
            watch: [path.resolve(__dirname, "dist")],
            exts: [
              "html",
              "jsx",
              "png",
              "otf",
              "tff",
              "jpeg",
              "jpg",
              "svg",
              "gif",
            ],
          }),
        ]
      : //Production Plugins
        [
          imagemin(),
          terser({
            mangle: true,
            compress: {
              warnings: false,
              pure_getters: true,
              unsafe: true,
              unsafe_comps: true,
              ie8: true,
              conditionals: true,
              unused: true,
              comparisons: true,
              sequences: true,
              drop_console: true,
              dead_code: true,
              evaluate: true,
              if_return: true,
              join_vars: true,
            },
            output: {
              comments: false,
            },
            exclude: [/\.min\.js$/gi],
          }),
        ]),
  ],
};

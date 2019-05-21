import svgo from 'rollup-plugin-svgo';

export default {
  plugins: [
    svgo({
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeDimensions: true,
        },
      ],
    }),
  ],
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src", // alias gốc, bạn chỉnh tùy dự án
            "@assets": "./assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
          },
        },
      ],
    ],
  };
};

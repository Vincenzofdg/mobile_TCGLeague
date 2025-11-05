module.exports = {
      presets: ['module:@react-native/babel-preset'],
      plugins: [
            [
                  'module-resolver',
                  {
                        root: ['./src'],
                        alias: {
                              types: './src/definitions/type/index',
                              screens: './src/screens/index',
                              styles: './src/styles/index',
                        },
                  },
            ],
      ],
};

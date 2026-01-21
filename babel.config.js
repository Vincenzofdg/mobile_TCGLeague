module.exports = {
      presets: ['module:@react-native/babel-preset'],
      plugins: [
            [
                  'module-resolver',
                  {
                        root: ['./src'],
                        alias: {
                              types: './src/definitions/type/index',
                              interfaces: './src/definitions/interface/index',
                              enums: './src/definitions/enum/index',
                              inheritances:
                                    './src/components/inheritance/index',
                              global: './src/global/index',
                              styles: './src/styles/index',
                              buttons: './src/components/button/index',
                              flatlists: './src/components/flatlist/index',
                        },
                  },
            ],
      ],
};

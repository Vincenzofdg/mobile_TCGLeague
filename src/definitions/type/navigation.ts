export type RootTabList = {
      Home: undefined;
      Profile: undefined;
};

export type RootStackList = {
      HomeTab: undefined;
};

export type RootStackTabList = {};

export type RootList = RootStackList & RootTabList & RootStackTabList;

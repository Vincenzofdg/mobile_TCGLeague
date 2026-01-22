export interface IMatchMode {
      tcg: ITcgConfig;
}

export interface ITcgConfig {
      id: number;
      name: string;
      rawName: string;
      url?: string;
}

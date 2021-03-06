const userConfig = { default: {} };

interface Config {
  readonly [propName: string]: any;
}

interface IUserConfig {
  readonly default?: any;
  readonly [key: string]: any;
}
const config: Config = {
  ...((userConfig as IUserConfig).default || {}),
  ...(userConfig[(globalThis as any).__app_mode__ || process.env.APP_MODE] ||
    {}),
};

const APP_MODE = (globalThis as any).__app_mode__ || process.env.APP_MODE;

export { config, APP_MODE };

type Config = {
  runnerEndpoint?: string;
};

const devConfig: Config = {
  runnerEndpoint: "http://localhost:8000",
};

const prodConfig: Config = {
  runnerEndpoint: "https://ec2-18-212-33-18.compute-1.amazonaws.com",
};

export function getConfig(): Config {
  const environment = process.env.NODE_ENV;

  switch (environment) {
    case "production":
      return prodConfig;
    default:
      return devConfig;
  }
}

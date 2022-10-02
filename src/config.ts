type Config = {
  runnerEndpoint: string;
  exercisesEndpoint: string;
};

const devConfig: Config = {
  runnerEndpoint: "http://localhost:8000",
  exercisesEndpoint: "http://localhost:8001",
};

const prodConfig: Config = {
  runnerEndpoint: "http://ec2-18-212-33-18.compute-1.amazonaws.com",
  exercisesEndpoint: "http://ec2-54-227-179-107.compute-1.amazonaws.com",
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

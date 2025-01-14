import webpack from "webpack";
import path from "path";

import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPath, BuildPlatform } from "./config/build/types/types";

interface EnvVariable {
  mode?: BuildMode;
  port?: number;
  platform?: BuildPlatform;
  analyzer?: boolean;
}

export default (env: EnvVariable) => {
  const paths: BuildPath = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public")
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port || 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });

  return config;
};

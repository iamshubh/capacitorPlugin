declare module '@capacitor/core' {
  interface PluginRegistry {
    HelloCap: HelloCapPlugin;
  }
}

export interface HelloCapPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  greet(name: string): string;
}

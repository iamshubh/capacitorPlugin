import { WebPlugin } from '@capacitor/core';
import { HelloCapPlugin } from './definitions';

export class HelloCapWeb extends WebPlugin implements HelloCapPlugin {
  constructor() {
    super({
      name: 'HelloCap',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  greet(name: string): string {
    return `hello ${name}`;
  }

}

const HelloCap = new HelloCapWeb();

export { HelloCap };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HelloCap);

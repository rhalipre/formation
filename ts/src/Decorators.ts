import {log} from './Utils';
import {Music, Musician} from './Musician';

export function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;
  if(originalMethod) {
    descriptor.value = (...args: any[]) => {
      const result = originalMethod.apply(target, args);
      log(result);
      return result;
    };
  }
  return descriptor;
}

export function JazzMan<T extends new(...args:any[]) => Musician >(constructor:T):T {
  return class extends constructor {
    constructor(...args:any[]) {
      super(...args);
      this.style = Music.JAZZ;
    }
  };
}

export function Rocker<T extends new(...args:any[]) => Musician >(constructor:T):T {
  return class extends constructor {
    constructor(...args:any[]) {
      super(...args);
      this.style = Music.ROCK;
    }
  };
}

export function StyleMusic(style: Music) {
  return function <T extends new(...args:any[]) => Musician >(constructor:T):T {
    return class extends constructor {
      constructor(...args:any[]) {
        super(...args);
        this.style = style;
      }
    };
  };
}
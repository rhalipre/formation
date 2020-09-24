import {log} from './Utils';

export default function display<T extends {toString(): void}>(array: T[]): void {
  array.forEach(element => log(element.toString()));
}
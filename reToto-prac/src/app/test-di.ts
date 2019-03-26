import { Injectable } from '@angular/core';

// tslint:disable-next-line:eofline
@Injectable()
export class Example {
  constructor(name: string) {
    console.log(name);
  }
}

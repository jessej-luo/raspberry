import { Injectable } from '@angular/core';

@Injectable()
export class TextService {
    text: any;
    constructor() { }

    getText() {
        return this.text;
    }

    setText(text) {
        this.text = text;
    }
}

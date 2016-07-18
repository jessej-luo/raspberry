import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    text: any;
    data: any;

    constructor() { }

    getText() {
        return this.text;
    }

    setText(text: string) {
        this.text = text;
    }

    setPredict(prediction_probability) {
        this.data = prediction_probability;
    }

    getPredict() {
        return this.data;
    }
}

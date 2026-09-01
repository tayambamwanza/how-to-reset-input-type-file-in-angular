import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <input #fileInput type="file" (change)="updateFileName(fileInput)">
        <h3> {{fileName()}} </h3>
    `,
})
export class App {
    fileName = signal('');

    updateFileName(input: HTMLInputElement) {
        if (input.files && input.files.length > 0) {
            this.fileName.set(input.files[0].name);
            input.value = '';
        }
    }
}
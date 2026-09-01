# how-to-reset-input-type-file-in-angular

#### run project

```npm run start```

## Why

When a user selects a file using an input element with the type of file i.e `<input type="file">`
the input fires a `(change)` and also creates an in-memory snapshot of the file's state.

If the file is edited before it is uploaded, 
it will not update the file input's snapshot.

The user might try and fix this by selecting the file again, 
but the input will not fire the `(change)` event nor update its snapshot,
because the file input will not update if the file-name/input string has not changed.

To fix this we can set the input elements input string to an empty string i.e. `input.value = '';`

## Post


```typescript
import { Component, signal } from '@angular/core';

@Component({
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
```

---

<details>
<summary><b>Summary of Modern Angular Changes (v2–16 vs. v17+)</b></summary>

- fyi standalone is the new default

| Category         | Pre-Angular 17 (v2–16) | Modern Angular (v17+)                      |
|:-----------------|:-----------------------|:-------------------------------------------|
| **Reactivity**   | `zone.js`              | `signals`                                  |
| **Architecture** | `NgModules`            | `standalone components, default since v19` |

</details>

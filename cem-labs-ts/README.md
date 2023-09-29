![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

## `<cem-labs-ts>`
An example element.


### `src/CemLabsTs.ts`:

#### class: `CemLabsTs`

##### Mixins

| Name                 | Module                | Package |
| -------------------- | --------------------- | ------- |
| `HighlightableMixin` | /src/highlightable.js |         |

##### Static Fields

| Name     | Privacy | Type    | Default                                                                                                                                                     | Description | Inherited From     |
| -------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------ |
| `styles` |         | `array` | ``[      (superClass as unknown as typeof LitElement).styles ?? [],      css`        .highlight {          background: lightsalmon;        }      `,    ]`` |             | HighlightableMixin |

##### Fields

| Name        | Privacy | Type      | Default       | Description                                      | Inherited From     |
| ----------- | ------- | --------- | ------------- | ------------------------------------------------ | ------------------ |
| `heading`   |         | `string`  | `'Hey there'` | The heading to say "Hello" to.                   |                    |
| `counter`   |         | `number`  | `5`           | The number of times the button has been clicked. |                    |
| `highlight` |         | `boolean` | `false`       |                                                  | HighlightableMixin |

##### Methods

| Name              | Privacy | Description        | Parameters         | Return   | Inherited From     |
| ----------------- | ------- | ------------------ | ------------------ | -------- | ------------------ |
| `#onClick`        |         |                    |                    |          |                    |
| `sayHello`        |         | Formats a greeting | `heading: string`  | `string` |                    |
| `renderHighlight` |         |                    | `content: unknown` |          | HighlightableMixin |

##### Events

| Name            | Type          | Description                      | Inherited From |
| --------------- | ------------- | -------------------------------- | -------------- |
| `counterchange` | `CustomEvent` | Indicates when the count changes |                |

##### Attributes

| Name        | Field     | Inherited From     |
| ----------- | --------- | ------------------ |
| `heading`   | heading   |                    |
| `counter`   | counter   |                    |
| `highlight` | highlight | HighlightableMixin |

##### Slots

| Name | Description             |
| ---- | ----------------------- |
|      | This element has a slot |

<hr/>

#### Exports

| Kind | Name        | Declaration | Module           | Package |
| ---- | ----------- | ----------- | ---------------- | ------- |
| `js` | `CemLabsTs` | CemLabsTs   | src/CemLabsTs.ts |         |

### `src/highlightable.ts`:

#### class: `HighlightableInterface`

##### Fields

| Name        | Privacy | Type      | Default | Description | Inherited From |
| ----------- | ------- | --------- | ------- | ----------- | -------------- |
| `highlight` |         | `boolean` |         |             |                |

##### Methods

| Name              | Privacy | Description | Parameters         | Return    | Inherited From |
| ----------------- | ------- | ----------- | ------------------ | --------- | -------------- |
| `renderHighlight` |         |             | `content: unknown` | `unknown` |                |

<hr/>

#### mixin: `HighlightableMixin`

##### Mixins

| Name          | Module | Package               |
| ------------- | ------ | --------------------- |
| `dedupeMixin` |        | @open-wc/dedupe-mixin |

##### Parameters

| Name         | Type | Default | Description |
| ------------ | ---- | ------- | ----------- |
| `superClass` | `T`  |         |             |

##### Static Fields

| Name     | Privacy | Type    | Default                                                                                                                                                     | Description | Inherited From |
| -------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `styles` |         | `array` | ``[      (superClass as unknown as typeof LitElement).styles ?? [],      css`        .highlight {          background: lightsalmon;        }      `,    ]`` |             |                |

##### Fields

| Name        | Privacy | Type      | Default | Description | Inherited From |
| ----------- | ------- | --------- | ------- | ----------- | -------------- |
| `highlight` |         | `boolean` | `false` |             |                |

##### Methods

| Name              | Privacy | Description | Parameters         | Return | Inherited From |
| ----------------- | ------- | ----------- | ------------------ | ------ | -------------- |
| `renderHighlight` |         |             | `content: unknown` |        |                |

##### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `highlight` | highlight |                |

<hr/>

#### Exports

| Kind | Name                     | Declaration            | Module               | Package |
| ---- | ------------------------ | ---------------------- | -------------------- | ------- |
| `js` | `HighlightableInterface` | HighlightableInterface | src/highlightable.ts |         |
| `js` | `HighlightableMixin`     | HighlightableMixin     | src/highlightable.ts |         |

### `src/styles/cem-labs-ts-styles.css.ts`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                               | Package |
| ---- | -------- | ----------- | ------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/cem-labs-ts-styles.css.ts |         |

An example element - define.


### `define/cem-labs-ts.ts`:

#### class: `BlkCemLabsTs`, `cem-labs-ts`

##### Static Fields

| Name     | Privacy | Type    | Default                                                                                                                                                     | Description | Inherited From |
| -------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `styles` |         | `array` | ``[      (superClass as unknown as typeof LitElement).styles ?? [],      css`        .highlight {          background: lightsalmon;        }      `,    ]`` |             | CemLabsTs      |

##### Fields

| Name        | Privacy | Type      | Default       | Description                                      | Inherited From |
| ----------- | ------- | --------- | ------------- | ------------------------------------------------ | -------------- |
| `highlight` |         | `boolean` | `false`       |                                                  | CemLabsTs      |
| `heading`   |         | `string`  | `'Hey there'` | The heading to say "Hello" to.                   | CemLabsTs      |
| `counter`   |         | `number`  | `5`           | The number of times the button has been clicked. | CemLabsTs      |

##### Methods

| Name              | Privacy | Description        | Parameters         | Return   | Inherited From |
| ----------------- | ------- | ------------------ | ------------------ | -------- | -------------- |
| `renderHighlight` |         |                    | `content: unknown` |          | CemLabsTs      |
| `#onClick`        |         |                    |                    |          | CemLabsTs      |
| `sayHello`        |         | Formats a greeting | `heading: string`  | `string` | CemLabsTs      |

##### Events

| Name            | Type          | Description                      | Inherited From |
| --------------- | ------------- | -------------------------------- | -------------- |
| `counterchange` | `CustomEvent` | Indicates when the count changes | CemLabsTs      |

##### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `highlight` | highlight | CemLabsTs      |
| `heading`   | heading   | CemLabsTs      |
| `counter`   | counter   | CemLabsTs      |

<hr/>

#### Exports

| Kind                        | Name           | Declaration  | Module                | Package |
| --------------------------- | -------------- | ------------ | --------------------- | ------- |
| `js`                        | `BlkCemLabsTs` | BlkCemLabsTs | define/cem-labs-ts.ts |         |
| `custom-element-definition` | `cem-labs-ts`  | BlkCemLabsTs | define/cem-labs-ts.ts |         |

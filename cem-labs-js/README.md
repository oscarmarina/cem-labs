![Lit](https://img.shields.io/badge/lit-2.0.0-blue)

## `<cem-labs-js>`
An example element.


### `src/CemLabsJs.js`:

#### class: `CemLabsJs`, `cem-labs-js`

##### Mixins

| Name                 | Module                | Package |
| -------------------- | --------------------- | ------- |
| `HellotableMixin`    | /src/hello.js         |         |
| `HighlightableMixin` | /src/highlightable.js |         |

##### Static Fields

| Name         | Privacy | Type     | Default                                                                                                                                    | Description | Inherited From     |
| ------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ------------------ |
| `properties` |         | `object` | `{      /**       * The heading to say "Hello" to.       */      heading: { type: String },    }`                                          |             | HighlightableMixin |
| `styles`     |         | `array`  | ``[      // @ts-ignore      superClass.styles ?? [],      css`        .highlight {          background: indianred;        }      `,    ]`` |             | HighlightableMixin |

##### Fields

| Name        | Privacy | Type      | Default       | Description                                      | Inherited From     |
| ----------- | ------- | --------- | ------------- | ------------------------------------------------ | ------------------ |
| `heading`   | public  | `string`  | `'Hey there'` | The heading to say "Hello" to.                   | HellotableMixin    |
| `counter`   | public  | `number`  | `5`           | The number of times the button has been clicked. |                    |
| `highlight` | public  | `boolean` | `false`       |                                                  | HighlightableMixin |

##### Methods

| Name              | Privacy | Description        | Parameters        | Return   | Inherited From     |
| ----------------- | ------- | ------------------ | ----------------- | -------- | ------------------ |
| `#onClick`        |         |                    |                   |          |                    |
| `sayHello`        |         | Formats a greeting | `heading: string` | `string` | HellotableMixin    |
| `renderHighlight` |         |                    | `content`         |          | HighlightableMixin |

##### Events

| Name            | Type | Description                      | Inherited From |
| --------------- | ---- | -------------------------------- | -------------- |
| `counterchange` |      | Indicates when the count changes |                |

##### Attributes

| Name        | Field     | Inherited From     |
| ----------- | --------- | ------------------ |
| `heading`   | heading   | HellotableMixin    |
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
| `js` | `CemLabsJs` | CemLabsJs   | src/CemLabsJs.js |         |

### `src/hello.js`:

#### mixin: `HellotableMixin`

##### Mixins

| Name          | Module | Package               |
| ------------- | ------ | --------------------- |
| `dedupeMixin` |        | @open-wc/dedupe-mixin |

##### Parameters

| Name         | Type | Default | Description |
| ------------ | ---- | ------- | ----------- |
| `SuperClass` |      |         |             |

##### Static Fields

| Name         | Privacy | Type     | Default                                                                                           | Description | Inherited From |
| ------------ | ------- | -------- | ------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `properties` |         | `object` | `{      /**       * The heading to say "Hello" to.       */      heading: { type: String },    }` |             |                |

##### Fields

| Name      | Privacy | Type     | Default       | Description                    | Inherited From |
| --------- | ------- | -------- | ------------- | ------------------------------ | -------------- |
| `heading` | public  | `string` | `'Hey there'` | The heading to say "Hello" to. |                |

##### Methods

| Name       | Privacy | Description        | Parameters        | Return   | Inherited From |
| ---------- | ------- | ------------------ | ----------------- | -------- | -------------- |
| `sayHello` |         | Formats a greeting | `heading: string` | `string` |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `heading` | heading |                |

<hr/>

#### Exports

| Kind | Name              | Declaration     | Module       | Package |
| ---- | ----------------- | --------------- | ------------ | ------- |
| `js` | `HellotableMixin` | HellotableMixin | src/hello.js |         |

### `src/highlightable.js`:

#### mixin: `HighlightableMixin`

##### Mixins

| Name          | Module | Package               |
| ------------- | ------ | --------------------- |
| `dedupeMixin` |        | @open-wc/dedupe-mixin |

##### Parameters

| Name         | Type | Default | Description |
| ------------ | ---- | ------- | ----------- |
| `superClass` |      |         |             |

##### Static Fields

| Name         | Privacy | Type     | Default                                                                                                                                    | Description | Inherited From |
| ------------ | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | -------------- |
| `properties` |         | `object` | `{      highlight: { type: Boolean },    }`                                                                                                |             |                |
| `styles`     |         | `array`  | ``[      // @ts-ignore      superClass.styles ?? [],      css`        .highlight {          background: indianred;        }      `,    ]`` |             |                |

##### Fields

| Name        | Privacy | Type      | Default | Description | Inherited From |
| ----------- | ------- | --------- | ------- | ----------- | -------------- |
| `highlight` | public  | `boolean` | `false` |             |                |

##### Methods

| Name              | Privacy | Description | Parameters | Return | Inherited From |
| ----------------- | ------- | ----------- | ---------- | ------ | -------------- |
| `renderHighlight` |         |             | `content`  |        |                |

##### Attributes

| Name        | Field     | Inherited From |
| ----------- | --------- | -------------- |
| `highlight` | highlight |                |

<hr/>

#### Exports

| Kind | Name                 | Declaration        | Module               | Package |
| ---- | -------------------- | ------------------ | -------------------- | ------- |
| `js` | `HighlightableMixin` | HighlightableMixin | src/highlightable.js |         |

### `src/styles/cem-labs-js-styles.css.js`:

#### Variables

| Name     | Description | Type |
| -------- | ----------- | ---- |
| `styles` |             |      |

<hr/>

#### Exports

| Kind | Name     | Declaration | Module                               | Package |
| ---- | -------- | ----------- | ------------------------------------ | ------- |
| `js` | `styles` | styles      | src/styles/cem-labs-js-styles.css.js |         |

### `define/cem-labs-js.js`:

#### Exports

| Kind                        | Name          | Declaration | Module            | Package |
| --------------------------- | ------------- | ----------- | ----------------- | ------- |
| `custom-element-definition` | `cem-labs-js` | CemLabsJs   | /src/CemLabsJs.js |         |

### `index.js`:

#### Exports

| Kind | Name        | Declaration | Module             | Package |
| ---- | ----------- | ----------- | ------------------ | ------- |
| `js` | `CemLabsJs` | CemLabsJs   | ./src/CemLabsJs.js |         |

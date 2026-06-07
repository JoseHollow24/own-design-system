# josehollow-design-system

Web Components design system built with [AtomicoJS](https://atomicojs.dev/) and bundled with Vite. Framework-agnostic — works in any HTML context, React, Vue, Angular, or vanilla JS.

## Installation

```bash
npm i josehollow-design-system
```

## Usage

### Import all components

```js
import 'josehollow-design-system';
```

### Import specific components (tree-shaking)

```js
import 'josehollow-design-system/components/button';
import 'josehollow-design-system/components/icon';
import 'josehollow-design-system/components/tag';
import 'josehollow-design-system/components/badge';
import 'josehollow-design-system/components/loading';
import 'josehollow-design-system/components/checkbox';
import 'josehollow-design-system/components/radio';
import 'josehollow-design-system/components/input';
import 'josehollow-design-system/components/textarea';
import 'josehollow-design-system/components/select';
import 'josehollow-design-system/components/accordions';
import 'josehollow-design-system/components/message';
import 'josehollow-design-system/components/pagination';
import 'josehollow-design-system/components/direct-access';
import 'josehollow-design-system/components/progress-bar';
import 'josehollow-design-system/components/menu-vertical';
import 'josehollow-design-system/components/modal';
import 'josehollow-design-system/components/card-headline';
import 'josehollow-design-system/components/card-details';
import 'josehollow-design-system/components/card-deal';
import 'josehollow-design-system/components/card-highlight';
import 'josehollow-design-system/components/file-uploader';
import 'josehollow-design-system/components/datepicker';
import 'josehollow-design-system/components/timepicker';
```

### Design Tokens (CSS)

```js
import 'josehollow-design-system/styles/tokens.css';
```

Or in CSS:

```css
@import 'josehollow-design-system/styles/tokens.css';
```

---

## Components

### Button — `<dsh-button>`

```js
import 'josehollow-design-system/components/button';
```

```html
<dsh-button variant="primary" color="blue">Click me</dsh-button>
<dsh-button variant="secondary" color="green" loading>Loading...</dsh-button>
<dsh-button variant="tertiary" href="https://example.com" target="_blank">Link</dsh-button>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | — | Button label (alternative to slot content) |
| `variant` | String | `primary` | `primary` \| `secondary` \| `tertiary` |
| `color` | String | `blue` | Theme color token |
| `disabled` | Boolean | `false` | Disables the button |
| `loading` | Boolean | `false` | Shows loading spinner |
| `href` | String | — | Converts button to link |
| `target` | String | `_self` | Link target (`_blank`, `_self`) |
| `full` | Boolean | — | Full width (block layout) |
| `fluid` | Boolean | — | Fluid width |
| `vertical` | Boolean | `false` | Vertical layout |
| `type` | String | `button` | HTML button type |
| `id` | String | — | Element ID |
| `name` | String | — | Form name |
| `width` | String | — | Inline width override |

**Slots:** default content, `left` (icon before text), `right` (icon after text)

**Events:** `onClick`

---

### Icon — `<dsh-icon>`

Uses Font Awesome icon names. Requires FA fonts to be loaded in your app.

```js
import 'josehollow-design-system/components/icon';
```

```html
<dsh-icon icon-name="fa-bell" fa-styles="fas" color="g1" size="s2"></dsh-icon>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon-name` | String | `fa-bell` | Font Awesome icon class (e.g. `fa-star`) |
| `fa-styles` | String | `fas` | FA prefix: `fas`, `far`, `fal`, `fab` |
| `color` | String | `g1` | Color token |
| `size` | String | `s1` | Size token (`s1`–`s5`) |

---

### Tag — `<dsh-tag>`

```js
import 'josehollow-design-system/components/tag';
```

```html
<dsh-tag variant="informative" subvariant="success" label="New" show-icon></dsh-tag>
<dsh-tag variant="general" label="Category"></dsh-tag>
<dsh-tag variant="interactive" label="Filter"></dsh-tag>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | `''` | Tag text |
| `variant` | String | `informative` | `general` \| `informative` \| `news` \| `menu` \| `interactive` |
| `subvariant` | String | `success` | `success` \| `error` \| `warning` \| `informative` |
| `show-icon` | Boolean | `false` | Show icon based on subvariant |
| `color` | String | `''` | Custom color override |

**Slots (variant `general`):** `icon-tag-left`, `icon-tag-right`, `icon-tag`

---

### Badge — `<dsh-badge>`

```js
import 'josehollow-design-system/components/badge';
```

```html
<dsh-badge count="5" size="s"></dsh-badge>
<dsh-badge bell pulse></dsh-badge>
<dsh-badge position="left" count="3" size="m"></dsh-badge>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | String | `s` | Dot size: `s`, `m` |
| `count` | Number | — | Number to display inside the dot |
| `pulse` | Boolean | `false` | Pulsing animation |
| `bell` | Boolean | `false` | Show bell icon |
| `shake` | Boolean | `false` | Shake animation on bell |
| `disabled` | Boolean | `false` | Disabled state |
| `position` | String | — | `left` \| `right` \| `vertical-left` \| `vertical-right` |

---

### Loading — `<dsh-loading>`

```js
import 'josehollow-design-system/components/loading';
```

```html
<!-- Indeterminate spinner -->
<dsh-loading></dsh-loading>

<!-- Determinate progress -->
<dsh-loading progress="65"></dsh-loading>

<!-- Error state -->
<dsh-loading error>
  <span slot="message">Something went wrong</span>
  <dsh-button slot="btn-group">Retry</dsh-button>
</dsh-loading>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `progress` | Number | — | 0–100 for determinate mode; omit for indeterminate spin |
| `loop` | Boolean | `true` | Loop indeterminate animation |
| `animationtime` | Number | `1200` | Animation duration in ms |
| `error` | Boolean | `false` | Show error state |
| `size` | String | `md` | Size: `sm`, `md`, `lg` |

**Slots:** `message`, `btn-group` (only visible in error state)

---

### Checkbox — `<dsh-checkbox>`

```js
import 'josehollow-design-system/components/checkbox';
```

```html
<dsh-checkbox label="Accept terms" name="terms" value="yes"></dsh-checkbox>
<dsh-checkbox label="Partial" indeterminate></dsh-checkbox>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | — | Checkbox label |
| `name` | String | — | Form name |
| `value` | String | — | Form value |
| `checked` | Boolean | `false` | Checked state |
| `indeterminate` | Boolean | `false` | Indeterminate (partial) state |
| `disabled` | Boolean | — | Disabled state |
| `error` | Boolean | — | Error state |
| `required` | Boolean | — | Required field |
| `dark` | Boolean | — | Dark mode |
| `id` | String | — | Element ID |

---

### Radio — `<dsh-radio>` / `<dsh-radio-group>`

```js
import 'josehollow-design-system/components/radio';
```

```html
<dsh-radio name="plan" value="basic" label="Basic"></dsh-radio>
<dsh-radio name="plan" value="pro" label="Pro" checked></dsh-radio>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | String | — | Form name (group) |
| `value` | String | — | Form value |
| `checked` | Boolean | `false` | Selected state |
| `disabled` | Boolean | `false` | Disabled state |
| `error` | Boolean | `false` | Error state |
| `dark` | Boolean | `false` | Dark mode |
| `id` | String | — | Element ID |
| `aria-label` | String | — | Accessibility label |

---

### Input — `<dsh-input>`

```js
import 'josehollow-design-system/components/input';
```

```html
<dsh-input label="Email" type="email" placeholder="you@example.com"></dsh-input>
<dsh-input label="RUT" type="rut" required></dsh-input>
<dsh-input label="Phone" type="tel"></dsh-input>
<dsh-input label="Password" type="password" clearable></dsh-input>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | `''` | Field label |
| `type` | String | `text` | `text` \| `email` \| `tel` \| `number` \| `password` \| `rut` |
| `placeholder` | String | `''` | Placeholder text |
| `value` | String | `''` | Current value |
| `disabled` | Boolean | `false` | Disabled state |
| `clearable` | Boolean | `false` | Show clear button when value present |
| `variant` | String | `''` | `success` \| `error` \| `''` |
| `errormessage` | String | `''` | Error message below field |
| `helpermessage` | String | `''` | Helper message below field |
| `maxlength` | String | `700` | Max character length |
| `required` | Boolean | `false` | Required field |
| `id` | String | — | Element ID |
| `name` | String | — | Form name |

**Slot:** `icon` (prepend icon)

**Events:** `changeInput` (value), `clickClear`, `ValidateRut` (boolean, for `type="rut"`)

---

### TextArea — `<dsh-textarea>`

```js
import 'josehollow-design-system/components/textarea';
```

```html
<dsh-textarea label="Comments" placeholder="Write here..." counter max-length="280"></dsh-textarea>
<dsh-textarea label="Bio" resize-height max-height="200"></dsh-textarea>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | `''` | Field label |
| `placeholder` | String | `''` | Placeholder text |
| `value` | String | `''` | Current value |
| `disabled` | Boolean | `false` | Disabled state |
| `maxlength` | Number | `280` | Max character count |
| `counter` | Boolean | `false` | Show character counter |
| `helpermessage` | String | `''` | Helper message |
| `resize-height` | Boolean | `false` | Auto-resize height as user types |
| `max-height` | Number | `0` | Max height rows (0 = unlimited) |
| `rows` | Number | `1` | Initial row count |
| `success` | Boolean | `false` | Success state |
| `warning` | Boolean | `false` | Warning state |
| `error` | Boolean | `false` | Error state |

**Events:** `changeTextarea` (value)

---

### Select — `<dsh-select>` / `<dsh-select-option>`

```js
import 'josehollow-design-system/components/select';
```

```html
<dsh-select label="Country" placeholder="Choose one">
  <dsh-select-option value="cl">Chile</dsh-select-option>
  <dsh-select-option value="ar">Argentina</dsh-select-option>
</dsh-select>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | `Label` | Field label |
| `placeholder` | String | `''` | Placeholder text |
| `value` | String | `null` | Selected value |
| `disabled` | Boolean | `false` | Disabled state |
| `error` | Boolean | `false` | Error state |
| `option` | String | `simple` | `simple` \| `checkbox` |
| `nested` | Boolean | `false` | Enable nested options |
| `alphabetical-order` | Boolean | `false` | Sort options alphabetically |
| `helper` | String | `''` | Helper message |
| `id` | String | — | Element ID |

---

### Accordions — `<dsh-accordions>` / `<dsh-accordion-item>`

```js
import 'josehollow-design-system/components/accordions';
```

```html
<dsh-accordions>
  <dsh-accordion-item slot="item" label="Section 1" variant="blue">
    <p slot="body">Content goes here</p>
  </dsh-accordion-item>
  <dsh-accordion-item slot="item" label="Section 2" variant="blue">
    <p slot="body">More content</p>
  </dsh-accordion-item>
</dsh-accordions>
```

**`dsh-accordion-item` props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | `''` | Header title |
| `sublabel` | String | `''` | Header subtitle |
| `variant` | String | `blue` | Color variant |
| `type` | String | `primario` | `primario` \| `secundario` |
| `checkbox` | Boolean | `false` | Show checkbox in header |
| `checked` | Boolean | `false` | Checkbox checked state |
| `open` | Boolean | `false` | Expanded state |

**Slots:** `body` (content), `accordion` (nested accordions), `header-right`, `btn-left`, `btn-right`

---

### Message — `<dsh-message>`

```js
import 'josehollow-design-system/components/message';
```

```html
<dsh-message variant="success" close-button>
  <span slot="title">Done!</span>
  <span slot="content">Your changes were saved.</span>
</dsh-message>

<dsh-message variant="error" timeout="5000">
  <span slot="title">Error</span>
  <span slot="content">Something failed. Try again.</span>
</dsh-message>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | String | `info` | `info` \| `informative` \| `success` \| `error` \| `warning` \| `important` |
| `close-button` | Boolean | `false` | Show close button |
| `timeout` | Number | `0` | Auto-hide after ms (0 = never) |
| `show-component` | Boolean | `true` | Controls visibility |
| `id` | String | `''` | Element ID |
| `aria-label` | String | `''` | Accessibility label |

**Slots:** `title`, `content`, `footer`, `icon` (only `important` variant)

**Events:** `hide-message`

---

### Progress Bar — `<dsh-progress-bar>`

```js
import 'josehollow-design-system/components/progress-bar';
```

```html
<dsh-progress-bar
  options-data='[{"value":40}]'
  min-value="0"
  max-value="100"
  label-top-start="Progress"
  label-bottom-end="40%"
></dsh-progress-bar>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `options-data` | String (JSON) | `[]` | Array of `{ value, color? }` objects |
| `min-value` | Number | `0` | Minimum value |
| `max-value` | Number | `100` | Maximum value |
| `label-top-start` | String | `''` | Top-left label |
| `label-top-end` | String | `''` | Top-right label |
| `label-bottom-start` | String | `''` | Bottom-left label |
| `label-bottom-end` | String | `''` | Bottom-right label |

---

### Pagination — `<dsh-pagination>`

```js
import 'josehollow-design-system/components/pagination';
```

```html
<dsh-pagination pages="10" select-page="1"></dsh-pagination>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `pages` | Number | `10` | Total number of pages |
| `select-page` | Number | `1` | Currently selected page |
| `shadow` | Boolean | `false` | Shadow style |
| `name` | String | — | Component name |

---

### Direct Access — `<dsh-direct-access>`

```js
import 'josehollow-design-system/components/direct-access';
```

```html
<dsh-direct-access
  icon="fa-shield-check"
  fa-styles="fal"
  title="My Account"
  subtitle="Manage your info"
  link="/account"
  link-text="Go"
></dsh-direct-access>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | String | `fa-shield-check` | Font Awesome icon name |
| `fa-styles` | String | `fal` | FA prefix |
| `title` | String | `''` | Card title |
| `subtitle` | String | `''` | Card subtitle |
| `link` | String | `/` | Navigation URL |
| `link-text` | String | `''` | Link label |
| `tag` | String | `''` | Optional tag label |
| `segment` | String | `transversales` | Segment identifier |
| `target` | String | `_self` | Link target |
| `id` | String | `''` | Element ID |

---

### Menu Vertical — `<dsh-menu>` / `<dsh-menu-item>` / `<dsh-menu-sub-item>`

```js
import 'josehollow-design-system/components/menu-vertical';
```

```html
<dsh-menu>
  <img slot="menu-avatar" src="avatar.png" alt="User" />
  <dsh-menu-item slot="menu-item" label="Home" icon="fa-home"></dsh-menu-item>
  <dsh-menu-item slot="menu-item" label="Settings" icon="fa-gear">
    <dsh-menu-sub-item slot="sub-item" label="Profile"></dsh-menu-sub-item>
  </dsh-menu-item>
</dsh-menu>
```

**`dsh-menu` props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `open-mobile` | Boolean | `false` | Open/close drawer on mobile |

**Slots:** `menu-avatar`, `menu-item`, `button-header-mobile`

---

### Modal — `<dsh-modal>`

```js
import 'josehollow-design-system/components/modal';
```

```html
<dsh-modal
  open
  closable
  text-title="Confirm action"
  text-description="Are you sure you want to continue?"
  variant=""
>
  <div slot="actionable">
    <dsh-button variant="secondary" color="blue">Cancel</dsh-button>
    <dsh-button variant="primary" color="blue">Confirm</dsh-button>
  </div>
</dsh-modal>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | Boolean | `false` | Show/hide the modal |
| `closable` | Boolean | `false` | Show X close button |
| `no-close` | Boolean | `false` | Disable all close interactions (ESC, backdrop click) |
| `fixed` | Boolean | `false` | Fixed size card |
| `text-title` | String | — | Modal title text |
| `text-description` | String | — | Modal description text |
| `icon` | String | — | FA icon name shown at top |
| `icon-color` | String | `x1` | Icon color token |
| `image-src` | String | — | Top image URL |
| `image-alt` | String | — | Top image alt text |
| `avatar-src` | String | — | Avatar image URL |
| `avatar-alt` | String | — | Avatar image alt text |
| `actionable-align` | String | `right` | Footer buttons alignment: `right`, `left`, `center` |
| `variant` | String | `''` | Visual variant |
| `id` | String | `''` | Element ID |

**Slots:** `safe-area` (custom content area), `actionable` (footer buttons)

**Events:** `close`

---

### Card Headline — `<dsh-card-headline>`

```js
import 'josehollow-design-system/components/card-headline';
```

```html
<dsh-card-headline
  variant="info"
  amount="$1.250.000"
  button-text="View details"
  button-link="/details"
  img="/logo.png"
>
  <span slot="title">Account Balance</span>
</dsh-card-headline>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | String | `info` | `info` \| custom |
| `img` | String | `''` | Header image URL |
| `amount` | String | `''` | Main amount/value text |
| `button-text` | String | `''` | CTA button label |
| `button-link` | String | `''` | CTA button URL |
| `target` | String | `_self` | Link target |
| `segment` | String | `default` | Segment theme token |
| `description-font` | String | `default` | Font size token for description |

**Slots:** `title`, `description` (variant `info`), default slot (other variants)

---

### Card Details — `<dsh-card-details>`

```js
import 'josehollow-design-system/components/card-details';
```

```html
<dsh-card-details>
  <dsh-card-details-header slot="header" title="My Card"></dsh-card-details-header>
  <dsh-card-details-line slot="line" label="Number" value="**** 1234"></dsh-card-details-line>
  <dsh-card-details-icon slot="line" label="Type" value="Visa"></dsh-card-details-icon>
  <dsh-card-details-footer slot="footer"></dsh-card-details-footer>
</dsh-card-details>
```

Sub-components: `dsh-card-details-header`, `dsh-card-details-line`, `dsh-card-details-icon`, `dsh-card-details-image`, `dsh-card-details-accordeon`, `dsh-card-details-footer`

---

### Card Deal — `<dsh-card-deal>`

```js
import 'josehollow-design-system/components/card-deal';
```

```html
<dsh-card-deal
  title="Special Offer"
  amount="<b>30%</b>"
  text-amount="discount"
  tag-text="New"
  img="/promo.jpg"
  link="/offer"
  link-text="See offer"
></dsh-card-deal>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | String | `default` | Visual variant |
| `segment` | String | `default` | Segment theme |
| `img` | String | `''` | Card image URL |
| `title` | String | `''` | Card title |
| `subtitle` | String | `''` | Card subtitle |
| `description` | String | `''` | Body description |
| `amount` | String | `''` | Amount HTML (supports `<b>`) |
| `text-amount` | String | `''` | Text next to amount |
| `tag-text` | String | `''` | Tag label |
| `tag-color` | String | — | Tag color |
| `link` | String | — | CTA URL |
| `link-text` | String | — | CTA label |

---

### Card Highlight — `<dsh-card-highlights>` / `<dsh-card-highlights-item>`

```js
import 'josehollow-design-system/components/card-highlight';
```

```html
<dsh-card-highlights>
  <dsh-card-highlights-item slot="tab" title="Main highlight"></dsh-card-highlights-item>
  <dsh-card-highlights-item slot="tab" title="Secondary"></dsh-card-highlights-item>
</dsh-card-highlights>
```

| Prop (`dsh-card-highlights`) | Type | Description |
|---|---|---|
| `position` | String | Layout position |
| `position-divide` | String | Divider position |

---

### File Uploader — `<dsh-file-uploader>`

```js
import 'josehollow-design-system/components/file-uploader';
```

```html
<dsh-file-uploader
  text-title="Upload documents"
  text-subtitle="PDF, JPG or PNG"
  text-button="Select file"
  allowed-types="pdf,jpg,png"
  max-size="5"
  max-load="3"
></dsh-file-uploader>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `text-title` | String | — | Upload area title |
| `text-subtitle` | String | — | Upload area subtitle |
| `text-button` | String | `Subir archivo` | Button label |
| `button-variant` | String | `secondary` | Button variant |
| `name` | String | — | Input name |
| `allowed-types` | String | `''` | Comma-separated allowed extensions |
| `max-size` | Number | `3` | Max file size in MB |
| `max-load` | Number | `1` | Max number of files |
| `disabled` | Boolean | `false` | Disabled state |
| `defaults` | Array | — | Pre-loaded file list |

**Events:** `onChange` (file list), `onError`, `onDelete`

---

### Datepicker — `<dsh-datepicker>`

```js
import 'josehollow-design-system/components/datepicker';
```

```html
<dsh-datepicker label="Select date" placeholder="dd/mm/yyyy"></dsh-datepicker>

<!-- Range mode -->
<dsh-datepicker label="Trip dates" range two-months></dsh-datepicker>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | String | — | Field label |
| `placeholder` | String | — | Placeholder text |
| `helper` | String | — | Helper message |
| `value` | String | — | Selected date (`dd/mm/yyyy`) |
| `range` | Boolean | `false` | Enable date range selection |
| `two-months` | Boolean | `false` | Show two-month calendar (forces `range`) |
| `position` | String | — | Dropdown position |
| `available-from` | String | — | Earliest selectable date |
| `available-to` | String | — | Latest selectable date |
| `disabled-days` | String | — | Comma-separated dates to disable |
| `here-after` | Boolean | — | Only allow future dates |
| `high-season` | String | — | Highlight date range |
| `legend` | String | — | Calendar legend text |
| `absolute` | Boolean | — | Absolute positioning for dropdown |

**Events:** `ChangeDate` (selected date or range)

---

### Timepicker — `<dsh-timepicker>`

```js
import 'josehollow-design-system/components/timepicker';
```

```html
<dsh-timepicker
  time-data='["08:00","09:00","10:00","11:00"]'
  max-options="5"
></dsh-timepicker>

<!-- 24-hour mode -->
<dsh-timepicker twenty-four-h time-data='["14:00","15:00","16:00"]'></dsh-timepicker>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `time-data` | String (JSON array) | — | Array of time strings (`HH:MM`) |
| `twenty-four-h` | Boolean | `false` | Use 24-hour format (hides AM/PM selector) |
| `max-options` | Number | `100` | Max visible time options |

---

## Design Tokens

Tokens are generated from `tokens/*.json` files using Style Dictionary and exposed as CSS custom properties.

```css
@import 'josehollow-design-system/styles/tokens.css';

.my-element {
  background: var(--dsh-color-brand-primary);
  padding: var(--dsh-spacing-200);
  border-radius: var(--dsh-border-radius-md);
}
```

To regenerate tokens from source:

```bash
npm run build:tokens
```

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook (component docs + playground)
npm run storybook

# Build the library
npm run build

# Build individual component
npm run build:button
npm run build:input
# ...etc

# Run component tests
npm run test:button
npm run test:input
# ...etc
```

---

## Project structure

```
components/      Source code for each web component
dist/            Compiled library (published to npm)
src/
  generated-tokens/  Auto-generated CSS tokens (do not edit manually)
tokens/          Source design token JSON files
```

---

## Publishing

```bash
npm run build
npm publish
```

Package name: **josehollow-design-system**

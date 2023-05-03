# GA4
GA4 TypeScript Library to provide functions to support sending GA4 events.

# Features
- provide functions to send GA4 events.
- helper functions to get value via `window.dataLayer`.


## Get Started
```sh
npm i @technoapple/ga4
```

## Basic Usage

sending GA4 events.
```js
import { ga4 } from '@technoapple/ga4';
// init
ga4.init({
    targetId: 'g-123'
} as ga4Option);

// sending event
ga4.send('test_event', {
    'event_key_1': 1
});      
```

sending GA4 events by gtag.

```js
ga4.gtag('event', 'test', {
    'test': 1
});   
```

get value from `dataLayer`.

```js
import { dataLayerHelper } from '@technoapple/ga4';
window.dataLayer.push({
    'test': 11
});

const value = dataLayerHelper.get('test');
console.info(value); // 11
```
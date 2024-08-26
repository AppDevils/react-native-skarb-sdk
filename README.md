# react-native-scarb-sdk

Bridge to work with SkarbSDK in react-native

## Installation

```sh
npm install react-native-scarb-sdk
```

Install Cocoapods
```sh
cd ios && pod install && cd ..
```

## Usage


```js
import * as SkarbSDKManager from 'react-native-scarb-sdk';

const init = () => {
  const deviceId = generateUuid();
  SkarbSDKManager.initialize('*your-id*', true, deviceId);
};

const sendSource = () => {
  SkarbSDKManager.sendSource('source-example', { click: 'clicked govno' });
};

const sendTest = () => {
  SkarbSDKManager.sendTest('test', 'test');
};

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

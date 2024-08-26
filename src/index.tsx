import { NativeModules, Platform } from 'react-native';
import type { ISkarbSDKManager } from './global';

const LINKING_ERROR =
  `The package 'react-native-scarb-sdk' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ScarbSdk: ISkarbSDKManager | {} = NativeModules.SkarbSDKManager
  ? NativeModules.SkarbSDKManager
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export const initialize = (
  ...args: Parameters<ISkarbSDKManager['initializeSDK']>
) => {
  (ScarbSdk as ISkarbSDKManager).initializeSDK(...args);
};

export const sendSource = (
  ...args: Parameters<ISkarbSDKManager['sendSource']>
) => {
  (ScarbSdk as ISkarbSDKManager).sendSource(...args);
};

export const sendTest = (...args: Parameters<ISkarbSDKManager['sendTest']>) => {
  (ScarbSdk as ISkarbSDKManager).sendTest(...args);
};

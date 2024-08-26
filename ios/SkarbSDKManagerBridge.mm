#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SkarbSDKManager, NSObject)

RCT_EXTERN_METHOD(initializeSDK:(NSString *)clientId isObservable:(BOOL)isObservable deviceId:(NSString *)deviceId)
RCT_EXTERN_METHOD(sendSource:(NSString *)brokerName features:(NSDictionary *)features brokerUserID:(NSString *)brokerUserID)
RCT_EXTERN_METHOD(sendTest:(NSString *)name group:(NSString *)group)
RCT_EXTERN_METHOD(setLoggingEnabled:(BOOL *)enabled)

@end

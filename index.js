import { NativeModules } from "react-native";

var RroadCast = {
  sendBroadCast: function (action, json) {
    NativeModules.top.litop.RroadCast.sendEvent(action, JSON.stringify(json));
  },
  sync: function () {
    NativeModules.top.litop.RroadCast.receiveSystemEvent(true);
  },
  unSync: function () {
    NativeModules.top.litop.RroadCast.receiveSystemEvent(false);
  },
  on: function (action) {
    if (action == null) return null;
    else NativeModules.top.litop.RroadCast.receiveEvent(action);
  },
  remove: function (action) {
    if (action == null) return null;
    else NativeModules.top.litop.RroadCast.removeEvent(action);
  },
  removeAll: function () {
    NativeModules.top.litop.RroadCast.removeAllEvent();
  },
};

export default RroadCast;

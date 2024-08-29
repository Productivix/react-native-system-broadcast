import { NativeModules } from "react-native";

var RroadCast = {
  sendBroadCast: function (action, json) {
    NativeModules.RroadCast.sendEvent(action, JSON.stringify(json));
  },
  sync: function () {
    NativeModules.RroadCast.receiveSystemEvent(true);
  },
  unSync: function () {
    NativeModules.RroadCast.receiveSystemEvent(false);
  },
  on: function (action) {
    if (action == null) return null;
    else NativeModules.RroadCast.receiveEvent(action);
  },
  remove: function (action) {
    if (action == null) return null;
    else NativeModules.RroadCast.removeEvent(action);
  },
  removeAll: function () {
    NativeModules.RroadCast.removeAllEvent();
  },
};

export default RroadCast;

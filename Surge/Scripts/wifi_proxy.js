/* wifi_proxy change
[Script]
wifi_proxy.js = debug=1,script-path=Scripts/wifi_proxy.js,type=event,event-name=network-changed

PS:记得自己修改WIFI名称
主要功能:指定Wi-Fi(路由器翻)下,Surge使用直连模式,其他网络下Surge使用规则模式
虽然设置SSID可以达到基本相同功能
使用脚本,Surge不会被suspend
Rewrite和Scripting依然有效
*/



var wifiname = $network.wifi.ssid;
var proxywifi = "lao duan_6G";
if (wifiname == proxywifi){
    $surge.setOutboundMode("direct");
    $notification.post("rainman_Remind","您目前处于WIFI-Proxy","Surge已自动变为直连模式");
    
}
else{
    $surge.setOutboundMode("rule");
    $notification.post("rainman_Remind","Surge已自动变为规则模式","");
}
$done();
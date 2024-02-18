"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1032],{62828:function(I,x,t){t.r(x),t.d(x,{default:function(){return E}});var w=t(28152),A=t.n(w),D=t(50959),i=t(8862),c=t(69271),F=t(77117),g=t.n(F),N=t(95530),h=t.n(N),B=t(13601),j=t(2909),L=t(45584),d=t(11527),s=["children","theme"],P=64,W=38,G=function(u){var p=u.children,r=u.theme,T=h()(u,s),f=B.Z.useToken(),m=f.token;return(0,D.useEffect)(function(){j.ZP.config({theme:r})},[r]),(0,d.jsx)(L.f6,g()(g()({},T),{},{theme:r,customToken:{bannerHeight:W,headerHeight:P,anchorTop:P+m.margin},children:p}))},M=G,O=function(){var u=(0,c.pC)(),p=(0,c.TH)(),r=p.pathname,T=(0,c.OI)(),f=A()(T,1),m=f[0],S=(0,c.YB)(),y=S.locale;return(0,d.jsx)(i.BQ,{locale:y==="zh-CN"?i.bF:i.iF,children:(0,d.jsx)(M,{themeMode:m||"auto",children:(0,d.jsx)("div",{className:r==="/"||r==="/zh-CN"?"home":"",children:u})})})},E=O},8862:function(I,x,t){t.d(x,{XN:function(){return w},E_:function(){return z},JR:function(){return A},G8:function(){return E},BQ:function(){return $},sT:function(){return d},al:function(){return b},ln:function(){return R},iF:function(){return y},O_:function(){return B},hB:function(){return g},Tg:function(){return L},ZT:function(){return W},M4:function(){return j},Xw:function(){return N},lp:function(){return M},bF:function(){return X}});var w=function(e){return e[e.Mainnet=1]="Mainnet",e[e.Polygon=137]="Polygon",e[e.BSC=56]="BSC",e[e.Arbitrum=42161]="Arbitrum",e[e.Optimism=10]="Optimism",e[e.Goerli=5]="Goerli",e[e.Avalanche=43114]="Avalanche",e}({}),A=function(e){return e[e.MainnetBeta=2]="MainnetBeta",e[e.Devnet=3]="Devnet",e[e.Testnet=4]="Testnet",e}({}),D=t(13448),i=t.n(D),c=t(74815),F=t.n(c);function g(e){if(!e)return e;var o=e;return e.startsWith("ipfs://")&&(o="https://ipfs.io/ipfs/".concat(e.replace("ipfs://",""))),o}function N(e){return h.apply(this,arguments)}function h(){return h=F()(i()().mark(function e(o){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o){n.next=2;break}throw new Error("URL not set");case 2:return n.abrupt("return",fetch(g(o)).then(function(l){return l.json()}));case 3:case"end":return n.stop()}},e)})),h.apply(this,arguments)}function B(e){return e.startsWith("0x")?e:"0x".concat(e)}function j(e){if(e!==void 0)return typeof e!="bigint"?BigInt(e):e}function L(e){e.json=function(){return Promise.resolve(e)};var o=function(){return Promise.resolve(e)},a=function(){return o()};Object.defineProperty(window,"fetch",{value:a})}var d=function(o){return function(a,n){if(n==="address")return"".concat(o,"/address/").concat(a);if(n==="transaction")return"".concat(o,"/tx/").concat(a);throw new Error("getBrowserLink unsupported type ".concat(n))}},s=t(50959),P=t(67856);function W(){}var G=null;function M(){G=null,(0,P.lp)()}var O=null,E=s.createContext({}),R=function(){var e=function(){};return e.deprecated=W,e},u=null,p=t(77117),r=t.n(p),T=t(95530),f=t.n(T),m=t(3835),S={ConnectButton:{connect:"Connect Wallet",disconnect:"Disconnect",copyAddress:"Copy Address",copied:"Copied!",walletAddress:"Wallet address"},ConnectModal:{title:"Connect Wallet",guideTitle:"What is a Wallet?",guideInfos1Title:"Manage your private key and assets",guideInfos1Desc:"Manage your private key and the assets of the corresponding chain address",guideInfos2Title:"Help you connect to DApp",guideInfos2Desc:"Authorize DApp to get your address, similar to login",guideInfos3Title:"Call smart contract",guideInfos3Desc:"Through authorization of private key signature, initiate interaction with smart contract on the chain",guideInfosGetWalletBtnText:"Get a Wallet",guideInfosMoreLinkText:"Learn More",getWalletBtnText:"Get",getWalletPanelTitle:"Get a Wallet",getWalletPanelInfoTitle:"Not what you're looking for?",getWalletPanelInfoDesc:"Select a wallet on the left to get started with a different wallet provider.",qrCodePanelTitleForDownload:"Download {walletName}",qrCodePanelTitleForScan:"Scan with {walletName}",qrCodePanelLinkForDownload:"Click to go to the download page",qrCodePanelLinkForConnect:"Click to connect directly",qrCodePanelDownloadTipForReady:"Scan the QR code to download the wallet.",qrCodePanelDownloadTipForNotReady:"Don't have",walletCardPanelTitle:"Get {selectedWalletName}",walletCardAppTitle:"{selectedWalletName} for Mobile",walletCardAppDesc:"Use the mobile wallet to explore the world of Ethereum.",walletCardExtensionTitle:"{selectedWalletName} for {selectedExtensionBrowserName}"},NFTCard:{actionText:"Buy Now"},Address:{copyTips:"Copy Address",copiedTips:"Address Copied!"}},y=S,b=y,z=s.createContext({defaultLocale:b}),U=t(11527),Z=["children","parentContext"],k=["extendsContextFromParent"],Q=function(o){var a=o.children,n=o.parentContext,l=f()(o,Z),v=r()({},n);Object.keys(l).forEach(function(J){var H=J;l[H]!==void 0&&(v[H]=l[H])});var C=(0,s.useMemo)(function(){if(n!=null&&n.locale&&l.locale)return(0,m.Z)(n.locale,l.locale)},[n==null?void 0:n.locale,l.locale]);return v.locale=C??v.locale,(0,U.jsx)(z.Provider,{value:v,children:a})},$=function(o){var a=o.extendsContextFromParent,n=a===void 0?!0:a,l=f()(o,k),v=s.useContext(z),C=n?v:void 0;return(0,U.jsx)(Q,r()(r()({},l),{},{defaultLocale:b,parentContext:C,extendsContextFromParent:n}))},V={ConnectButton:{connect:"\u8FDE\u63A5\u94B1\u5305",disconnect:"\u65AD\u5F00\u8FDE\u63A5",copyAddress:"\u590D\u5236\u5730\u5740",copied:"\u590D\u5236\u6210\u529F\uFF01",walletAddress:"\u94B1\u5305\u5730\u5740"},ConnectModal:{title:"\u8FDE\u63A5\u94B1\u5305",guideTitle:"\u4EC0\u4E48\u662F\u94B1\u5305\uFF1F",guideInfos1Title:"\u7BA1\u7406\u79C1\u94A5\u548C\u8D44\u4EA7",guideInfos1Desc:"\u7BA1\u7406\u79C1\u94A5\u548C\u5BF9\u5E94\u94FE\u5730\u5740\u7684\u8D44\u4EA7",guideInfos2Title:"\u5E2E\u52A9\u4F60\u8FDE\u63A5 DApp",guideInfos2Desc:"\u6388\u6743 DApp \u83B7\u53D6\u4F60\u7684\u5730\u5740\uFF0C\u7C7B\u4F3C\u767B\u5F55",guideInfos3Title:"\u8C03\u7528\u667A\u80FD\u5408\u7EA6",guideInfos3Desc:"\u901A\u8FC7\u6388\u6743\u79C1\u94A5\u7B7E\u540D\uFF0C\u53D1\u8D77\u4E0E\u94FE\u4E0A\u667A\u80FD\u5408\u7EA6\u7684\u4EA4\u4E92",guideInfosGetWalletBtnText:"\u83B7\u53D6\u94B1\u5305",guideInfosMoreLinkText:"\u4E86\u89E3\u66F4\u591A",getWalletBtnText:"\u83B7\u53D6",getWalletPanelTitle:"\u83B7\u53D6\u94B1\u5305",getWalletPanelInfoTitle:"\u6CA1\u6709\u627E\u5230\u4F60\u60F3\u8981\u7684\uFF1F",getWalletPanelInfoDesc:"\u5728\u5DE6\u4FA7\u9009\u62E9\u94B1\u5305\uFF0C\u4EE5\u5F00\u59CB\u4F7F\u7528\u4E0D\u540C\u7684\u94B1\u5305\u63D0\u4F9B\u5546\u3002",qrCodePanelTitleForDownload:"\u4E0B\u8F7D {walletName}",qrCodePanelTitleForScan:"\u4F7F\u7528 {walletName} \u626B\u63CF",qrCodePanelLinkForDownload:"\u70B9\u51FB\u524D\u5F80\u4E0B\u8F7D\u9875\u9762",qrCodePanelLinkForConnect:"\u70B9\u51FB\u76F4\u63A5\u8FDE\u63A5",qrCodePanelDownloadTipForReady:"\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u94B1\u5305",qrCodePanelDownloadTipForNotReady:"\u6682\u65E0",walletCardPanelTitle:"\u83B7\u53D6 {selectedWalletName}",walletCardAppTitle:"\u5728\u624B\u673A\u4F7F\u7528 {selectedWalletName}",walletCardAppDesc:"\u4F7F\u7528\u79FB\u52A8\u94B1\u5305\u63A2\u7D22\u4EE5\u592A\u574A\u4E16\u754C\u3002",walletCardExtensionTitle:"\u5728 {selectedExtensionBrowserName} \u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528 {selectedWalletName}"},NFTCard:{actionText:"\u7ACB\u5373\u8D2D\u4E70"},Address:{copyTips:"\u590D\u5236\u5730\u5740",copiedTips:"\u5730\u5740\u590D\u5236\u6210\u529F\uFF01"}},X=V}}]);

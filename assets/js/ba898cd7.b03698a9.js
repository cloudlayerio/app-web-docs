"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5903],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1356:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1,title:".NET SDK C#"},l=void 0,i={unversionedId:"net-sdk-csharp",id:"net-sdk-csharp",title:".NET SDK C#",description:"cloudlayer.io C# SDK | Docs - Document Generation Service",source:"@site/docs/sdks/net-sdk-csharp.mdx",sourceDirName:".",slug:"/net-sdk-csharp",permalink:"/sdks/net-sdk-csharp",draft:!1,editUrl:"https://github.com/cloudlayerio/docs/edit/main/docs/sdks/net-sdk-csharp.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:".NET SDK C#"},sidebar:"tutorialSidebar",previous:{title:"SDKs",permalink:"/sdks/"}},s={},p=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"About The Project",id:"about-the-project",level:2},{value:"Installation",id:"installation",level:2},{value:"Visual Studio",id:"visual-studio",level:3},{value:"JetBrains Rider",id:"jetbrains-rider",level:3},{value:"Other",id:"other",level:3},{value:"Setup",id:"setup",level:2},{value:"Get your API Key",id:"get-your-api-key",level:3},{value:"Usage",id:"usage",level:2},{value:"Initialize the Manager",id:"initialize-the-manager",level:3},{value:"Convert URL to PDF",id:"convert-url-to-pdf",level:3},{value:"Save Response to Local Storage",id:"save-response-to-local-storage",level:3},{value:"Get the Url",id:"get-the-url",level:3},{value:"Set Async to false",id:"set-async-to-false",level:3},{value:"Passing in more options",id:"passing-in-more-options",level:3},{value:"Url to Image With Options",id:"url-to-image-with-options",level:3},{value:"Advanced Options",id:"advanced-options",level:3},{value:"More information",id:"more-information",level:2},{value:"Source Code",id:"source-code",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"cloudlayer.io C# SDK | Docs - Document Generation Service"),(0,o.kt)("meta",{name:"description",content:"cloudlayer.io is a document generation platform that offers a .NET C# SDK for integrating with our PDF Generation and Image Generation services."})),(0,o.kt)("a",{href:"https://www.nuget.org/packages/cloudlayerio-dotnet/"},(0,o.kt)("img",{src:"https://buildstats.info/nuget/cloudlayerio-dotnet"})),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#about-the-project"},"About the Project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#visual-studio"},"Visual Studio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#jetbrains-rider"},"JetBrains Rider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#other"},"Other")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage"))),(0,o.kt)("h2",{id:"about-the-project"},"About The Project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cloudlayerio-dotnet")," is a ",(0,o.kt)("strong",{parentName:"p"},".NET 6")," library ",(0,o.kt)("a",{parentName:"p",href:"https://cloudlayer.io"},"cloudlayer.io"),". It is used to automate and manipulate content such as PDF files, and images.  Using this library and cloudlayer.io service, you can convert HTML to PDF, HTML to Images, URLs to PDFs, URLs to Images, and more."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudlayerio-dotnet")," library is bundled in a NuGet Package."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/cloudlayerio-dotnet/"},"NuGet Package"))),(0,o.kt)("h3",{id:"visual-studio"},"Visual Studio"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell"},"console")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"Install-Package cloudlayerio-dotnet")," in the console."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"},"NuGet Package Manager")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Search this package ",(0,o.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/cloudlayerio-dotnet"},"NuGet Package")," and install it.")))),(0,o.kt)("h3",{id:"jetbrains-rider"},"JetBrains Rider"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/rider/Using_NuGet.html#"},"https://www.jetbrains.com/help/rider/Using_NuGet.html#"))),(0,o.kt)("h3",{id:"other"},"Other"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/overview-and-workflow#ways-to-install-a-nuget-package"},"https://docs.microsoft.com/en-us/nuget/consume-packages/overview-and-workflow#ways-to-install-a-nuget-package"))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"get-your-api-key"},"Get your API Key"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To begin you will need an API Key. "),(0,o.kt)("li",{parentName:"ol"},"Create a free account at ",(0,o.kt)("a",{parentName:"li",href:"https://cloudlayer.io/auth/register"},"cloudlayer.io")," which will give you a chunk of free API credits to use for testing.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"initialize-the-manager"},"Initialize the Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var manager = new CloudlayerioManager("<YOUR-API-KEY>");\n')),(0,o.kt)("h3",{id:"convert-url-to-pdf"},"Convert URL to PDF"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var rsp = await manager.UrlToPdf(new UrlToPdf\n{\n    Url = "http://google.com"\n});\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rsp")," is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudlayerio/cloudlayerio-dotnet/blob/main/cloudlayerio-dotnet/responses/ReturnResponse.cs"},"ReturnResponse")," type and will contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream")," as well as several other properties, along with a helper method ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveToFilesystem"),". This method is a convenience method to make it easier to save the results of the stream to local storage."),(0,o.kt)("p",null,"As of v2, the PDF file is not returned as part of the response. The SDK now returns a JSON response and the SaveToFilesystem Helper will only save the json response to the filesystem now. In addition, the response now contains the entire response object which is populated with the response data in a fully typed manner."),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"async: false")," it will return back the entire populated response, including the ",(0,o.kt)("inlineCode",{parentName:"p"},"assetUrl")," which will contain the URL to your asset."),(0,o.kt)("h3",{id:"save-response-to-local-storage"},"Save Response to Local Storage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await rsp.SaveToFileSystem("C:\\myfile.json");\n')),(0,o.kt)("h3",{id:"get-the-url"},"Get the Url"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: This will be empty for async calls, use webhook to get the response for asnyc. Otherwise, use ",(0,o.kt)("inlineCode",{parentName:"em"},"async: false")," property.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var url = rsp.Response.AssetUrl;\n")),(0,o.kt)("h3",{id:"set-async-to-false"},"Set Async to false"),(0,o.kt)("p",null,"If you do not plan to use webhooks, and have short lived requests you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"async: false"),". If your requests are long lived, we highly suggest using webhooks with ",(0,o.kt)("inlineCode",{parentName:"p"},"async: true")," to avoid connection terminations due to timeouts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var rsp = await manager.UrlToImage(new UrlToImage {\n    Url = "http://google.com",\n    Async = false\n});\nvar url = rsp.Response.AssetUrl;\n')),(0,o.kt)("p",null,"You of course can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream")," property your self and write your own storage code."),(0,o.kt)("h3",{id:"passing-in-more-options"},"Passing in more options"),(0,o.kt)("p",null,"In the previous example, we didn't pass in any optional parameters and left all the defaults. There are a significant amount of options to choose from.  Take a look them all by looking at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudlayerio/cloudlayerio-dotnet/tree/main/cloudlayerio-dotnet/requests"},"requests folder")," which will give you a good idea of the available options for each endpoint."),(0,o.kt)("h3",{id:"url-to-image-with-options"},"Url to Image With Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var rsp = await manager.UrlToImage(new UrlToImage {\n    Url = "http://google.com",\n    AutoScroll = true,\n    ViewPort = new ViewPort {\n        Height = 2560,\n        Width = 1440,\n        DeviceScaleFactor = 2\n    }\n});\n\nvar url = rsp.Response.AssetUrl;\n')),(0,o.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("p",null,"We have made it easy to pass in the more advanced options by creating types that will serialize correctly.  This makes it significantly easier for you to just write the code and not worry about anything else.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var rsp = new manager.UrlToPdf(new UrlToPdf {\n    Url = "https://google.com",\n    Margin = new Margin\n    {\n        Bottom = new LayoutDimension(UnitTypes.Pixels, 100),\n        Top = new LayoutDimension(UnitTypes.Pixels, 100),\n        Left = new LayoutDimension(UnitTypes.Pixels, 100),\n        Right = new LayoutDimension(UnitTypes.Pixels, 100)\n    },\n    FooterTemplate = new HeaderFooterTemplate {\n        Selector = "#myDiv",\n        Style = new Dictionary<string, string>\n        {\n            ["padding-bottom"] = "10px",\n            ["height"] = "40px"\n        },\n        ImageStyle = new Dictionary<string, string>\n        {\n            ["padding"] = "20px",\n            ["border"] = "thick double red"\n        }\n    }\n});\n')),(0,o.kt)("p",null,"That's just an example of adding a bunch of options.  For more information on what each option does you can take a look at our ",(0,o.kt)("a",{parentName:"p",href:"https://cloudlayer.io/docs"},"docs")," or look at the source code as it's heavily commented on what each property does and how to use it.  It will also show up as intellisense info as you use the properties."),(0,o.kt)("h2",{id:"more-information"},"More information"),(0,o.kt)("p",null,"Check the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudlayer.io"},"Tutorials")," page to get started."),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudlayerio/cloudlayerio-dotnet"},"source code")," for the SDK is available on GitHub."))}c.isMDXComponent=!0}}]);
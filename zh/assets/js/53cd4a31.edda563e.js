"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[299],{6648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=n(4848),s=n(8453);const d={sidebar_position:3},i="\u670d\u52a1\u5668\u547d\u4ee4\uff08RCON\uff09",c={id:"getting-started/configuration/server-commands",title:"\u670d\u52a1\u5668\u547d\u4ee4\uff08RCON\uff09",description:"\u5982\u4f55\u4f7f\u7528 RCON \u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/configuration/server-commands.md",sourceDirName:"getting-started/configuration",slug:"/getting-started/configuration/server-commands",permalink:"/zh/getting-started/configuration/server-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/getting-started/configuration/server-commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Engine Settings",permalink:"/zh/getting-started/configuration/engine-settings"},next:{title:"Guides",permalink:"/zh/category/guides"}},o={},l=[{value:"RCON",id:"rcon",level:2},{value:"\u670d\u52a1\u5668\u547d\u4ee4\u5217\u8868",id:"\u670d\u52a1\u5668\u547d\u4ee4\u5217\u8868",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u670d\u52a1\u5668\u547d\u4ee4rcon",children:"\u670d\u52a1\u5668\u547d\u4ee4\uff08RCON\uff09"}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u4f55\u4f7f\u7528 RCON \u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"rcon",children:"RCON"}),"\n",(0,r.jsx)(t.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cpalworld-server-docker \u6620\u50cf\u5df2\u542f\u7528RCON\u3002\n\u6253\u5f00RCON CLI \u975e\u5e38\u7b80\u5355\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'docker exec -it palworld-server rcon-cli "<\u547d\u4ee4> <\u6570\u503c>"\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5411\u670d\u52a1\u5668\u4e2d\u7684\u6240\u6709\u4eba\u5e7f\u64ad\u6d88\u606f\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'docker exec -it palworld-server rcon-cli "Broadcast Hello everyone"\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u8fd9\u5c06\u6253\u5f00\u4e00\u4e2a\u4f7f\u7528 RCON \u5c06\u547d\u4ee4\u5199\u5165 Palworld \u670d\u52a1\u5668\u7684CLI\u3002"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"\u76ee\u524d\u4e0d\u652f\u63f4\u975e ASCII \u7684\u5b57\u5143\uff0c\u4ee5\u53ca\u4f7f\u7528\u7a7a\u767d\u65f6\uff0c\u53ea\u4f1a\u663e\u793a\u7b2c\u4e00\u4e2a\u5b57\u4e32\u3002"})}),"\n",(0,r.jsx)(t.h3,{id:"\u670d\u52a1\u5668\u547d\u4ee4\u5217\u8868",children:"\u670d\u52a1\u5668\u547d\u4ee4\u5217\u8868"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u547d\u4ee4"}),(0,r.jsx)(t.th,{children:"\u4fe1\u606f"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Shutdown (\u79d2) (\u4fe1\u606f)"}),(0,r.jsx)(t.td,{children:"\u670d\u52a1\u5668\u5c06\u5728(\u79d2)\u540e\u5173\u95ed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DoExit"}),(0,r.jsx)(t.td,{children:"\u5f3a\u5236\u5173\u95ed\u670d\u52a1\u5668\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Broadcast"}),(0,r.jsx)(t.td,{children:"\u5411\u670d\u52a1\u5668\u4e2d\u6240\u6709\u73a9\u5bb6\u53d1\u9001\u6d88\u606f\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"KickPlayer (SteamID)"}),(0,r.jsx)(t.td,{children:"\u4ece\u670d\u52a1\u5668\u4e2d\u8e22\u51fa\u73a9\u5bb6\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BanPlayer (SteamID)"}),(0,r.jsx)(t.td,{children:"\u4ece\u670d\u52a1\u5668\u4e2d\u5c01\u7981\u73a9\u5bb6\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TeleportToPlayer (SteamID)"}),(0,r.jsx)(t.td,{children:"\u4f20\u9001\u5230\u76ee\u6807\u73a9\u5bb6\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"TeleportToMe (SteamID)"}),(0,r.jsx)(t.td,{children:"\u5c06\u76ee\u6807\u73a9\u5bb6\u4f20\u9001\u5230\u8eab\u8fb9\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ShowPlayers"}),(0,r.jsx)(t.td,{children:"\u663e\u793a\u6240\u6709\u5df2\u8fde\u63a5\u73a9\u5bb6\u4fe1\u606f\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Info"}),(0,r.jsx)(t.td,{children:"\u663e\u793a\u670d\u52a1\u5668\u4fe1\u606f\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Save"}),(0,r.jsx)(t.td,{children:"\u4fdd\u5b58\u6e38\u620f\u3002"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["\u8bf7\u67e5\u770b ",(0,r.jsx)(t.a,{href:"https://tech.palworldgame.com/server-commands",children:"\u5b98\u65b9\u6587\u6863"})," \u4ee5\u83b7\u53d6\u6240\u6709\u547d\u4ee4\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);
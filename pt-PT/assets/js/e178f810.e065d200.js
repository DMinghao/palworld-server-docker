"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[537],{3913:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=o(4848),n=o(8453);const t={sidebar_position:8},i="Executar sem permiss\xf5es root",d={id:"guides/running-without-root",title:"Executar sem permiss\xf5es root",description:"Isto \xe9 apenas para utilizadores avan\xe7ados",source:"@site/i18n/pt-PT/docusaurus-plugin-content-docs/current/guides/running-without-root.md",sourceDirName:"guides",slug:"/guides/running-without-root",permalink:"/pt-PT/guides/running-without-root",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/running-without-root.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Stopping the server when no players are connected",permalink:"/pt-PT/guides/automatic-server-stopping"},next:{title:"Advanced",permalink:"/pt-PT/category/advanced"}},c={},a=[];function u(e){const r={a:"a",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"executar-sem-permiss\xf5es-root",children:"Executar sem permiss\xf5es root"}),"\n",(0,s.jsx)(r.p,{children:"Isto \xe9 apenas para utilizadores avan\xe7ados"}),"\n",(0,s.jsxs)(r.p,{children:["\xc9 poss\xedvel executar este contentor e\n",(0,s.jsx)(r.a,{href:"https://docs.docker.com/engine/reference/run/#user",children:"substituir o utilizador predefinido"})," que \xe9 o root nesta imagem."]}),"\n",(0,s.jsxs)(r.p,{children:["Se especificares o user e o grupo, ",(0,s.jsx)(r.code,{children:"PUID"})," e ",(0,s.jsx)(r.code,{children:"PGID"})," s\xe3o ignorados."]}),"\n",(0,s.jsxs)(r.p,{children:["Se quiseres encontrar o teu UID: ",(0,s.jsx)(r.code,{children:"id -u"}),"\nSe quiseres encontrar o teu PGID: ",(0,s.jsx)(r.code,{children:"id -g"})]}),"\n",(0,s.jsxs)(r.p,{children:["Tens que definir ",(0,s.jsx)(r.code,{children:"N\xdaMERO_UID:N\xdaMERO_GID"})]}),"\n",(0,s.jsx)(r.p,{children:"Vamos assumir que o teu UID \xe9 1000 e GID \xe9 1001"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["No docker run adicionar ",(0,s.jsx)(r.code,{children:"--user 1000:1001 \\"})," por cima da \xfaltima linha"]}),"\n",(0,s.jsxs)(r.li,{children:["No docker compose adicionar ",(0,s.jsx)(r.code,{children:"user: 1000:1001"})," por cima das Ports."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Se desejar execut\xe1-lo com um UID/GID diferente do seu, ter\xe1 de alterar a propriedade do diret\xf3rio que\nest\xe1 associado: ",(0,s.jsx)(r.code,{children:"chown UID:GID palworld/"}),"\nou alterando as permiss\xf5es de todos os outros: ",(0,s.jsx)(r.code,{children:"chmod o=rwx palworld/"})]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>d});var s=o(6540);const n={},t=s.createContext(n);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[563],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,p(p({ref:t},m),{},{components:a})):n.createElement(k,p({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9618:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],i={sidebar_position:2},o="Manual",s={unversionedId:"Installation/manual",id:"Installation/manual",title:"Manual",description:"Install TeleDrive with manual installation.",source:"@site/docs/Installation/manual.md",sourceDirName:"Installation",slug:"/Installation/manual",permalink:"/docs/Installation/manual",editUrl:"https://github.com/mgilangjanuar/teledrive/edit/staging/docs/docs/Installation/manual.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/Installation/docker"},next:{title:"PM2",permalink:"/docs/Deployment/pm2"}},m={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"\u26a0\ufe0f Experimental \u26a0\ufe0f",id:"\ufe0f-experimental-\ufe0f",level:3},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Database preparation",id:"database-preparation",level:3},{value:"Dependencies installation",id:"dependencies-installation",level:3},{value:"Build:",id:"build",level:2},{value:"Run:",id:"run",level:2},{value:"Upgrade",id:"upgrade",level:2}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"manual"},"Manual"),(0,l.kt)("p",null,"Install TeleDrive with manual installation."),(0,l.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("p",null,"Get started by installing all needed services and define all variables."),(0,l.kt)("h3",{id:"\ufe0f-experimental-\ufe0f"},"\u26a0\ufe0f Experimental \u26a0\ufe0f"),(0,l.kt)("p",null,"You can directly build and run the application with bash script."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x ./install.manual.sh\n./install.manual.sh\n")),(0,l.kt)("p",null,"If it's succeed you don't need to follow the steps below."),(0,l.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," version 14.2 or above:"),(0,l.kt)("p",{parentName:"li"},"Install with this command (Ubuntu):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install postgresql -y\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14.2 or above:"),(0,l.kt)("p",{parentName:"li"},"Install LTS version with command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install nodejs npm -y    # if, using Ubuntu\n\n# install stable version\nnpm i -g n\nn stable\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," version 1.22.17 or above:"),(0,l.kt)("p",{parentName:"li"},"Install with npm:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g yarn\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define all server variables in ",(0,l.kt)("inlineCode",{parentName:"p"},"./server/.env"),", you can copy from ",(0,l.kt)("inlineCode",{parentName:"p"},"./server/.env.example")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cp ./server/.env.example ./server/.env\n")),(0,l.kt)("p",{parentName:"li"},"Explanation:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENV"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Hide the logs for production, default: develop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Port for running API, default: 4000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TG_API_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application ID from your Telegram App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TG_API_HASH"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application hash from Telegram App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADMIN_USERNAME"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Telegram username of the admin TeleDrive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATABASE_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL connection URI, format: ",(0,l.kt)("inlineCode",{parentName:"td"},"postgresql://[user]:[password]@[host]:[port][/dbname][?paramspec]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Random string for encrypt JWT web token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FILES_JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Random string for encrypt public files"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define all web variables in ",(0,l.kt)("inlineCode",{parentName:"p"},"./web/.env"),", you can copy from ",(0,l.kt)("inlineCode",{parentName:"p"},"./web/.env.example")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cp ./web/.env.example ./web/.env\n")),(0,l.kt)("p",{parentName:"li"}," Explanation:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"env"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_API_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Base URL for the API, default: ",(0,l.kt)("inlineCode",{parentName:"td"},"''")," (empty string)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_TG_API_ID"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application ID from your Telegram App ",(0,l.kt)("em",{parentName:"td"},"(for experimental features)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REACT_APP_TG_API_HASH"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Application hash from Telegram App  ",(0,l.kt)("em",{parentName:"td"},"(for experimental features)"))))))),(0,l.kt)("h3",{id:"database-preparation"},"Database preparation"),(0,l.kt)("p",null,"You need to create and import the database schema."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create database"),(0,l.kt)("p",{parentName:"li"},"Login as ",(0,l.kt)("em",{parentName:"p"},"postgres")," user:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"psql -U postgres\n\n# or\nsudo su - postgres\npsql\n")),(0,l.kt)("p",{parentName:"li"},"Then, run:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE DATABASE teledrive;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Import schema"),(0,l.kt)("p",{parentName:"li"},"Exit from psql (with ",(0,l.kt)("inlineCode",{parentName:"p"},"\\q"),") and run this command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"psql teledrive < ./server/src/model/migrations/dump.sql\npsql teledrive < ./server/src/model/migrations/dump.20220406.sql\n")),(0,l.kt)("p",{parentName:"li"},"Sometimes, we need to copy the dump file to the ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/postgresql")," directory first:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cp ./server/src/model/migrations/dump.sql /var/lib/postgresql/\n\n# change owner\nsudo su - postgres\n\n# import dump file\npsql teledrive < dump.sql\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note.")," ",(0,l.kt)("em",{parentName:"p"},"If you follow the instructions above then you need to fill the server variables:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DATABASE_URL"),": postgresql://postgres@localhost:5432/teledrive")),(0,l.kt)("h3",{id:"dependencies-installation"},"Dependencies installation"),(0,l.kt)("p",null,"Install all dependencies with yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,l.kt)("h2",{id:"build"},"Build:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn workspaces run build\n")),(0,l.kt)("h2",{id:"run"},"Run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd server && node dist/index.js\n")),(0,l.kt)("p",null,"Done! You can now open ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:4000"},"localhost:4000")," in your browser \ud83c\udf8a"),(0,l.kt)("h2",{id:"upgrade"},"Upgrade"),(0,l.kt)("p",null,"Upgrade to the latest version of TeleDrive with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git pull origin main             # or, staging for the latest updates\n\nyarn install                     # install\nyarn workspaces run build        # build\ncd server && node dist/index.js  # run\n")),(0,l.kt)("p",null,"Next, you can deploy TeleDrive with ",(0,l.kt)("a",{parentName:"p",href:"/docs/deployment/vercel"},"Vercel")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/deployment/pm2"},"PM2"),"."))}c.isMDXComponent=!0}}]);
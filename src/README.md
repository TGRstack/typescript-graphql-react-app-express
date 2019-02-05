# SRC structure

Everything in this source directory is **typescript**, built by **webpack** and compiled into  **/build**

```text
.
├── app/
│   ├── index.tsx                 # app entry point (webpack client build)
│   ├── index.template.html       # client entry point (express html served)
│   ├── assets/                   # static files
│   ├── components/
│   ├── config/                   # client config
│   ├── gql/                      # replaces redux
│   ├── middleware/
│   ├── modules/
│   ├── root/                     # global definitions
│   │   ├── application.tsx
│   │   ├── stack.tsx
│   │   ├── global.scss
│   │   └── theme.scss
│   ├── routes/                   # each route can have multiple viewports
│   ├── types/
│   └── utils/
│
├── server/
│
├── config/                       # shared config (client/server)
└── types/                        # shared typing (client/server)
```

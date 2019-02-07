# SRC structure

Everything in this source directory is **typescript**, built by **webpack** and compiled into  **/build**

```text
.
├── app/
│   ├── index.tsx             # app entry point (webpack client build)
│   ├── index.template.html   # client entry point (express html served)
│   ├── assets/               # static files
│   ├── components/
│   ├── config/               # client config
│   ├── gql/                  # replaces redux
│   ├── middleware/
│   ├── modules/              # first-party modules (co-developed)
│   │   └── some-lib          # pre-cursor to extracting to a standalone module
│   ├── root/                 # global definitions
│   │   ├── application.tsx
│   │   ├── stack.tsx
│   │   ├── global.scss
│   │   └── theme.scss
│   ├── routes/               # each route can have multiple viewports
│   ├── types/                # appp ts modules, common, interfaces
│   └── utils/                # useful functions
│
└── server/
    ├── index.ts              # build/service entry point
    ├── stack.ts              # import service & middlewares
    ├── __tests__/            # tests for stack.ts
    ├── config/               # server configs and vars
    ├── middlewares/          # third-party HOC functionality (apollo, loggers, routers)
    ├── modules/              # first-party modules (co-developed)
    │   └── some-lib          # pre-cursor to extracting to a standalone module
    ├── service/              # service initialization (express, apollo, storybook)
    ├── types/                # server ts modules, common, interfaces
    └── utils/                # useful functions
```

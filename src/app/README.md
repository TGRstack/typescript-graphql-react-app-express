# APP wiring

- `app/index.tsx` is the entrance point which hooks onto the web client
- `app/index.template.html` is the web client template. HEAD is controlled by react-helmet
- `app/root/*` is the actual starting point for the React Logic

```text
// this is not a directory structure
// this is a call stack diagram
// everything is relative to `/src/app/`
index.tsx
└── root/stack.tsx                  # combines React, Middlewares, and Application
    └── middleware/index.tsx        # order middleware like Router, Redux, Apollo
        └── root/application.tsx    # global-ui container wraps Routes
            └──  routes/Routes.tsx  # registration of routes and their pages
```

## APP STRUCTURE

refer to `/src/README.md`

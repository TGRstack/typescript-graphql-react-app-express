# ROUTES

In this directory define all the pages and/or views.

## Desktop only layout

```text
routes
├── index.ts                  # just exports `Routes.tsx`
├── Routes.tsx                # register all the routes
├── Error404/
│   ├── index.tsx             # just exports `Error404.tsx`
│   └── Error404.tsx          # an error page
└── Home/
    ├── index.tsx             # just exports `Home.tsx`
    └── Home.tsx              # a home page
```

## 4-view layout

In @falieson's opinion the best way to approach responsive development is to split all ideas into 2 dimensions: Small vs Large, and Portrait vs Landscape resulting in 4 views.

If you are doing mobile first development then start with `port_sm`, and `land_lg` is equivalent to desktop. Then fill out the inbetween (`port_lg`, `land_sm`) views for large mobiles & tablets.

```text
routes
├── index.ts                  # just exports `Routes.tsx`
├── Routes.tsx                # register all the routes
├── Error404/
│   ├── index.tsx             # media query to decide from available views
│   ├── Error404.port_sm.tsx  # an error page for Small Portrait views  (small mobile)
│   ├── Error404.land_lg.tsx  # an error page for Large Landscape views (desktop)
│   ├── Error404.port_lg.tsx  # an error page for Large Portrait views  (large phone)
│   └── Error404.land_sm.tsx  # an error page for Small Landscape views (tablet)
└── Home/
    ├── index.tsx             # media query to decide from available views
    ├── Home.port_sm.tsx      # an error page for Small Portrait views  (small mobile)
    ├── Home.land_lg.tsx      # an error page for Large Landscape views (desktop)
    ├── Home.port_lg.tsx      # an error page for Large Portrait views  (large phone)
    └── Home.land_sm.tsx      # an error page for Small Landscape views (tablet)
```

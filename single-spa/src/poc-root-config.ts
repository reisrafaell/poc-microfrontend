import { registerApplication, start, LifeCycles } from "single-spa";



registerApplication({
  name: "@poc/main-page",
  app: () =>
    System.import<LifeCycles>(
      "@poc/main-page"
    ),
    activeWhen:  ["/"],
});

start({
  urlRerouteOnly: true,
});


import { registerApplication, start, LifeCycles } from "single-spa";



registerApplication({
  name: "@poc/main-page",
  app: () =>
    System.import<LifeCycles>(
      "@poc/main-page"
    ),
    activeWhen:  ["/"],
});

registerApplication({
  name: "@new-header",
  app: () =>
    System.import<LifeCycles>(
      "@new-header"
    ),
    activeWhen:  ["/header"],
});

start({
  urlRerouteOnly: true,
});


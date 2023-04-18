export const routesMap = {
  INFO: { path: '/your-info', label: 'Your info' },
  PLAN: { path: '/select-plan', label: 'Select plan' },
  'ADD-ONS': { path: '/add-ons', label: 'Add-ons' },
  SUMMARY: { path: '/summary', label: 'Summary' },
};

export const routeSteps = Object.values(routesMap).map(
  (route, index, routesArr) => ({
    step: index + 1,
    label: route.label,
    path: route.path,
    prev: routesArr[index - 1]?.path,
    next: routesArr[index + 1]?.path,
  })
);

import { describe, expect, it } from 'vitest';
import { routes } from './app.routes';

describe('routes', () => {
  it('should keep authentication outside the application layout', () => {
    expect(routes[0].path).toBe('');
    expect(routes[0].pathMatch).toBe('full');
    expect(routes[1].children?.map((route) => route.path)).toEqual([
      'dashboard',
      'transactions',
      'cards-accounts',
      'targets-quotes',
      'configuration',
    ]);
  });

  it('should lazy load a component for every route', async () => {
    const routesWithComponents = [
      ...routes.slice(0, 1),
      ...routes[1].children!,
      ...routes.slice(2),
    ];
    const components = await Promise.all(
      routesWithComponents.map((route) => route.loadComponent!()),
    );

    expect(components).toHaveLength(routesWithComponents.length);
    expect(components.every(Boolean)).toBe(true);
  });
});

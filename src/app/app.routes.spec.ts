import { describe, expect, it } from 'vitest';
import { routes } from './app.routes';

describe('routes', () => {
  it('should define the application paths in order', () => {
    expect(routes.map((route) => route.path)).toEqual([
      '',
      'transactions',
      'cards-accounts',
      'targets-quotes',
      'configuration',
      '**',
    ]);
  });

  it('should lazy load a component for every route', async () => {
    const components = await Promise.all(routes.map((route) => route.loadComponent!()));

    expect(components).toHaveLength(routes.length);
    expect(components.every(Boolean)).toBe(true);
  });
});

process.env.NODE_CONFIG_DIR = __dirname + '/ts-conf';

import config from '../lib';

describe('mikro-config [ts conf]', () => {
  process.env.MIKRO_CONFIG_PREFIX = '';

  it('has `get` method', () => {
    expect(config.get('key1')).toBe('value1');
    expect(config.get('key2')).toBe(123);
    expect(config.get('key3')).toBe(false);
    expect(config.get('key4')).toBe(true);
    expect(config.get('key5')).toBeInstanceOf(Object);
    expect(config.get('key5.subKey1')).toBe(1);
    expect(config.get('key5.subKey2')).toBe('2');
    expect(config.get('key5.subKey3')).toBe('true');
    expect(config.get('key5.subKey4')).toBe(true);
    expect(config.get('routes')).toBeInstanceOf(Object);
    expect(config.get('routes.route1')).toBe('path1');
    expect(config.get('routes.route2')).toBe('path2');
    expect(config.get('routes.route3')).toBe(1);
    expect(config.get('routes.route4')).toBe('true');
    expect(config.get('routes.route5')).toBe(`ServiceName('true')`);
    expect(config.get('routes.route6')).toBe(`ServiceName(1)`);
    expect(config.get('routes.route7')).toBe(`ServiceName('true', 1)`);
    expect(config.get('routes.route8')).toBe(`ServiceName('true', 1, 'test', 456)`);
  });

  it('has direct property getter', () => {
    expect(config.key1).toBe('value1');
    expect(config.key2).toBe(123);
    expect(config.key3).toBe(false);
    expect(config.key4).toBe(true);
    expect(config.key5).toBeInstanceOf(Object);
    expect(config.key5.subKey1).toBe(1);
    expect(config.key5.subKey2).toBe('2');
    expect(config.key5.subKey3).toBe('true');
    expect(config.key5.subKey4).toBe(true);
  });

  it('has `has` method', () => {
    expect(config.has('key1')).toBe(true);
    expect(config.has('key2')).toBe(true);
    expect(config.has('key3')).toBe(true);
    expect(config.has('key4')).toBe(true);
    expect(config.has('key5')).toBe(true);
    expect(config.has('key6')).toBe(false);
    expect(config.has('key5.subKey1')).toBe(true);
    expect(config.has('key5.subKey2')).toBe(true);
    expect(config.has('key5.subKey3')).toBe(true);
    expect(config.has('key5.subKey4')).toBe(true);
    expect(config.has('key5.subKey5')).toBe(false);
  });
});

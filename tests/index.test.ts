import { describe, expect, it } from 'vitest';
import { format, resolveOptions } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-coffee', () => {
  it('registers .coffee extension', () => {
    expect(plugin.extensions).toContain('.coffee');
  });

  it('is ruby compatible and indentation-based', () => {
    expect(plugin.rubyCompatible).toBe(true);
    expect(plugin.indentationBased).toBe(true);
  });

  it('formats a CoffeeScript file in default mode (brace/comma exiling)', () => {
    const input = 'obj = {\n  foo: "bar",\n  hoge: "fuga",\n}\n';
    const out = format(input, resolveOptions({ minColumn: 60, offset: 4 }), '.coffee', plugin);
    expect(out.split('\n')[0]).toMatch(/obj =\s+\{$/);
  });

  it('appends end for an indented block in ruby mode', () => {
    const input = 'f = (x) ->\n  use x\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.coffee',
      plugin,
    );
    expect(out).toContain('end = null');
    const lines = out.split('\n').filter((l) => l.trim().length > 0);
    expect(lines.at(-1)!.trim()).toBe('end');
  });

  it('idempotent: formatting twice gives the same result (ruby mode)', () => {
    const input = 'f = (x) ->\n  if x?\n    use x\n  else\n    skip()\ng = ->\n  done()\n';
    const opts = resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 });
    const first = format(input, opts, '.coffee', plugin);
    const second = format(first, opts, '.coffee', plugin);
    expect(second).toBe(first);
  });
});

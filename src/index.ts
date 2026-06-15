import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for CoffeeScript (.coffee)
 *
 * CoffeeScript blocks are delimited by indentation, not braces, so ruby mode
 * uses the core's indentation-based (`offside rule`) `end` injection rather than
 * brace tracking — see `indentationBased`.
 *
 * - Declaration: `end = null`  (top-level assignment, after any leading imports)
 * - End statement: bare `end`  (a valid identifier reference in CoffeeScript)
 *
 * The output is intentionally silly: `end` is just an undefined-ish variable
 * reference, kept harmless by declaring `end = null` at the top.
 */
const plugin: IndentierPlugin = {
  extensions: ['.coffee'],
  rubyCompatible: true,
  indentationBased: true,
  declarationTemplate: 'end = null',
  // Place the declaration after any leading `import`/`require` lines so it does
  // not split an import section.
  declarationInsertIndex: (lines) => {
    for (let i = 0; i < lines.length; i++) {
      const body = lines[i]!.body.trim();
      if (body === '') continue;
      if (/^import\b/.test(body)) continue;
      if (/\brequire\b/.test(body)) continue;
      return i;
    }
    return lines.length;
  },
};

export default plugin;

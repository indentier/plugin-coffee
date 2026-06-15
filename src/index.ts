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
  // Pin the declaration to the very top (line 1), above any imports. CoffeeScript
  // hoists `import`s, so a leading `end = null` is valid, and a fixed position
  // keeps the harmless declaration out of the code body.
  declarationInsertIndex: () => 0,
  // Separate the declaration from the rest of the file with blank lines.
  declarationBlankLinesAfter: 3,
};

export default plugin;

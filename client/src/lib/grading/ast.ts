/**
 * AST Validation for TypeScript
 * Simple regex-based validation for educational purposes.
 * Note: A full implementation would use the TypeScript compiler API.
 */

export async function validateAst(
  code: string,
  astRules: any[] | undefined
): Promise<{ passed: boolean; errors: string[] }> {
  if (!astRules || astRules.length === 0) {
    return { passed: true, errors: [] };
  }

  const errors: string[] = [];

  for (const rule of astRules) {
    const ruleType = rule.type;
    const name = rule.name;
    const minCount = rule.minCount || 1;

    let count = 0;

    switch (ruleType) {
      case 'variable_declaration':
      case 'variable_assignment':
        // Match const, let, var assignments
        const varRegex = new RegExp(`(const\|let\|var)\\s+${name ? name : '[\\w$]+'}\\s*=`, 'g');
        count = (code.match(varRegex) || []).length;
        if (count < minCount) {
          errors.push(`Missing required variable ${name ? `"${name}"` : 'declaration'}`);
        }
        break;

      case 'function_call':
        const funcRegex = new RegExp(`${name ? name.replace('.', '\\.') : '[\\w$]+'}\\s*\\(`, 'g');
        count = (code.match(funcRegex) || []).length;
        if (count < minCount) {
          errors.push(`Missing required function call ${name ? `"${name}"` : ''}`);
        }
        break;

      case 'interface_declaration':
        const interfaceRegex = new RegExp(`interface\\s+${name ? name : '[\\w$]+'}\\s*{`, 'g');
        count = (code.match(interfaceRegex) || []).length;
        if (count < minCount) {
          errors.push(`Missing required interface ${name ? `"${name}"` : 'declaration'}`);
        }
        break;

      case 'class_declaration':
        const classRegex = new RegExp(`class\\s+${name ? name : '[\\w$]+'}`, 'g');
        count = (code.match(classRegex) || []).length;
        if (count < minCount) {
          errors.push(`Missing required class ${name ? `"${name}"` : 'declaration'}`);
        }
        break;

      case 'if_statement':
        count = (code.match(/if\s*\(/g) || []).length;
        if (count < minCount) {
          errors.push('Missing required "if" statement');
        }
        break;

      case 'loop':
        const loopRegex = /(for|while)\s*\(|(\.forEach|\.map|\.filter)\(/g;
        count = (code.match(loopRegex) || []).length;
        if (count < minCount) {
          errors.push('Missing required loop (for, while, or array method)');
        }
        break;

      case 'type_annotation':
        // Match : string, : number, etc.
        count = (code.match(/:\s*(string|number|boolean|any|[\w$]+)/g) || []).length;
        if (count < minCount) {
          errors.push('Missing required type annotations');
        }
        break;

      case 'template_literal':
      case 'f_string':
        count = (code.match(/`[^`]*`/g) || []).length;
        if (count < minCount) {
          errors.push('Missing required template literal (backticks)');
        }
        break;
    }
  }

  return {
    passed: errors.length === 0,
    errors,
  };
}

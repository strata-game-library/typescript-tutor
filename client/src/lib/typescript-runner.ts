/**
 * TypeScript Runner for Strata Lessons
 * Executes student code in a controlled environment with access to the Strata Engine mock.
 */

import * as Strata from './strata-engine';

export interface ExecutionResult {
  output: string;
  error: string | null;
}

export class TypeScriptRunner {
  private outputBuffer: string[] = [];

  constructor() {
    this.outputBuffer = [];
  }

  private mockConsole = {
    log: (...args: any[]) => {
      this.outputBuffer.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '));
    },
    error: (...args: any[]) => {
      this.outputBuffer.push(`ERROR: ${args.join(' ')}`);
    },
    warn: (...args: any[]) => {
      this.outputBuffer.push(`WARN: ${args.join(' ')}`);
    }
  };

  async runSnippet(code: string): Promise<ExecutionResult> {
    this.outputBuffer = [];
    
    try {
      // Create a context with Strata classes and mock console
      const context = {
        ...Strata,
        console: this.mockConsole,
        Math,
        Object,
        Array,
        String,
        Number,
        Boolean,
        Date
      };

      // Remove imports from code as they are provided in context
      const cleanedCode = code.replace(/import\s+.*?\s+from\s+['"].*?['"];?/g, '');

      // Execute code
      const execute = new Function(...Object.keys(context), cleanedCode);
      execute(...Object.values(context));

      return {
        output: this.outputBuffer.join('\n'),
        error: null
      };
    } catch (err) {
      return {
        output: this.outputBuffer.join('\n'),
        error: err instanceof Error ? err.message : String(err)
      };
    }
  }
}

export function createTypeScriptRunner(): TypeScriptRunner {
  return new TypeScriptRunner();
}

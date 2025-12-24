/**
 * Pyodide type declarations
 * Shared type definitions for Pyodide integration
 */

/** Pyodide initialization options */
export interface PyodideLoadOptions {
  indexURL?: string;
  lockFileURL?: string;
  fullStdLib?: boolean;
  stdin?: () => string | null;
  stdout?: (text: string) => void;
  stderr?: (text: string) => void;
}

/** Basic Pyodide interface */
export interface PyodideInterface {
  runPython: (code: string) => unknown;
  runPythonAsync: (code: string) => Promise<unknown>;
  loadPackage: (packages: string | string[]) => Promise<void>;
  globals: Map<string, unknown>;
  FS: {
    writeFile: (path: string, data: string | Uint8Array) => void;
    readFile: (path: string, options?: { encoding?: string }) => string | Uint8Array;
    mkdir: (path: string) => void;
    readdir: (path: string) => string[];
    unlink: (path: string) => void;
  };
}

declare global {
  interface Window {
    /** Pyodide loader function */
    loadPyodide?: (options?: PyodideLoadOptions) => Promise<PyodideInterface>;
    /** Pyodide instance once loaded */
    pyodide?: PyodideInterface;
  }
}

interface ImportMetaEnv {
  readonly VITE_HTML_API_KEY: string;
  readonly VITE_JS_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Pulled from typescript-eslint, but cannot guarantee that
// that package is available so hardcode these
// react requires this to be number; instead of 0, 1, 2
type Severity = number;
type SeverityString = 'error' | 'off' | 'warn';
type RuleLevel = Severity | SeverityString;
type RuleLevelAndOptions = [RuleLevel, ...unknown[]];
type RuleEntry = RuleLevel | RuleLevelAndOptions;
type RulesRecord = Partial<Record<string, RuleEntry>>;

type FlatConfig = Partial<{
  languageOptions:
    | Partial<{
        parser: unknown;
        sourceType: string;
      }>
    | {
        parserOptions: Partial<{
          ecmaFeatures: Partial<{
            globalReturn: boolean;
            impliedStrict: boolean;
            experimentalObjectRestSpread: boolean;
            jsx: boolean;
          }>;
        }>;
      };
  name: string;
  plugins: {
    [key: string]: unknown;
  };
  rules: RulesRecord;
  settings: Partial<{
    react: {
      version: string;
    };
    [key: string]: unknown;
  }>;
}>;

type RuleModule = {
  config: FlatConfig;
  valid: boolean;
};

type PossibleRuleModule =
  | Omit<RuleModule, 'valid'>
  | { config: undefined }
  | undefined;

export type { FlatConfig, PossibleRuleModule, RuleModule };

import { PossibleRuleModule, RuleModule } from '../types.js';

const addValid = (
  ruleModules: PossibleRuleModule[] | undefined,
): RuleModule[] =>
  ruleModules
    ?.filter(
      (ruleModule: PossibleRuleModule): ruleModule is RuleModule =>
        ruleModule?.config !== undefined,
    )
    .map((ruleModule) => ({
      ...ruleModule,
      valid: true,
    })) ?? [];

export { addValid };

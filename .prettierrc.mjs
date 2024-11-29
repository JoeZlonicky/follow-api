//@ts-check
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-prisma', 'prettier-plugin-organize-imports'],
  singleQuote: true,
  organizeImportsSkipDestructiveCodeActions: true,
};

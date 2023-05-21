module.exports = {
  importOrder: [
    "^@core/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/app/(.*)$",
    "^@/pages/(.*)$",
    "^@/components/(.*)$",
    "^@/libs/(.*)$",
    "^@/hooks/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

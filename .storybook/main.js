// 参考:https://storybook.js.org/docs/react/configure/typescript
module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/preset-create-react-app',
    ],
  };
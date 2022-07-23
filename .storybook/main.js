// Warning: ReactDOM.render is no longer supported in React 18.
// Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.
//https://github.com/storybookjs/storybook/issues/17831
module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite'
  },
  'features': {
    'storyStoreV7': true
  }
};

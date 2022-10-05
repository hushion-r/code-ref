1. Create React App

```
npx create-react-app my-app --template redux-typescript
```

2. Install
   1. Storybook
   ```
   npm storybook init
   ```
   2. Chakra
   ```
   npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
   ```
   - Later add icons, fonts. Add files/providers
   3. Check that everything running
   4. pnpm
   ```
   pnpm install
   ```
   ```
   pnpm start
   ```
   5. Node Version Manager
      1. Create `.nvmrc` file
      2. `nvm use`
   6. open `.zshrc`
      - Add
      ```
      pnpm-v() {
        nvm use && pnpm run $1
      }
      ```
      - Run pnpm-v before commands
   7. Test that it runs
   8. Playwright
   ```
   pnpm init playwright@latest
   ```
   - If pnpnm doesn't work
   ```
   pnpm install --save-dev @playwright/test
   ```
   - Storybook add-on
   ```
   pnpm install storybook-addon-playwright
   ```
   9. Add linter settings
   10. Add prehooks
   11. Update README instructions

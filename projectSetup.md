1. Run create react app in parent directory with typescript-redux template
2. Install
	1. 
```
npm storybook init
```

	2. 

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

		1. later add icons, fonts
	3. Check that everything running
	4.
 ```
 pnpm install
 ```
	   ```
	   pnpm start
	   ```
	5. Create `.nvmrc` file
	6. 
```
nvm use
```
	7. open `.zshrc`
		1. Add
		  ```
			pnpm-v() {
			  nvm use && pnpm run $1
			}
			```
		 2. Run `pnpm-v` before commands
	8. Test that it runs
	9. If pnpnm doesn't work:
```
pnpm init playwright@latest
```
		1. 
```
pnpm install --save-dev @playwright/test
``` 
	10. 
```
pnpm install storybook-addon-playwright
```
	11. Add linter settings
	12. Add prehooks
	13. Update README instructions

# Code Reference

## General To-Know
### Workarounds
When making new accounts, do email+etc@compozelabs.com, and it will register as diff email but send to main email

### Package
major.minor.patch

### Code not working?
-


## CLI

#### Address already in use
```shell
lsof -i tcp:4000
kill -9
```

### Git

#### Rebase
```bash
git pull -r
```

#### Branch
```bash
git branch
git pull
git stash
git checkout [[branch name]]
git merge master

git fetch —prune
git branch -a
git remote prune origin
```

### React
#### App
```bash
npm run clean-start
npm run [[android, ios]]
```

#### Installing packages
You can install a particular version of the library by running 
```bash
npm install <library-name>@<version-number>
```
```bash
npm i … prop-types
npm i --save-dev @types/react-sortable-tree
```

### Storybook
```bash
npm run storybook
```
```bash
npm run storyshots
```

### Docker
```bash
docker build . -t name:tag
```
```bash
docker build . -t fca:local
```

## React Code

### Random Things I’ve Gotten Weird
- Must have `display: flex` to properly use all flex properties
- Must have `{...register}` as last item in <Input />
- `let listToSort = [...immutableList];`
- Must have redux function in dispatch
- Don’t put dispatch in render
- Make sure backend imports are correct
- “varchar” vs “int”
- `await`

## Code Tidbits
### Console.log()
```js
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
```
### Sort alphabetically
```js
.sort((a, b) => a.name.localeCompare(b.name))
```

## Hooks
Must always be used in root level of functional component

```tsx
interface ComponentProps { var: Type; }
export const Component = ( { var }: ComponentProps ): JSX.Element => { return (<></>)}
 
export const Component = (): JSX.Element => { return (<></>) }
```

### useState
```tsx
import { useState } from 'react';
```
`const [val, setVal] = useState<type>(initialVal);`
```tsx
const [, set] = useState<>();
```

### useEffect
```tsx
import { useEffect } from 'react';
```
`useEffect(() => {action}, [trigger]);`
```tsx
useEffect(() => {}, []);
```

### React Hook Forms
```tsx
interface xParams {
 x: type;
}
 
const { register, handleSubmit, formState: { errors }, } = useForm<xParams>();
 
const xNameRegister = register(X_NAME_KEY);
 
const onSubmit = async (data: xParams): Promise<void> => {}
 
<form onSubmit={handleSubmit(onSubmit)}>
    <Input {...xNameRegister} />
    <Button type='submit'></Button>
</form>
 
const X_NAME_KEY = 'xName';
```

## SQL
```sql
UPDATE [master].[dbo].[user_entity] SET is_admin = 1 WHERE email = 'rae+admin@compozelabs.com'
```
```sql
UPDATE [master].[dbo].[user_entity] SET [eula] = 0
```
Can use `like` instead of `=`
```sql 
INSERT INTO [master].[dbo].[user_entity] ([first_name], [last_name]) VALUES ('Rae', 'Hushion')
```

## Deploy
### Deploy to TestFlight
1. Check iOS on dev server
2. App Store Connect, check for version + build
3. Xcode
4. Click folder icon in top left. Click on app folder
5. Go to General tab, change version + build
6. Product ==> Archive
7. If fail, go to Build Phases ==> Copy Bundle Resources, delete certain fonts
8. Click through defaults
9. App Store Connect, click No

### Azure
1. ```bash npm run build dev/production ```
2. Scripts > deploy.sh
3. Uncomment `az acr build --registry mysiteiqportal --image portalimage .`  
4. ```bash npm run deploy dev ```
5. https://portal.azure.com/#blade/WebsitesExtension/SCIFrameBlade/id/%2Fsubscriptions%2F02f8b795-35b1-4e26-9b1f-8b8cbb28f1f1%2FresourceGroups%2FRG-CUS%2Providers%2FMicrosoft.Web%2Fsites%2Fdev-mysiteiq/source/OverviewBlade
6. Diagnose and Solve Problems
7. Availability & Performance
8. Application logs
9. Platform logs


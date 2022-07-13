# Code Reference

## General To-Know

### Code not working?
- [Address already in use](#address-already-in-use)
- [React Random Things I’ve Gotten Weird](#random-things-ive-gotten-weird)

### Workarounds
When making new accounts, do email+etc@compozelabs.com, and it will register as diff email but send to main email

### Package
major.minor.patch

## CLI

#### Address already in use
```sh
lsof -i tcp:4000
```
```sh
kill -9
```

### Git

#### Rebase
```sh
git pull -r
```

#### Branch
```sh
git branch [[branch name]]
```
```sh
git pull
```
```sh
git stash
```
```sh
git switch [[branch name]]
```
```sh
git merge master
```

Cleanup
```sh
git fetch —prune
```
```sh
git branch -a
```
```sh
git remote prune origin
```

### React

#### App
```bash
npm run clean-start
npm run [[android, ios]]
```

#### Installing packages
You can install a particular version of the library by running `npm i <library-name>@<version-number>`
```bash
?
npm i … prop-types
```
Import types `@types/packageName`
```sh
npm i --save-dev @types/
```

### Storybook
```bash
npm run storybook
```
```bash
npm run storyshots
```

### Docker
i.e. `docker build . -t fca:local`
```bash
docker build . -t name:tag
```

## React Code

### Random Things I’ve Gotten Weird
- Must have `display: flex` to properly use all flex properties
- Must have `{...register}` as last item in `<Input />`
- `let listToSort = [...immutableList];`
- Must have redux function in dispatch
- Don’t put dispatch in render
- Make sure backend imports are correct
- “varchar” vs “int”
- `await`

### Code Tidbits

#### Console.log()
```js
console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
```

#### Sort alphabetically
```js
.sort((a, b) => a.name.localeCompare(b.name))
```

#### Filter out `isDeleted`
```js
.sort((a, b) => a.name.localeCompare(b.name))
```

#### Map
```js
.map(() => return {})
```

### Hooks
Must always be used in root level of functional component

```tsx
interface ComponentProps { var: Type; }
export const Component = ( { var }: ComponentProps ): JSX.Element => { return (<></>)}
 
export const Component = (): JSX.Element => { return (<></>) }
```

#### useState
```tsx
import { useState } from 'react';
```
`const [val, setVal] = useState<type>(initialVal);`
```tsx
const [, set] = useState<>();
```

#### useEffect
```tsx
import { useEffect } from 'react';
```
`useEffect(() => {action}, [trigger]);`
```tsx
useEffect(() => {}, []);
```

#### React Hook Forms
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

### Redux
useAppDispatch
```ts
const dispatch = useAppDispatch();
```

useAppSelector
const currentUser: UserData | undefined = useAppSelector(selectUserData);
```ts
const current:  | undefined = useAppSelector(select);
```

## Backend

### Code Tidbits

#### Relations
```ts
relations: [''],
```

#### Where
```ts
where: { id: Id, isDeleted: true }
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
1. ``` npm run build dev/production ```
2. Scripts > deploy.sh
3. Uncomment `az acr build --registry mysiteiqportal --image portalimage .`  
4. ``` npm run deploy dev ```
5. Go to Azure Portal
6. Diagnose and Solve Problems
7. Availability & Performance
8. Application logs
9. Platform logs


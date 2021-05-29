## Welcome to the native reaction template

The reason for creating this template is because today the question arises: How to order my project?

## step to install

You must install the dependencies, with your favorite package manager

```bash
npm run dev
# or
yarn dev
```

## cocoapods

In the packge.json add a script to install the pods in an easier way just do:

```bash
npm run pod
# or
yarn pod
```

## run project

After installing IOS dependencies and pods (MAC ONLY)
the next step is to run the project. But first you should add an .env file (THIS IS YOUR ENVIRONMENT VARIABLES FILE)

and you can use the environment variables at your leisure. Example of use:

```bash
import Config from 'react-native-config'

console.log("Var =>", Config.hello)
```

Note: keep safety first

then you can run the project with the following scripts:

```bash
# ANDROID
yarn android
npm run android

#IOS
yarn ios
npm run ios
```

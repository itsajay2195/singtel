# My Universal React Project

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>






## 🚀 How to use

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Run `yarn start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## 🚀 How to run on emulator (iOS and Android)

1. iOS(macOS):
  - Go to your project directory.
  - Run `yarn iOS` will start the expo developer tools on a port from the browser window.
  - In Split seconds you will see expo automatically open the app in the simulator.
  - On the first instance expo will be installing the "Expo Go" app on the simulator.
  - After the successful installation of "Expo Go" you will see the app(project) in the simulator.
  - If expo fails to open/ recognize the iOS simaltor on your mac, you can go to the browser window on which expo bundler is present and manually run the app on the simulator by clicking "run on iOS simulator".

2. Android:
  - Go to your project directory.
  - Run `yarn android` will start the the expo developer tools on a port from the browser window.
  - You will have to keep the andorid emulator open and running.
  - Once the emulator is ready, you can go to the browser window on which expo bundler is present and manually run the app on the emulator by clicking "run on Android emulator".
  - On the first instance expo will be installing the "Expo Go" app on the emulator.
  - After the successful installation of "Expo Go" you will see the app(project) in the emulator.

- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)
  - Web: Any web browser

## Running the app on real device(Android and iOS)
- install the "Expo Go" on your real device from the app/ play store.
- upon installation of "Expo Go", visit the project link and scan the qr code.
- The app will be up and running.
  project url: https://expo.dev/@ajaycnv/Singtel


## About the project

- The project is built using Expo[React Native].
- It is a universal app that can be run on iOS, Android and Web.
- The app is all about a flash card and guessing the number behind the card game.
- The app basically has a single screens.
  - The screen has a header with a button to restart the game and a counter to track the number of guesses.
  - The body of the screen basically lists the card in column and rows which are shuffled randomly and the user has to guess the number behind the card.
  - The user can click on the card to reveal the number behind the card.
  - When player resolve all the cards, app will show congratulation prompt as demo, after prompt dismiss will restart the game
  - When player taps 'Restart' button, all the card will be regenerated and steps counter will also be reset to 0
# WithParentsFront
[Server Repository](https://github.com/GDSC-sswu-A/WithParentsServer)

## How to run

### IOS
1. Clone the project.
- git clone https://github.com/GDSC-sswu-A/WithParentsFront.git
2. Access the project location in the terminal.
3. Go to the ios subdirectory of your project.
- cd ios
4. Install pod files.
- pod install
5. Return to project location.
- cd ..
6. Execute the project.
  - if Xcode and CocoaPods are installed
    - yarn ios
  - if the above cammand does not run.
    - Open Xcode to build the .xcworkspace file

---
### ANDROID
1. Clone the project.
- git clone https://github.com/GDSC-sswu-A/WithParentsFront.git
2. Open the Android project inside the project with Android Studio.
- Press [Open an existing Android Studio project].
- Select the android directory in the project directory.
3. Create a simulator bt opening AVD Manager in Android Studio.(optional)
4. Driving the simulator.
5. Connect to the project location from the terminal.
6. Excute the project
- yarn android
- npm run android
- If an error occurs, run powershell in administrator mode, enter the following command, and 'yarn android',
  - Set-ExcutionPolicy Unrestricted

# The Magic School Bus

This project is. Visit the website at https://debbieyuen.github.io/magical/.
<img width="2048" alt="Screen Shot 2023-03-29 at 6 41 58 AM" src="https://user-images.githubusercontent.com/31296177/228558278-40c8560e-ff85-45ee-84ff-ff94a02ae6be.png">
[![IMAGE ALT TEXT](http://img.youtube.com/vi/XTSfzfHcBxM/0.jpg)](https://youtu.be/XTSfzfHcBxM "Magical")

## Requirements
  * Greensock GSAP3 (Shockingly)
  * Mapbox GL JS and token
  * Flask 1.1.2
  * Python 3.8.8
  * NodeJS v18.8.1

## Project Setup
Clone the repo
```bash
$ git clone https://github.com/debbieyuen/magical.git
```

Make sure you have NPM. If not installed, install the latest version of NPM.
```bash
$ npm install -g npm
```

Check to make sure it was installed successfully.
```bash
$ npm -v
$ node -v
```

Set up GSAP by adding the following to your .npmrc file either for your profile ($ vim ~/.npmrc) or at the root of your project.
```bash
$ //npm.greensock.com/:_authToken=b7bce164-5019-4e5d-98b5-70eba6754ec4@gsap:registry=https://npm.greensock.com
```

The first time you install GSAP to a project, install via.
```bash
$ npm install gsap@npm:@gsap/shockingly
```

You may also install all free and bonus plugins by downloading the zip file and installing via the following command.
```bash
$ npm install ./gsap-bonsu.tgz
```

Or install GSAP without bonus plugins. 
```bash
$ npm install gsap
```

Install Flask
```bash
$ pip install Flask
```

In Visual Studio Code, install the Live Server Extension to quickly run the website locally on your machine. Else, run the program in your terminal.
Clone the repo
```bash
$ open index.html
```

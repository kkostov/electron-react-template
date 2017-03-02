# Electron + Create-React-App Starter #

Seed project for starting electron apps using react.

## Installation ##

Install dependencies:


`$ yarn`


Start for development:


`$ yarn dev`

## External Links ##

[create-react-app](https://github.com/facebookincubator/create-react-app)


## Solution structure ##

`\app`

Electron source files

`\src`

Client react app source files

`\public`

Client react app static files

`\build`

Production build files of the client react app (minified and all)

`.env`

Environment variables used by create-react-app AND foreman when launching the app in development.

`Procfile`

This project uses foreman to manage starting the react-app development server
and the electron runtime.

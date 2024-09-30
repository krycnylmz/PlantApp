# PlantApp

**PlantApp** is a mobile application developed using React Native with Expo, designed to display various plant categories and related questions. The app leverages Redux Toolkit and RTK Query for state management and API handling, offering a smooth user experience with onboarding and splash screens, as well as modern animations.

## Table of Contents
- [PlantApp](#plantapp)
  - [Table of Contents](#table-of-contents)
    - [Demo Video](#demo-video)
  - [Features](#features)
  - [Installation](#installation)
  - [Technologies Used](#technologies-used)
  - [API Information](#api-information)


### Demo Video
[![PlantApp - Demo](https://img.youtube.com/vi/WbLKLkfU-pc/0.jpg)](https://youtu.be/WbLKLkfU-pc)


   
## Features
- Display plant categories.
- Provide questions and answers related to plant care and identification.
- Onboarding screen for first-time users.
- Splash screen that loads all necessary data and fonts before transitioning to the home screen.
- State management using **Redux Toolkit** and API caching with **RTK Query**.
- Navigation with **Expo Router** for modern page transitions.
- Animated button interactions with **Reanimated** for a smooth user experience.

## Installation
Follow these steps to set up and run the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/plantapp.git
   cd plantapp
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Ensure you have Expo CLI installed:
   ```bash
   npm install -g expo-cli
   ```

4. Start the development server:
   ```bash
   npx expo start
   ```

## Technologies Used
- **React Native** for building the mobile application.
- **Expo** for running the development environment.
- **Redux Toolkit** for state management.
- **RTK Query** for handling API requests and caching.
- **Reanimated** for animations.
- **Expo Router** for handling navigation within the app.
- **AsyncStorage** for local data persistence.


## API Information
The app uses two main API endpoints:
1. **Categories API**: Retrieves the list of plant categories.
   - Endpoint: `https://dummy-api-jtg6bessta-ey.a.run.app/getCategories`
2. **Questions API**: Fetches plant-related questions.
   - Endpoint: `https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions`

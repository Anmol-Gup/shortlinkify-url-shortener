# ShortLinkify - URL Shortener

ShortLinkify is a URL shortener web application built using React, Tailwind CSS, and Firebase. Users can log in with their Google accounts, generate shortened URLs, and track the number of clicks on each URL.

## Demo Video
https://youtu.be/NnOnRM5hEtE

## Features
- **Google Authentication:** Users can log in securely using their Google accounts.
- **URL Shortening:** Generate short URLs for long links.
- **Click Tracking:** Track the number of clicks on each shortened URL.
- **Responsive Design:** The web app is responsive and works well on various devices.

## Technologies Used
- **React:** Frontend JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Firebase Authentication:** Secure authentication using Google accounts.
- **Firebase Firestore:** Cloud Firestore for real-time database storage.

## Installation
1. Clone the repository:
```
git clone https://github.com/Anmol-Gup/shortlinkify-url-shortener.git
```
2. Navigate to the project directory:
```
cd shortlinkify-url-shortener
```

3. Install dependencies:
```
npm install
```

4. Set up Firebase:

- Create a Firebase project at Firebase Console.
- Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
- Replace the Firebase config in your project's code.

5. Run the app:
```
npm run dev
```
## Usage
1. Open the app in your web browser.
2. Log in using your Google account.
3. Enter the long URL you want to shorten and click "Shorten URL".
4. Copy the generated short URL and share it as needed.
5. Track the clicks on your shortened URLs in the dashboard.

## License
This project is licensed under the MIT License - see the <a href="https://github.com/Anmol-Gup/shortlinkify-url-shortener/blob/main/LICENSE">LICENSE</a> file for details.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

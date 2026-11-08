# Teretia Tawaia - Professional e-Portfolio

A full-stack e-Portfolio website for **Teretia Tawaia**, National Project Officer & Geospatial Science Graduate.

## Architecture: MVVM (Model-View-ViewModel)
- **Model Layer (`server/models/` & `client/src/models/`)**: Defines the data schema, data fetching, and business data logic.
- **ViewModel Layer (`client/src/viewmodels/`)**: Contains state management, UI logic, data formatting, and binds Model data to the View components.
- **View Layer (`client/src/views/`)**: React presentation components displaying data provided by ViewModels.

## Setup & Running locally in VS Code

1. Extract `teretia-portfolio-codes.zip` to a folder.
2. Ensure you have Node.js installed.
3. Open the folder in VS Code.
4. Copy `Teretia.jpg` (profile picture) into `client/public/Teretia.jpg`.
5. Open terminal and install root dependencies:
   ```bash
   npm install
   ```
6. Install client dependencies:
   ```bash
   cd client && npm install && cd ..
   ```
7. Run the application in development mode (starts Node.js backend on port 5000 and React on port 3000):
   ```bash
   npm run dev
   ```
8. Open `http://localhost:3000` in your browser.

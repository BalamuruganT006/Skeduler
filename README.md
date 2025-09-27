# Skeduler Frontend

A React web application for timetable management system based on the mockup designs and Python backend program.

## Features

- **Authentication**: Login and Signup pages with modern UI design
- **Dashboard**: Overview with statistics and timetable management
- **Media Upload**: File upload with drag & drop functionality
- **Timetable Viewing**: Interactive timetable display with class selection
- **Data Verification**: Data validation and verification interface
- **Settings**: User preferences and application configuration

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Dashboard.js
│   │   ├── MediaUpload.js
│   │   ├── Timetable.js
│   │   ├── DataVerification.js
│   │   └── Settings.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Features Overview

### 1. Authentication
- Modern login/signup interface with diagonal split design
- Form validation and user authentication
- Responsive design for mobile and desktop

### 2. Dashboard
- Statistics cards showing total timetables, recent uploads, and success rate
- Data table with timetable listings
- Navigation sidebar with active state indicators

### 3. Media Upload
- Drag and drop file upload interface
- Support for multiple file types (.docx, .xlsx, .png, .jpeg)
- URL-based file upload
- Upload progress and error states
- File management with delete functionality

### 4. Timetable Display
- Interactive timetable with class selection
- Real timetable data from Python program
- Responsive table design
- Download functionality
- Subject and teacher information display

### 5. Data Verification
- Data validation status indicators
- Staff data verification
- Class data verification
- Timetable generation readiness check

### 6. Settings
- Theme selection (Light/Dark/Auto)
- Language preferences
- Notification settings with toggle switches
- Auto-generation preferences

## Styling

The application uses custom CSS with:
- Modern color scheme (dark blue, light grey, teal accents)
- Responsive grid layouts
- Smooth transitions and hover effects
- Mobile-first design approach
- Consistent typography and spacing

## Data Integration

The timetable component includes real data from the Python program:
- 6 different classes (III_SEM_A, III_SEM_B, III_SEM_C, III_SEM_D, V_SEM_A, V_SEM_B)
- Complete weekly schedules with 7 periods per day
- Subject names and teacher assignments
- Lab sessions with main and assistant instructors
- Library hours and free periods

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

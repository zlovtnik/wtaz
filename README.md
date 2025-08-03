# ETL Expert Portfolio

A professional portfolio website for ETL (Extract, Transform, Load) experts built using Oracle JET with Redwood theme.

## Overview

This portfolio showcases ETL expertise, skills, projects, and professional experience using a modern, responsive web interface built with Oracle JET framework.

## Features

- **Home Page**: Introduction and featured ETL projects
- **Skills Section**: Comprehensive ETL skills with visual progress indicators
- **Projects Portfolio**: Detailed ETL project showcases with descriptions
- **Professional Experience**: Timeline of work history and education
- **Contact Form**: Interactive contact form with validation

## Technologies Used

- Oracle JET 18.1.0
- Redwood Theme
- Responsive Design
- Knockout.js for data binding

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (included with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To build the application:
```
npx ojet build
```

To serve the application locally:
```
npx ojet serve
```

## Project Structure

- `src/js/views/`: HTML templates for each section
- `src/js/viewModels/`: JavaScript view models for each section
- `src/css/app.css`: Custom styling for the portfolio
- `src/js/appController.js`: Main application controller

## Customization

The portfolio can be easily customized by:
1. Updating content in the view files
2. Modifying the data in the viewModel files
3. Adjusting styles in app.css
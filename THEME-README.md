# Oracle Standard Black Theme

This document describes the implementation of the Oracle Standard Black Theme for the ETL Portfolio application.

## Overview

The Oracle Standard Black Theme is a modern, enterprise-grade dark theme with rounded, floating elements. It provides a sophisticated, professional look and feel for the application.

## Features

- **Dark Color Scheme**: Deep black backgrounds with appropriate contrast levels for text and UI elements
- **Rounded Elements**: Consistent border-radius across all UI components
- **Floating Effects**: Subtle shadows and transform effects on hover
- **Enterprise Appeal**: Professional typography, spacing, and layout
- **Responsive Design**: Optimized for all screen sizes

## Implementation Details

### Theme Variables

The theme is implemented using CSS variables for consistent styling across the application. Key variables include:

```css
:root {
  /* Text Colors */
  --oj-core-text-color-primary: #ffffff;
  --oj-core-text-color-secondary: #cccccc;
  --oj-core-text-color-brand: #4fd6ff;
  --oj-core-text-color-danger: #ff6b6b;
  --oj-core-text-color-warning: #ffd166;
  --oj-core-text-color-success: #06d6a0;
  
  /* Background Colors */
  --oj-core-bg-color-content: #121212;
  --oj-core-bg-color-surface: #1e1e1e;
  --oj-core-bg-color-surface-alt: #2d2d2d;
  
  /* Border Radius */
  --oj-core-border-radius-sm: 8px;
  --oj-core-border-radius-md: 12px;
  --oj-core-border-radius-lg: 16px;
  
  /* Shadows */
  --oj-core-shadow-sm: 0 4px 8px rgba(0, 0, 0, 0.3);
  --oj-core-shadow-md: 0 8px 16px rgba(0, 0, 0, 0.4);
  --oj-core-shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.5);
}
```

### Component Styling

The theme applies consistent styling to all components:

1. **Cards and Panels**
   - Dark background
   - Rounded corners
   - Subtle shadows
   - Hover effects with transform and increased shadow

2. **Navigation**
   - Dark background
   - Selected items with brand color accent
   - Hover effects with subtle background change

3. **Buttons**
   - Rounded corners
   - Hover effects with transform and shadow
   - Primary buttons with brand color

4. **Form Elements**
   - Dark backgrounds with proper contrast
   - Focus states with brand color
   - Consistent border-radius

5. **Typography**
   - Light font weight for headings
   - Proper hierarchy with different sizes
   - Secondary color for body text
   - Brand color for links

### Animations and Transitions

The theme includes subtle animations and transitions for a more polished user experience:

- Hover effects with transform and shadow changes
- Fade-in animations for content
- Smooth transitions for color and property changes

## Usage

The theme is automatically applied to the application. No additional configuration is needed.

## Customization

To customize the theme further:

1. Modify the CSS variables in the `:root` selector in `app.css`
2. Adjust component-specific styles as needed
3. Add new variables for additional customization

## Compatibility

This theme is compatible with Oracle JET 18.1.0 and has been tested with modern browsers.

## Credits

Designed and implemented for the ETL Portfolio application.
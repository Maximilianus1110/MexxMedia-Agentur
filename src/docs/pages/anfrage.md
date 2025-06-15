# Anfrage Page Documentation

## Overview
The `anfrage.astro` page serves as a user-friendly project inquiry form that allows potential clients to start a collaboration with MexxMedia. The page features a two-step form process with smooth transitions and a focus on clear communication.

## File Location
```
src/pages/anfrage.astro
```

## Key Features

### Visual Design
- Modern, clean interface with consistent branding
- Responsive design for both mobile and desktop
- Dark mode support
- Smooth animations and transitions between steps
- Progress indicator showing current step
- Card-based layout for better content grouping

### Step 1: Contact & Interest
- Welcoming hero section with clear messaging
- Required fields:
  - Package selection (Web Basic, Web Plus, Web Max)
  - Name
  - Email
- Optional fields:
  - Company name
  - Phone number
- User-friendly form validation
- Clear field labels and helpful placeholder text

### Step 2: Project Details
- Optional additional information fields:
  - Existing website information
  - Additional project details or wishes
- Privacy policy consent checkbox
- Back button for easy navigation
- Submit button for form completion

## Technical Implementation

### Components Used
- Layout component from `src/layouts/Layout.astro`
- Site configuration from `src/data/site.ts`

### Styling
- Tailwind CSS for responsive design
- Custom animations for smooth transitions
- Consistent color scheme using design system variables
- Accessible form elements with proper focus states
- Proper spacing and typography hierarchy

### JavaScript Functionality
- Form step management
- Form validation
- Smooth scroll behavior
- Animated transitions between steps
- Progress indicator updates
- Mobile-responsive button layouts

## User Experience Features
- Clear progress indication
- Helpful placeholder texts
- Optional fields clearly marked
- Smooth animations for better feedback
- Form validation with clear error messages
- Easy navigation between steps
- Responsive design for all devices

## Future Enhancements
- Form submission logic implementation
- Success/error message handling
- Form data persistence
- Analytics integration
- Package details integration
- Email notification system
- Form submission rate limiting
- CAPTCHA integration

## Accessibility
- Proper ARIA labels
- Keyboard navigation support
- High contrast mode compatibility
- Screen reader friendly structure
- Focus management between steps 
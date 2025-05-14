# DxSure Website

This repository contains the code for the DxSure company website, focused on AI-powered medical diagnostics solutions.

## Color Palette

The DxSure website uses the following color palette:

| Color Name       | Hex Code  | RGB                | Description/Usage                       |
|------------------|-----------|--------------------|-----------------------------------------|
| Primary Blue     | `#0066cc` | rgb(0, 102, 204)   | Primary buttons, links, main accents    |
| Secondary Blue   | `#00a0e9` | rgb(0, 160, 233)   | Secondary headings, highlights          |
| Dark Blue        | `#003366` | rgb(0, 51, 102)    | Dark backgrounds, main headings         |
| Light Blue       | `#e6f2ff` | rgb(230, 242, 255) | Hero background, light sections         |
| Accent Red       | `#ff6b6b` | rgb(255, 107, 107) | Call-to-action highlights, alerts       |
| Text Dark        | `#333333` | rgb(51, 51, 51)    | Primary text color                      |
| Text Light       | `#666666` | rgb(102, 102, 102) | Secondary text, subtitles               |
| Background White | `#ffffff` | rgb(255, 255, 255) | Main background color                   |
| Light Gray       | `#f5f7fa` | rgb(245, 247, 250) | Secondary backgrounds, cards            |
| Dark Gray        | `#2c3e50` | rgb(44, 62, 80)    | Footer background, dark accents         |

## Typography

- Primary Font: 'Inter', sans-serif
- Font Weights Used: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Base Font Size: 16px (1rem)
- Line Height: 1.6

## UI Components

### Buttons

- Primary Button: Blue background (`#0066cc`), white text, 2px border
- Secondary Button: White background, blue text (`#0066cc`), 2px blue border
- Hover Effects: Color inversion with smooth transition

### Cards

- Default: White background, light shadow, 8px border radius
- Hover Effect: Slight elevation (translateY(-5px)), increased shadow
- Service Cards: Light gray background with colored bottom border on hover

## Spacing

- Container Width: 90% of viewport, max-width of 1200px
- Section Padding: 100px 0
- Element Margins: Consistent use of multiples of 10px

## Responsive Breakpoints

- Large Desktops: Default (above 992px)
- Tablets: 992px and below
- Mobile Devices: 768px and below
- Small Mobile Devices: 576px and below

## CSS Variables

These colors and other design elements are implemented as CSS variables for easy updates and consistency:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a0e9;
    --dark-blue: #003366;
    --light-blue: #e6f2ff;
    --accent-color: #ff6b6b;
    --text-color: #333333;
    --light-text: #666666;
    --background-color: #ffffff;
    --light-gray: #f5f7fa;
    --dark-gray: #2c3e50;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}
```

## Brand Identity Guidelines

When creating any additional assets for DxSure:

1. Maintain color consistency using the palette above
2. Use the Inter font family for text elements
3. Keep designs clean, modern, and professional
4. Emphasize trust and innovation through visual elements
5. Ensure all elements are responsive and accessible

This documentation serves as a reference for maintaining design consistency across the DxSure website and related materials.

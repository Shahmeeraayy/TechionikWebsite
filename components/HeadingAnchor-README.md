# Heading Anchor Component - Integration Guide

## Overview

The `HeadingAnchor` component is a global client component that automatically adds anchor links to all `<h2>` headings on your site. It provides a seamless way for users to copy and share direct links to specific sections.

## Features

✅ **Automatic ID Generation** - Generates URL-friendly slugs for headings without IDs
✅ **Hover-Visible Icon** - Link icon appears on hover (always visible on mobile)
✅ **Clipboard Copy** - Copy full absolute URL with anchor fragment
✅ **Visual Feedback** - Shows "✓" confirmation when copied
✅ **Smart Re-rendering** - Handles route navigation without duplicate icons
✅ **Accessibility** - Keyboard navigable, focus indicators, reduced motion support
✅ **Sticky Header Compatible** - Built-in scroll-margin-top prevents overlap

## Installation

### Step 1: Add Components

The following files have been created:
- `components/HeadingAnchor.tsx` - Main component logic
- `components/HeadingAnchor.css` - Global styles

### Step 2: Import & Add Styles

**In your `app/globals.css`**, add:

```css
@import url('./components/HeadingAnchor.css');
```

Or manually copy the CSS contents from `HeadingAnchor.css` into your `globals.css`.

### Step 3: Add Component to Root Layout

**In your `app/layout.tsx`**:

```tsx
import { HeadingAnchor } from '@/components/HeadingAnchor';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // ... your metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeadingAnchor /> {/* Add this line */}
        {/* Your header/navigation */}
        <main>{children}</main>
        {/* Your footer */}
      </body>
    </html>
  );
}
```

## Configuration

### Adjust Sticky Header Offset

If your sticky header has a different height, update the `scroll-margin-top` value in `HeadingAnchor.css`:

```css
h2 {
  scroll-margin-top: 120px; /* Change based on your header height */
}
```

**Tips:**
- Desktop sticky header: typically 80-120px
- Mobile sticky header: typically 60-70px

### Customize Icon Color

Edit the `.heading-anchor-button:hover` color in `HeadingAnchor.css`:

```css
.heading-anchor-button:hover {
  color: #ef4444; /* Change to your brand color */
}
```

### Customize Feedback Color

Edit the `.heading-anchor-feedback` color:

```css
.heading-anchor-feedback {
  color: #f59e0b; /* Change feedback color */
}
```

## How It Works

1. **Component loads** after page hydration
2. **Scans all `<h2>` elements** on the page
3. **Assigns IDs** to headings that don't have one (using slug generation)
4. **Injects anchor button** with link icon to the right of heading
5. **On hover** - Icon becomes visible
6. **On click** - Copies full URL with anchor to clipboard, shows "✓" feedback
7. **On navigation** - Clears processed headings and re-runs (no duplicates)

## ID Generation Algorithm

Headings are converted to URL-friendly slugs using this logic:

```
"Scaling Your Server Infrastructure"
↓
"scaling_your_server_infrastructure"
```

Rules:
- Lowercase conversion
- Special characters removed
- Spaces → underscores
- Duplicate underscores removed
- Auto-incrementing suffix if duplicate exists (e.g., `heading_1`, `heading_2`)

## Dependencies

- **`next/navigation`** - For `usePathname()` hook
- **`lucide-react`** - (Fallback) For Icon reference pattern (not actually imported)

No external dependencies are required beyond Next.js itself!

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Accessibility:** 
- Keyboard navigation (Tab to focus button, Enter to copy)
- Screen reader compatible with semantic HTML
- Respects `prefers-reduced-motion` setting
- Focus visible outline for keyboard users

## Troubleshooting

### Icons Not Appearing

**Issue:** No icon appears next to headings.

**Solution:**
1. Check that `HeadingAnchor.css` is imported in `globals.css`
2. Verify component is placed in root `layout.tsx`
3. Ensure headings are direct children of page content (not inside custom components)
4. Open DevTools → Elements tab → inspect `<h2>` to verify anchor button was injected

### Duplicate Icons After Navigation

**Issue:** Icons appear multiple times on the same heading.

**Solution:**
- This should not happen. Component automatically clears processed headings on route change.
- If it persists, check for multiple `<HeadingAnchor />` instances in your layout tree.

### Scroll Position Issues

**Issue:** When clicking an anchor link, content is hidden behind sticky header.

**Solution:**
- Increase `scroll-margin-top` value in `HeadingAnchor.css`
- Measure your actual sticky header height and add ~10px padding

### Copy Not Working

**Issue:** Clicking icon doesn't copy to clipboard.

**Solution:**
1. Check browser console for errors
2. HTTPS requirement: Clipboard API requires secure context (HTTPS in production)
3. Some browsers require user gesture (click) - this is handled correctly
4. Browser permissions: Check if clipboard access is allowed

## Styling Customization

All styling uses inline styles + global CSS for maximum flexibility. To override:

```css
/* Override button appearance */
.heading-anchor-button {
  width: 28px;
  height: 28px;
  margin-left: 12px;
}

.heading-anchor-button:hover {
  color: #your-brand-color;
}

/* Override scroll offset for specific pages */
article h2 {
  scroll-margin-top: 150px;
}
```

## Performance Considerations

- ⚡ **Lazy processing** - Uses `setTimeout` (100ms) to ensure DOM is ready
- ⚡ **No re-processing** - Tracks processed headings to avoid duplicate injections
- ⚡ **Efficient selectors** - Single `querySelectorAll` per page load
- ⚡ **Cleanup** - Clears processing state on navigation

Memory impact: Negligible (~1-2KB per page)

## Example Usage

Once integrated, this works automatically. No additional code needed!

```tsx
// In any page or component
export default function BlogPost() {
  return (
    <article>
      <h2>Getting Started with Next.js</h2> {/* ← Icon auto-injected here */}
      <p>Content here...</p>

      <h2 id="custom-id">Advanced Patterns</h2> {/* ← Uses custom-id */}
      <p>More content...</p>
    </article>
  );
}
```

When user clicks the icon next to "Getting Started with Next.js", the clipboard receives:
```
https://yoursite.com/blog/post-slug#getting_started_with_nextjs
```

## Security Notes

- ✅ No external requests or API calls
- ✅ No data collection
- ✅ Clipboard access is user-initiated (click required)
- ✅ Works with Content Security Policy (CSP) - no inline scripts
- ✅ No DOM XSS vulnerabilities (uses proper SVG creation)

## Future Enhancements (Optional)

Consider these additions:

1. **Configuration options** - In a context provider
2. **Heading levels** - Support h1, h3, h4 in addition to h2
3. **Custom slug generators** - Allow custom formatting logic
4. **Analytics tracking** - Track when anchors are shared
5. **Table of contents** - Auto-generate TOC from processed headings

## Support

For issues or questions, check:
1. DevTools Console for error messages
2. Component source code comments
3. Browser compatibility (see Browser Support section)
4. Network conditions (ensure HTTPS in production for Clipboard API)

---

**Last Updated:** April 2026
**Component Version:** 1.0

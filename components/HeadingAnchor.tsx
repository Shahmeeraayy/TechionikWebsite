'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import './HeadingAnchor.css';

/**
 * Generate a URL-friendly slug from text
 * Converts to lowercase and replaces spaces with underscores
 */
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^\w_-]/g, '')
    .substring(0, 50);
};

/**
 * Inject a clickable link icon to h2 headings and manage their IDs
 */
export function HeadingAnchor() {
  const pathname = usePathname();
  const processedRef = useRef(new WeakSet<Element>());

  useEffect(() => {
    // Reset the processed set on navigation
    processedRef.current = new WeakSet();

    // Find all h2 elements
    const headings = document.querySelectorAll('h2');

    headings.forEach((heading) => {
      // Skip if already processed
      if (processedRef.current.has(heading)) {
        return;
      }

      // Mark as processed to avoid duplicate processing
      processedRef.current.add(heading);
      heading.classList.add('has-anchor');

      // Generate or use existing ID
      if (!heading.id) {
        const slug = generateSlug(heading.textContent || '');
        if (slug) {
          heading.id = slug;
        }
      }

      // Create the anchor icon link if not already present
      if (!heading.querySelector('.heading-anchor-icon')) {
        const iconLink = document.createElement('a');
        iconLink.className = 'heading-anchor-icon';
        iconLink.href = `${pathname}#${heading.id}`;
        iconLink.title = 'Copy link to this section';
        iconLink.setAttribute('aria-label', 'Copy link to this section');

        // SVG icon (link icon)
        iconLink.innerHTML = `
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        `;

        // Handle click to copy URL
        iconLink.addEventListener('click', (e) => {
          e.preventDefault();

          // Get the full URL with fragment
          const fullUrl = `${window.location.origin}${pathname}#${heading.id}`;

          // Copy to clipboard
          navigator.clipboard.writeText(fullUrl).then(() => {
            // Show feedback
            const originalHTML = iconLink.innerHTML;
            iconLink.innerHTML = '';
            iconLink.classList.add('copied');

            // Revert after 2 seconds
            setTimeout(() => {
              iconLink.innerHTML = originalHTML;
              iconLink.classList.remove('copied');
            }, 500);
          });
        });

        // Insert the icon with a gap between heading text and icon
        heading.appendChild(iconLink);
      }
    });
  }, [pathname]);

  return null; // This component doesn't render anything visible
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes with JavaScript conditionals
 * @param inputs - CSS class values
 * @returns Merged CSS class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scrolls to an element
 * @param elementId - ID of the element to scroll to
 * @param offset - Offset from the top (default: 100px)
 */
export function scrollToElement(elementId: string, offset: number = 100) {
  const element = document.getElementById(elementId);
  if (element) {
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: yPosition - offset,
      behavior: 'smooth'
    });
  }
}

/**
 * Creates a gradient text effect
 * @param text - The text to apply the gradient to
 * @returns HTML string with gradient styling
 */
export function gradientText(text: string) {
  return `<span class="text-gradient">${text}</span>`;
}

/**
 * Format a phone number into (xxx) xxx-xxxx
 * @param phone - Raw phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string) {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phone;
}

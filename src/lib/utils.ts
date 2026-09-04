import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import confetti from 'canvas-confetti';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fireConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#06b6d4', '#10b981', '#6366f1', '#38bdf8']
    });
  } catch (e) {
    // Graceful no-op if canvas is unavailable
  }
}

/**
 * Normalizes relative asset paths with import.meta.env.BASE_URL
 * Ensures file downloads work across root domains and subdirectory bases (e.g. GitHub Pages /Portfolio/)
 */
export function getAssetUrl(path: string | undefined): string {
  if (!path) return 'resume/Rupesh_Kumar_Pandey_Data_Scientist_Resume.pdf';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\.?\//, '');
  const baseUrl = import.meta.env.BASE_URL || '/';
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}

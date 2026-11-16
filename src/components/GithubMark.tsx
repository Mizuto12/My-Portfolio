// lucide-react dropped brand/logo icons (GitHub included) in recent
// versions, so this is a small hand-drawn substitute for the one brand
// mark this page needs — not a Lucide icon, kept visually consistent
// (18x18, stroke-style) with the ones that are.
export function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0018 4.77 5.07 5.07 0 0017.91 1S16.73.65 14 2.48a13.38 13.38 0 00-7 0C4.27.65 3.09 1 3.09 1A5.07 5.07 0 003 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 007 18.13V22" />
    </svg>
  );
}

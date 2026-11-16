import { useTheme } from '../context/ThemeContext';
import { EggToggle } from './EggToggle';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { theme, announcement } = useTheme();
  const isGengar = theme === 'gengar';

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            &copy; {CURRENT_YEAR} Chandrei Emerson V. Lao.{' '}
            {isGengar ? 'A little ghostly interference tonight.' : 'Built from scratch, no template.'}
          </p>
          <nav className="footer-links" aria-label="Footer">
            <a href="#top">Back to top</a>
            <a href={`${import.meta.env.BASE_URL}Chandrei-Lao-Resume.pdf`} download>
              Download résumé
            </a>
          </nav>
          <EggToggle />
        </div>
      </footer>
      <p className="egg-sr-note" role="status" aria-live="polite">
        {announcement}
      </p>
    </>
  );
}

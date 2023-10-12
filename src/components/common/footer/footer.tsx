import FooterDesktop from './footer-desktop';

export interface IFooterProps {
}

export default function Footer (props: IFooterProps) {
  return (
    <footer>
      <div className='container'>
        <FooterDesktop/>
      </div>
    </footer>
  );
}

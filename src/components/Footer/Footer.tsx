import './Footer.scss';

type Props = {

}

export const Footer = ({}: Props) => {
  const leftText = `© ${new Date().getFullYear()} - All Rights Reserved to DEFINE`;
  const rightText = `Contact Us`;

  return (
    <footer>
      <div className="footer-left">
        <p>{leftText}</p>
      </div>
      <div className="footer-right">
        <p>{rightText}</p>
      </div>
    </footer>
  );
}

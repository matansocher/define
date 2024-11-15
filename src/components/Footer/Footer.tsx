import './Footer.scss';

type Props = {

}

export const Footer = ({}: Props) => {
  const leftText = `© ${new Date().getFullYear()} - All Rights Reserved to DEFINE`;
  const rightText = `Contact Us`;

  return (
    <footer>
      <p>{ leftText }</p>
      <p>{ rightText }</p>
    </footer>
  );
}

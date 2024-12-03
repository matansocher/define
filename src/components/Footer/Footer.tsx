import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import './Footer.scss';

type Props = {

}

export const Footer = ({}: Props) => {
  const [showCopied, setShowCopied] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setShowCopied(false);
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [showCopied]);

  return (
    <footer>
      <div className="footer-left">
        <p>{`© ${new Date().getFullYear()} - All Rights Reserved to DEFINE`}</p>
      </div>
      <div className="footer-right">
        <CopyToClipboard text="define.expert@gmail.com" onCopy={() => {setShowCopied(true)}}>
          <div className="link">
            <div className="copied" style={{opacity: showCopied ? 1 : 0}}><p>Copied!</p></div>
            <ContentCopyIcon/>
            <p>define.expert@gmail.com</p>
          </div>
        </CopyToClipboard>
      </div>
    </footer>
  );
}

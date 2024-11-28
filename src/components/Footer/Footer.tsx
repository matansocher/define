import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import './Footer.scss';

type Props = {

}

export const Footer = ({}: Props) => {
  const [showCopied, setShowCopied] = useState(false);

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
            <DoneIcon style={{ opacity: showCopied ? 1 : 0 }} />
            <ContentCopyIcon style={{ opacity: !showCopied ? 1 : 0 }} />
            <p>define.expert@gmail.com</p>
          </div>
        </CopyToClipboard>
      </div>
    </footer>
  );
}

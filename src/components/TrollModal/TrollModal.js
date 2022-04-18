import { useEffect } from 'react';
import {
  Dialog,
  DialogDismiss,
  DialogHeading,
  useDialogState,
} from 'ariakit/dialog';
import styles from './TrollModal.module.scss';
import Image from 'next/image';
import updateImage from '../../images/update.png';
const TrollModal = () => {
  const dialog = useDialogState();

  // We have to destructure the toggle function, otherwise useEffect will see a
  // different object on every render causing the modal to enter a loop. The
  // single toggle function will look the same to the useEffect hook and only
  // render once.
  const { toggle } = dialog;

  useEffect(() => {
    // Toggle the dialog to be visible when this component mounts
    toggle();
  }, [toggle]);

  return (
    <Dialog state={dialog} className={styles._}>
      <DialogDismiss className={styles.Dismiss}>
        <Image src={updateImage}></Image>
      </DialogDismiss>
    </Dialog>
  );
};

export default TrollModal;

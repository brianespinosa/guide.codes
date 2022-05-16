import pt from 'prop-types';
import { motion } from 'framer-motion';

const propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]),
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Layout = ({ children }) => {
  return (
    <motion.main
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'ease-in-out' }}
    >
      {children}
    </motion.main>
  );
};

Layout.propTypes = propTypes;

export default Layout;

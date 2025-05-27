'use client';

import Link from "next/link";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";

const TalkButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href="/#contact"
        className="w-full bg-[var(--primaryColor)] text-white font-semibold rounded px-6 py-3 hover:bg-[var(--primaryColor-dark)] transition-colors flex items-center justify-center gap-2 group min-w-[10rem]"
      >
        Let&apos;s Talk
        <HiOutlineArrowSmRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
};

export default TalkButton;

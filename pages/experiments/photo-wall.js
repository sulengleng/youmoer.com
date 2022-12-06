import clsx from "clsx";
import Link from "next/link";
import { MapPin,} from "phosphor-react";
import { motion } from 'framer-motion'

const IMAGES = [
    {
      src: "/images/pages/Statue-and-Dove.png",
      place: "Bristol",
      className: "rotate-[-2deg]",
    },
    {
      src: "/images/pages/Street.png",
      place: "York",
      className: "rotate-[2deg]",
    },
    {
      src: "/images/pages/dali.png",
      place: "Dali",
      className: "rotate-[-2deg]",
    },
    {
      src: "/images/pages/pine-and-stone.png",
      place: "Suzhou",
      className: "rotate-[2deg]",
    }
  ];
  
  const ContentWrapper = ({ children, className, width }) => (
    <div
      style={{ maxWidth: `${width || '100%'}`}}
      className={clsx(
        "w-full px-5 mx-auto relative",
        className
      )}
    >
      {children}
    </div>
  );

export default function Photo() {
  return (
    <div className="pb-20">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, delay: 0.3 },
            }}
            >
            <ContentWrapper className="gap-8 columns-3">
                {IMAGES?.map((item) => (
                <div
                    key={item.src}
                    className={clsx(
                    item?.className,
                    "relative border p-[4px] shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] dark:border-gray-700"
                    )}
                >
                    <img
                    src={item?.src}
                    alt={item?.place}
                    className="rounded-[9px]"
                    loading="lazy"
                    />
                    <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white/90 backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                    <MapPin size={14} className="mr-1" />
                    {item?.place}
                    </div>
                </div>
                ))}
            </ContentWrapper>
        </motion.div>
    </div>
    )
}
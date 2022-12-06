import clsx from "clsx";
import Link from "next/link";
import { MapPin, Compass } from "phosphor-react";
import { motion } from 'framer-motion'

const IMAGES = [
    {
        src: "https://freight.cargo.site/w/700/q/75/i/a0e3c4fc1324dbf9c3fdf6b44e0f4a87b7e153b47f7cb5382caf6c40854e7e49/3R6A9398.jpg",
        place: "Bristol",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/5b1f5279aede4a43d1b0eb34f1e145ac95feac92e1cd414ec8ba180c54e85feb/88.jpg",
        place: "York",
        className: "rotate-[0deg]",
    },
    {
        src: "https://files.catbox.moe/23b07j.png", 
        note: "This is a test",
        className: "rotate-[0deg]", 
      },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/f49dd3a81b6a0f2bfd5bb619c4a7e43bc4dc28b509c779a0e338f7ec2babbae7/cascading_pigments_2.jpg",
        place: "Dali",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/0c7f100a02d58442dbb01017a9525a60bc9d403fe20ca0814c3836cdcc4f80d8/terraces.jpg",
        place: "Suzhou",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/0a59d1d90e57cc54613ac65c0e09f72beba7db92a0cbb42a7f24b7e4ee0faaf8/US_old_9.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/15b75ddcb51f4749fd5d9f7e44fda6175dee3d66a491272b35b89060190a107d/Idriveatnight.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/192b532492b000698a037d2bb788e757c120bef2f9bdf347b237605e81f33256/39-2.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/15b75ddcb51f4749fd5d9f7e44fda6175dee3d66a491272b35b89060190a107d/Idriveatnight.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/d6083f7c46651c6677ca623ff08e5e58a0baad0e1cf62702c8b3e75b014eace1/NZ_old_11.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/58359082152476db5375d2bcef45d904b90fe6b1aacd46cf42aa2aa3ecc72a7a/savedbyadeer2.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/141a574346a10e043178154891a3561714097028013d5910137c72bd674e9ee0/oman_old2.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/51421528853e490957ad03ac58cb4e3340b287c758ff63763d61f2911e643342/bentonite.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
    },
    {
        src: "https://freight.cargo.site/w/700/q/75/i/57193ca2ea9bfc3f89f6b13b407efc415638a9342eec2f64351af0f65b3d92fc/Arco_Iris_3R6A7906.jpg",
        note: "This is a test",
        className: "rotate-[0deg]",
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
            <ContentWrapper className="gap-6 columns-4 space-y-6">
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
                    className="rounded-[9px] w-full"
                    loading="lazy"
                    />
                    <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white/90 backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                    <Compass size={14} className="mr-1" />
                    {item?.place }{item?.note}
                    </div>
                </div>
                ))}
            </ContentWrapper>
        </motion.div>
    </div>
    )
}
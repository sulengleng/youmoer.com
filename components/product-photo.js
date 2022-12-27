import {react} from "react";
import clsx from "clsx";
import {motion} from "framer-motion";
import {Compass} from "phosphor-react";

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

const ProductPhoto = (props) => {
    const { src, note, category, className } = props.product
        return (
            <body>
                <div className="pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.35, delay: 0.3 },
                        }}
                    >
                        <ContentWrapper className="columns-1 pt-1">
                            <div
                                key={src}
                                className={clsx(
                                    className,
                                    "relative max-w-48 border p-[4px] shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] dark:border-gray-700 drop-shadow-xl"
                                )}
                            >
                                <img
                                    src={src}
                                    alt={note}
                                    className="rounded-[9px] w-full"
                                    loading="lazy"
                                />
                                <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white bg-opacity-25 hover:bg-opacity-60 bg-clip-padding backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                                    <Compass size={14} className="mr-1" />
                                    {note}
                                </div>
                            </div>
                        </ContentWrapper>
                    </motion.div>
                </div>
            </body>
        );
};


export default ProductPhoto;
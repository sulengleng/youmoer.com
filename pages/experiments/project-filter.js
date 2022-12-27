import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import {X, Funnel, Minus, Plus, SquaresFour, Compass} from 'phosphor-react'
import {motion} from "framer-motion";
import clsx from "clsx";

const subCategories = [
    { name: '綾井海荷（OC）', href: '#' },
    { name: '澤木海生（OC）', href: '#' },
    { name: '科搜研', href: '#' },
    { name: '特摄', href: '#' },
    { name: '其他同人', href: '#' },
]
const filters = [
    {
        id: 'Work',
        name: '一点打工实录',
        options: [
            { value: 'afk', label: 'AFK IP部平面设计', checked: false },
            { value: 'light', label: '以闪亮之名 发行平面设计', checked: false },
        ],
    },
    {
        id: 'Practice',
        name: '一些练习',
        options: [
            { value: 'redesign', label: '曲名Redesign', checked: false },
            { value: '2022', label: '作字夏フェス2022', checked: false },
        ],
    },
]

const IMAGES = [
    {
        src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f9d219e-a589-4b5b-8769-375b53ad3427/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221227T180047Z&X-Amz-Expires=86400&X-Amz-Signature=f8b3e1100a021026c27bafe83d5e548428c8d144447b6029bcd83a3c899eab57&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
        note: "娑丽丝",
        className: "rotate-[0deg]",
    },
    {
        src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee2d7576-0c1a-48ed-a2a5-e6e7e14b1d8b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221227T182219Z&X-Amz-Expires=86400&X-Amz-Signature=b45d5adc3f3f6f927cd8bbb8937405c6a2092a4df62ed09e0ce62f4362a64d69&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
        note: "艾伦",
        className: "rotate-[0deg]",
    },
    {
        src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a51668d3-dbbb-434d-8a39-6b0729ffb7f6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221227T182337Z&X-Amz-Expires=86400&X-Amz-Signature=da95a7337e6c14df7899e5ca9978c20a7d3003105ad5feeef9bbc39c0945fe46&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
        note: "猎魔人",
        className: "rotate-[0deg]",
    },
    {
        src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3767f49b-afcd-4cae-926b-3ca525611f35/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221227T182331Z&X-Amz-Expires=86400&X-Amz-Signature=171db3491914208a04cf8a3269856ef9b065e3c6b1b44167074520b128719e43&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",
        note: "塔尼",
        className: "rotate-[0deg]",
    }
]

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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">筛选</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X size={16} aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <a href={category.href} className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                  {open ? (
                                      <Minus className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                      <Plus className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">我的作品</h1>

                        <div className="flex items-center">
                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <SquaresFour className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <Funnel className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                              {open ? (
                                  <Minus className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                  <Plus className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {/* Replace with your content */}
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
                                        <ContentWrapper className="gap-6 columns-2 space-y-6 pt-6">
                                            {IMAGES?.map((item) => (
                                                <div
                                                    key={item.src}
                                                    className={clsx(
                                                        item?.className,
                                                        "relative border p-[4px] shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] dark:border-gray-700 drop-shadow-xl"
                                                    )}
                                                >
                                                    <img
                                                        src={item?.src}
                                                        alt={item?.place}
                                                        className="rounded-[9px] w-full"
                                                        loading="lazy"
                                                    />
                                                    <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white bg-opacity-25 hover:bg-opacity-60 bg-clip-padding backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                                                        <Compass size={14} className="mr-1" />
                                                        {item?.place }{item?.note}
                                                    </div>
                                                </div>
                                            ))}
                                        </ContentWrapper>
                                    </motion.div>
                                </div>
                                </body>
                                {/* /End replace */}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

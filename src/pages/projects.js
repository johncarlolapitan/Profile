import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import mob1 from "../../public/images/website/mob1.png";
import mob2 from "../../public/images/website/mob2.png";
import web1 from "../../public/images/website/alcoy.png";
import web3 from "../../public/images/website/anao.png";
import web4 from "../../public/images/website/estonia.png";
import web5 from "../../public/images/website/the6th.png";
import web6 from "../../public/images/website/davwow.png";
import soft1 from "../../public/images/website/bubble.png";
import proj1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import proj2 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import proj3 from "../../public/images/projects/fashion-studio-website.jpg";
import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../public/images/projects/devdreaming.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from 'react';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article
            className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
        >
            <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
            />

            <Link
                href={link}
                target={"_blank"}
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage
                    src={img}
                    className="h-auto w-full"
                    alt={title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    priority
                />
            </Link>
            <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target={"_blank"}
                    className="underline-offset-2 hover:underline"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
                        {title}
                    </h2>
                </Link>
                <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link
                        href={github}
                        target={"_blank"}
                        className="w-10"
                        aria-label="Crypto Screener Application github link"
                    >
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target={"_blank"}
                        className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
                        aria-label="Crypto Screener Application"
                    >
                        Visit Website
                    </Link>
                </div>
            </div>
        </article>
    );
};
const Project = ({ title, type, img, summary, link, github }) => {

    return (
        <article
            className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
        >
            <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
            />

            <Link
                href={link}
                target={"_blank"}
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="h-auto w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
            </Link>
            <div className="mt-4 flex w-full flex-col items-start justify-between">
                <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>

                <Link
                    href={link}
                    target={"_blank"}
                    className="underline-offset-2 hover:underline"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
                        {title}
                    </h2>
                </Link>
                <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="flex w-full items-center  justify-between">
                    <Link
                        href={link}
                        target={"_blank"}
                        className="rounded text-lg
            font-medium underline md:text-base
            "
                        aria-label={title}
                    >
                        Visit
                    </Link>
                    <Link
                        href={github}
                        target={"_blank"}
                        className="w-8 md:w-6"
                        aria-label={title}
                    >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};


const Project1 = ({ title, type, img, summary,  github }) => {

    return (
        <article
            className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
        >
            <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
            />

            <Link
                href={""}
                target={"_blank"}
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="h-auto w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
            </Link>
            <div className="mt-4 flex w-full flex-col items-start justify-between">
                <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>

                <Link
                    href={""}
                    target={"_blank"}
                    className="underline-offset-2 hover:underline"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
                        {title}
                    </h2>
                </Link>
                <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="flex w-full items-center  justify-between">
                    <Link
                        href={github}
                        target={"_blank"}
                        className="w-8 md:w-6"
                        aria-label={title}
                    >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default function Home() {
    const [activeContent, setActiveContent] = useState(1);

    const switchContent = (contentNumber) => {
        setActiveContent(contentNumber);
    };

    return (
        <div className="content">

            <div id="content1" style={{ display: activeContent === 1 ? 'block' : 'none' }}>
                <>
                    <Head>

                        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
                        <meta
                            name="description"
                            content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
                        />
                    </Head>

                    <TransitionEffect />
                    <main
                        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
                    >
                        <Layout className="pt-16">
                            <AnimatedText
                                text="Imagination Trumps Knowledge!"
                                className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                            />
                            <center>
                            <div className="buttons">
                                <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(1)}>Websites </button>
                                                    <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(2)}>Softwares </button>
                                                    <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(3)}>Mobile Application </button>
                            </div>
                            </center>
                            <br />
                            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                                <div className="col-span-12">
                                    <FeaturedProject
                                        type="Wordpress | YooTheme"
                                        title="Municipality Of Alcoy Website"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={web1}
                                        link="http://alcoy.free.nf/"
                                        github="https://github.com/codebucks27/CryptoBucks-Final-Code"
                                    />
                                </div>



                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="Wordpress | YooTheme"
                                        title="Municipality Of Anao Website"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={web3}
                                        link="http://anao.free.nf/"
                                        github="https://github.com/codebucks27/The-Weirdos-NFT-Website-Starter-Code"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="Wordpress | YooTheme"
                                        title="Municipality Of Porac Website"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={proj3}
                                        link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                                        github="https://github.com/codebucks27/wibe-studio"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="HTML, CSS, JS"
                                        title="The 6th Website"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={web5}
                                        link="https://johncarlolapitan.github.io/The-6th/"
                                        github="https://github.com/johncarlolapitan/The-6th"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="HTML, CSS, JS"
                                        title="DavWow Website"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={web6}
                                        link="https://johncarlolapitan.github.io/DavWow/"
                                        github="https://github.com/johncarlolapitan/DavWow"
                                    />
                                </div>







                                <div className="col-span-12">
                                    <FeaturedProject
                                        type="HTML, CSS, JS"
                                        title="Estonia Website"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={web4}
                                        link="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                                        github="https://github.com/codebucks27/CryptoBucks-Final-Code"
                                    />
                                </div>
                            </div>
                        </Layout>
                    </main>
                </>
            </div>
            <div id="content2" style={{ display: activeContent === 2 ? 'block' : 'none' }}>
                <>
                    <Head>
                        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
                        <meta
                            name="description"
                            content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
                        />
                    </Head>

                    <TransitionEffect />
                    <main
                        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
                    >
                        <Layout className="pt-16">
                            <AnimatedText
                                text="Imagination Trumps Knowledge!"
                                className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                            />

                            <center>
                            <div className="buttons">
                                <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(1)}>Websites </button>
                                                    <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(2)}>Softwares </button>
                                                    <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(3)}>Mobile Application </button>
                            </div>
                            </center>

                            <br />
                            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                                <div className="col-span-12">
                                    <FeaturedProject
                                        type="PHP, CSS, HTML, JS | Codeigniter 3"
                                        title="POS and Inventory System For Bubble Bee"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={soft1}
                                        link="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                                        github="https://github.com/codebucks27/CryptoBucks-Final-Code"
                                    />
                                </div>
                            </div>
                        </Layout>
                    </main>
                </>
            </div>
            <div id="content3" style={{ display: activeContent === 3 ? 'block' : 'none' }}>
                <>
                    <Head>
                        <title>Modern Portfolio Built with Nextjs | Projects Page</title>
                        <meta
                            name="description"
                            content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
                        />
                    </Head>

                    <TransitionEffect />
                    <main
                        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
                    >
                        <Layout className="pt-16">
                            <AnimatedText
                                text="Imagination Trumps Knowledge!"
                                className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                            />

                            <center>
                            <div className="buttons">
                                <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(1)}>Websites </button>
                                                    <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(2)}>Softwares </button>
                                                    <button className="rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                                capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                                dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                                md:p-2 md:px-4 md:text-base
                                " onClick={() => switchContent(3)}>Mobile Application </button>
                            </div>
                            </center>

                            <br />
                            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                                <div className="col-span-6 sm:col-span-12">
                                    <Project1
                                        type="Android Studio"
                                        title="Oh My Stocks | Inventory Mobile Application"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={mob1}
                                        github="https://github.com/johncarlolapitan/The-6th"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project1
                                        type="Android Studio"
                                        title="Crushies | Ordering Mobile Application"
                                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        img={mob2}
                                        github="https://github.com/johncarlolapitan/DavWow"
                                    />
                                </div>
                            </div>
                        </Layout>
                    </main>
                </>
            </div>
        </div>
    );
}
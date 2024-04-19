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
import web7 from "../../public/images/website/porac.png";
import web8 from "../../public/images/website/suyo.png";
import web9 from "../../public/images/website/mcp.png";
import soft1 from "../../public/images/website/bubble.png";
import soft2 from "../../public/images/website/csharp.png";
import proj3 from "../../public/images/projects/fashion-studio-website.jpg";
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
const FeaturedProject1 = ({ type, title, summary, img, github }) => {

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
                href={""}
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

                    <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
                        {title}
                    </h2>

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
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
                        {title}
                    </h2>
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
                        <title>John Carlo Lapitan | Projects Page</title>
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
                                        summary="Municipality of Alcoy Website, This is a revamp website for Alcoy Website, This is my Final Project During my On-The-Job training in My Creative Panda. This Website is Built with Wordpress that uses YooTheme as it's builder"
                                        img={web1}
                                        link="http://alcoy.free.nf/"
                                        github="#"
                                    />
                                </div>



                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="Wordpress | YooTheme"
                                        title="Municipality Of Anao Website"
                                        summary="Municipality of Anao Website, This is a revamp website for Anao Website, This is one of my Project During my On-The-Job training in My Creative Panda. This Website is Built with Wordpress that uses YooTheme as it's builder"
                                        img={web3}
                                        link="http://anao.free.nf/"
                                        github="#"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="Wordpress | YooTheme"
                                        title="Municipality Of Porac Website"
                                        summary="Municipality of Porac Website, This is a revamp website for Porac Website, This is one of my Project During my On-The-Job training in My Creative Panda. This Website is Built with Wordpress that uses YooTheme as it's builder."
                                        img={web7}
                                        link=""
                                        github=""
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="Wordpress | YooTheme"
                                        title="Municipality Of Suyo Website"
                                        summary="Municipality of Suyo Website, This is a revamp website for Suyo Website, This is my First Project During my On-The-Job training in My Creative Panda. This Website is Built with Wordpress that uses YooTheme as it's builder"
                                        img={web8}
                                        link=""
                                        github=""
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="Wordpress | YooTheme"
                                        title="My Creative Panda Website"
                                        summary="My Creative Panda Website, This is a revamp website for My Creative Panda Website, This is one of my Project During my On-The-Job training in My Creative Panda. This Website is Built with Wordpress that uses YooTheme as it's builder"
                                        img={web9}
                                        link=""
                                        github=""
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="HTML, CSS, JS"
                                        title="The 6th Website"
                                        summary="The 6th Website, This Website is built by HTML, CSS, and JS. This system is a collaboration with other Strand during our SHS and we develop this Website together with our team and i help a lot during the development phase"
                                        img={web5}
                                        link="https://johncarlolapitan.github.io/The-6th/"
                                        github="https://github.com/johncarlolapitan/The-6th"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-12">
                                    <Project
                                        type="HTML, CSS, JS"
                                        title="DavWow Website"
                                        summary="DavWow Website, This Website is built by HTML, CSS, and JS. This system is a collaboration with other Strand during our SHS and we develop this Website together with our team and i help a lot during the development phase"
                                        img={web6}
                                        link="https://johncarlolapitan.github.io/DavWow/"
                                        github="https://github.com/johncarlolapitan/DavWow"
                                    />
                                </div>

                                <div className="col-span-12">
                                    <FeaturedProject
                                        type="HTML, CSS, JS"
                                        title="Estonia Website"
                                        summary="Tourism Website For Estonia, This Website was built by HTML, CSS, and JS, and it highlights the Esotonia, This system is built during our Final Project in Our Web Design Subject and i was the lead prog in the group."
                                        img={web4}
                                        link="https://devdreaming.com/videos/build-crypto-screener-app-with-react-tailwind-css"
                                        github="#"
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
                        <title>John Carlo Lapitan | Projects Page</title>
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
                                        summary="POS and Inventory System for Bubble Bee, This system lets the user to monitor and transact a transaction in their sales that can also generate a report for their remaining stocks and daily profit, also it can be use by multiple devices such as phone, tablet, and laptop. This system is our Capstone Project and i was the lead prog of the group."
                                        img={soft1}
                                        link="https://bubblebeefood.epizy.com/Group6_Caps/"
                                        github="https://github.com/johncarlolapitan/Capstone"
                                    />
                                </div>
                                <div className="col-span-12">
                                    <FeaturedProject1
                                        type="C# | Visual Studio"
                                        title="Inventory and Point of Sales Windows Form System"
                                        summary="Inventory and Point of Sales Windows Form System, This system lets the user to monitor stocks and transact a transaction in their sales that can also generate a report for their daily profit, This System was built during Our Final Project in SHS and was task to get a Culinary Team as our Client, and i was the Lead PRogrammer of the group."
                                        img={soft2}
                                        github="https://github.com/johncarlolapitan/Pasteleria"
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
                        <title>John Carlo Lapitan | Projects Page</title>
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
                                        //summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                                        summary="Oh My Stocks, is a Inventory Application for Pharmacy at Tarlac Provincial Hospital (TPH) I develop this projects during my SHS days wherein we are task for our final project to find a client within the Tarlac City and create and application for their business components."
                                        img={mob1}
                                        github="https://github.com/johncarlolapitan/Oh-My-Stocks"
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

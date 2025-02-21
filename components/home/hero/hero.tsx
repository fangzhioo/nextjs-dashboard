"use client";

import NextLink from "next/link";
import {Button, Link, Chip} from "@nextui-org/react";
import {ArrowRightIcon, GithubIcon} from "@/components/icons";
import dynamic from "next/dynamic";

import {FloatingComponents} from "./floating-components";

import {title, subtitle} from "@/components/primitives";

const BgLooper = dynamic(() => import("./bg-looper").then((mod) => mod.BgLooper), {
  ssr: false,
});

export const Hero = () => {
 
  return (
    <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)]">
      <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
        <div className="w-full flex justify-center md:hidden">
          <Chip
            as={NextLink}
            className="w-full hover:bg-default-100 border-default-200/80 dark:border-default-100/80 transition-colors cursor-pointer"
            color="secondary"
            href="/blog/v2.2.0"
            variant="dot"
          >
            Introducing v2.2.0&nbsp;
            <span aria-label="rocket emoji" role="img">
              🚀
            </span>
          </Chip>
        </div>
        <div className="text-center leading-8 md:leading-10 md:text-left">
          <div className="inline-block">
            <h1 className={title()}>Make&nbsp;</h1>
            <h1 className={title({color: "violet"})}>beautiful&nbsp;</h1>
          </div>
          <h1 className={title()}>websites regardless of your design experience.</h1>
        </div>
        <h2 className={subtitle({fullWidth: true, class: "text-center md:text-left"})}>
          Beautiful, fast and modern React UI library.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button
            as={NextLink}
            className="w-full md:w-auto"
            color="primary"
            endContent={
              <ArrowRightIcon
                className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
                strokeWidth={2}
              />
            }
            href="/docs/guide/introduction"
            radius="full"
            size="lg"
          >
            Get Started
          </Button>

          <Button
            fullWidth
            isExternal
            as={Link}
            className="w-full md:w-auto"
            href="https://github.com/nextui-org/nextui"
            radius="full"
            size="lg"
            startContent={<GithubIcon />}
            variant="bordered"
          >
            Github
          </Button>
        </div>
      </div>

      <FloatingComponents />

      <BgLooper />
    </section>
  );
};

import React from "react"
import {
  // AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineMedium
} from "react-icons/ai"

import {
  FaDiscord,
  FaTiktok,
  FaCoffee
} from "react-icons/fa"

// TODO: Add TikTok, Medium links
const Footer = () => {

  const currentYear = new Date().getFullYear().toString();

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © { currentYear } MohyCS <a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          {/* <a href="https://github.com/hqasmei" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a> */}
          <a
            href="https://twitter.com/mohycs"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          {/* <a
            href="https://www.linkedin.com/in/mohysaleh/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a> */}
          <a
            href="https://www.youtube.com/channel/UCsUdhcyaYDB25xXBYukDw7A"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.tiktok.com/@mohycs"
            rel="noreferrer"
            target="_blank"
          >
            <FaTiktok
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={24}
            />
          </a>
          <a
            href="https://mohycs.medium.com/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMedium
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={32}
            />
          </a>

          <a
            href="https://discord.gg/6pxEPjVDsT"
            rel="noreferrer"
            target="_blank"
          >
            <FaDiscord
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={32}
            />
          </a>

          <a
            href="https://www.buymeacoffee.com/mohycs"
            rel="noreferrer"
            target="_blank"
          >
            <FaCoffee
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={32}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

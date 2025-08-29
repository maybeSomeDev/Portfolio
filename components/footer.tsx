"use client";

import { getSocialLinks, getPersonalInfo } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "@/components/icons/github.svg";
import DiscordIcon from "@/components/icons/discord.svg";
import RobloxIcon from "@/components/icons/roblox.svg";

const iconMap = {
  "github": GithubIcon,
  "discord": DiscordIcon,
  "roblox": RobloxIcon,
};

export function Footer() {
  const socials = getSocialLinks();
  const personalInfo = getPersonalInfo();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-card py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <Link href="/" className="text-xl font-bold mb-6">
            {personalInfo.name.split(' ')[0]}<span className="text-primary">{personalInfo.name.split(' ')[1] || ''}</span>
          </Link>

          <motion.div 
            className="flex gap-6 mb-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {socials.map((social) => {
              const IconSrc = iconMap[social.icon.toLowerCase() as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className={cn(
                    "h-10 w-10 flex items-center justify-center rounded-full",
                    "text-muted-foreground hover:text-primary transition-colors",
                    "border border-border hover:border-primary"
                  )}
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {IconSrc && (
                    <Image
                      src={IconSrc}
                      alt={`${social.platform} icon`}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 flex items-center justify-center">
              {/* Made with ❤️ by {personalInfo.name} */}
            </p>
            <p>
              {/* &copy; {currentYear} All rights reserved. */}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
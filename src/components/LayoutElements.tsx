import React from 'react'
import AnimationText from './animations/AnimationText'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'

export default function LayoutElements() {
    return (
        <div className="xl:col-span-3 h-max xl:pl-8 mt-24 md:mt-32 xl:mt-40">
              <div className="xl:mt-8 font-semibold">
                <AnimationText text="Hi," />
                <AnimationText text="I am Siddhesh Lakhani!" />
                <AnimationText text="A Full-Stack Engineer" />
              </div>
              <div className="flex flex-row gap-8 mt-8 md:mt-10 xl:mt-12 xl:ml-8 font-medium justify-center xl:justify-normal">
                <Link href={"./contact"}>
                  <Button className="w-36 text-xl bg-accent text-black hover:bg-accent-hover duration-300 transition-all rounded-3xl">
                    Hire Me
                  </Button>
                </Link>
                <Link href="/resume.pdf">
                  <Button className="w-36 text-xl bg-inherit text-accent border-2 md:border-4 border-accent hover:bg-accent-hover hover:text-black duration-300 transition-all rounded-3xl">
                    Resume
                  </Button>
                </Link>
              </div>
              <Nav />
            </div>
    )
}

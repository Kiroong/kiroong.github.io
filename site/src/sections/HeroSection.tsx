import { IoMailOutline } from "react-icons/io5"
import { FiFileText, FiExternalLink } from "react-icons/fi"
import { ImageKrchoe, ImageVision, ImageVision2 } from "../data/images"

export const HeroSection = () => {
  return (
    <section className="bg-white pb-6">
      <div className="max-w-full md:max-w-3xl lg:max-w-[1120px] mx-auto px-5 py-12">
        {/* Main Layout: Sidebar + Content */}
        <div className="flex gap-8 mb-8">
          {/* Left Sidebar - Desktop only */}
          <div className="hidden lg:block lg:w-[280px] flex-shrink-0">
            {/* Profile Photo */}
            <img src={ImageKrchoe} className="w-64 h-64 rounded-full object-cover mb-4" alt="Kiroong Choe" />

            {/* Name */}
            <h1 className="text-4xl mb-4">
              <span className="font-black">Kiroong</span>{" "}
              <span className="font-normal">Choe</span>
            </h1>

            {/* Contact chips */}
            <div className="flex flex-col gap-2 text-sm mb-6">
              <a href="mailto:kiroong.choe@bc.edu" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors w-fit">
                <IoMailOutline size={14} /> Email
              </a>
              <a href="/CV/cv.pdf" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors w-fit">
                <FiFileText size={14} /> CV
              </a>
              <a href="https://scholar.google.com/citations?user=BRZ2pMEAAAAJ" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors w-fit">
                <FiExternalLink size={14} /> Google Scholar
              </a>
            </div>

            {/* Latest News */}
            <div>
              <p className="font-semibold text-gray-800 mb-2">Latest News</p>
              <ul className="space-y-1 text-gray-600">
                <li>• Two papers conditionally accepted to CHI 2026</li>
                <li>• Co-instructing Human-AI Interaction course led by Prof. Nam Wook Kim at Boston College</li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Bio paragraph */}
            <p className="text-gray-700 leading-relaxed mb-6">
              I received my Ph.D. in Computer Science from <a href="https://en.snu.ac.kr/" className="underline">Seoul National University</a>, advised by <a href="https://hcil.snu.ac.kr/people/jinwook-seo" className="underline">Prof. Jinwook Seo</a>, supported by the <a href="https://www.kfas.or.kr/" className="underline">Korea Foundation for Advanced Studies</a> Ph.D. Scholarship. I also hold a B.S. in Computer Science and a B.A. in Psychology from <a href="https://en.snu.ac.kr/" className="underline">Seoul National University</a>, supported by the <a href="https://www.ikef.or.kr/" className="underline">Kwanjeong Educational Foundation</a> Undergraduate Scholarship. I am currently a Visiting Scholar at <a href="https://www.bc.edu/" className="underline">Boston College</a>, where I work with <a href="https://www.namwkim.org/" className="underline">Prof. Nam Wook Kim</a>, supported by the <a href="https://www.kiat.or.kr/eng/user/main.do?lang=en" className="underline">Korea Institute for Advancement of Technology</a>.
            </p>

            {/* Research Focus 1: Visual Thinking */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <img src={ImageVision} className="rounded flex-shrink-0 mx-auto md:mx-0" style={{ width: '150px' }} alt="Research vision" />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    My research focuses on building <strong>interactive and intelligent systems</strong> for <strong className="text-blue-600">human visual thinking</strong>. Human thought is free, flexible, and intuitive—yet rigid data structures often fail to capture it. I focus primarily on supporting <strong>visual thinking</strong>, a way of understanding deeply natural to humans, that seamlessly supports human sensemaking.
                  </p>
                </div>
              </div>
            </div>

            {/* Research Focus 2: Human Authorship */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <img src={ImageVision2} className="rounded flex-shrink-0 mx-auto md:mx-0" style={{ width: '150px' }} alt="Human authorship in creative work" />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    My research also focuses on designing <strong>human-AI collaborative systems</strong> that preserve <strong className="text-blue-600">human authorship</strong>. As AI systems increasingly participate in intellectual work, authorship is at stake. I design systems that support human sensemaking while preserving <strong>originality</strong>, <strong>accountability</strong>, and <strong>agency</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Postdoc Callout */}
            <div className="border-l-4 border-amber-500 bg-gradient-to-r from-amber-50 to-transparent pl-4 pr-6 py-4 rounded-r">
              <p className="font-semibold text-gray-900 mb-2">I'm actively seeking postdoctoral opportunities!</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                I'm open to collaborations, research connections, and talk invitations. Currently based in Boston and happy to visit institutions worldwide.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

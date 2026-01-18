import { IoMailOutline } from "react-icons/io5"
import { FiFileText, FiExternalLink } from "react-icons/fi"
import { ImageKrchoe } from "../data/images"

export const HeroSection = () => {
  return (
    <section className="bg-white border-b">
      <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6">
          <img src={ImageKrchoe} className="w-36 h-36 aspect-square rounded-md object-cover flex-shrink-0 md:mt-10" alt="Kiroong Choe" />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">Kiroong Choe</h1>

            <div className="space-y-1 text-sm text-gray-600 mb-4 text-left">
              <p>Visiting Scholar at Boston College (w/ <a href="https://www.namwkim.org/" className="underline">Nam Wook Kim</a>)</p>
              <p>Ph.D. in Computer Science at Seoul National University (w/ <a href="https://hcil.snu.ac.kr/" className="underline">Jinwook Seo</a>)</p>
              <p className="pl-4">Supported by <a href="https://www.kfas.or.kr/" className="underline">Korea Foundation for Advanced Studies (KFAS)</a> Ph.D. Scholarship</p>
              <p className="text-gray-400">B.S. in Computer Science at Seoul National University</p>
              <p className="text-gray-400">B.A. in Psychology (Double Major) at Seoul National University</p>
              <p className="text-gray-400 pl-4">Supported by <a href="https://www.ikef.or.kr/" className="underline">Kwanjeong Educational Foundation</a> Undergraduate Scholarship</p>
            </div>

            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md text-left">
              <p className="text-sm font-semibold text-blue-900 mb-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Latest News
                </span>
              </p>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Two papers conditionally accepted to CHI 2026</li>
                <li>• Co-instructing Human-AI Interaction course led by Prof. Nam Wook Kim at Boston College</li>
              </ul>
            </div>

            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-left">
              <p className="text-sm font-semibold text-amber-900 mb-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                  I'm actively seeking postdoctoral opportunities!
                </span>
              </p>
              <p className="text-sm text-amber-800">
                I'm open to collaborations, research connections, and invitations to give talks.
                Currently living in Boston, I welcome opportunities to visit institutions anywhere, including the US, Canada, Europe, and beyond.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
              <a href="mailto:kiroong.choe@bc.edu" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
                <IoMailOutline size={14} /> Email
              </a>
              <a href="/CV/cv.pdf" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
                <FiFileText size={14} /> CV
              </a>
              <a href="https://scholar.google.com/citations?user=BRZ2pMEAAAAJ" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
                <FiExternalLink size={14} /> Google Scholar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

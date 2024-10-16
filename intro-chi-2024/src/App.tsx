import ImageKrchoe from "./figures/krchoe.jpg"
import ImageCitenetBarcharts from "./figures/homepage-citenet-barcharts.png"
import ImageCitenetExample from "./figures/homepage-citenet-example.png"
import ImageCitenetInterface from "./figures/homepage-citenet-interface.png"
import ImageCitenetSixtypes from "./figures/homepage-citenet-sixtypes.png"
import ImageClvpExample from "./figures/clvp-example.png"
import ImageClvpInterface from "./figures/clvp-interface.png"
import ImageClvpBarcharts from "./figures/clvp-barcharts.png"
import ImageLWExample from "./figures/lw-example.png"
import ImageLWInterface from "./figures/lw-interface.png"
import ImageLWResult from "./figures/lw-result.png"
import ImageP101Interface from "./figures/p101-interface.png"
import ImageNewIdea from "./figures/new-idea.png"
import { IoDocumentTextOutline, IoMailOutline } from "react-icons/io5"

const App = () => {
  return (
    <div className="bg-gray-50 p-5">
      <div className="max-w-3xl mx-auto">
        <div className="mx-auto flex mb-6 justify-center items-center gap-4">
          <img src={ImageKrchoe} className="w-32 h-32 rounded-full" />
          <ul>
            <h1 className="text-2xl font-bold mb-3">Kiroong Choe</h1>
            <li className="list-disc list-inside">Ph. D Student</li>
            <li className="list-disc list-inside">
              Seoul National University, Korea
            </li>
            <li className="flex items-center justify-start gap-3 -ml-1.5">
              <IoMailOutline /> krchoe@hcil.snu.ac.kr
            </li>
          </ul>
        </div>

        {/* Quick Links for VIS 2024 Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Papers Presented at VIS 2024
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <a
                href="http://hcil.snu.ac.kr/system/publications/pdfs/000/000/197/original/Submission_Manuscript_R1.pdf?1718443507"
                className="flex items-start w-full hover:bg-gray-100 p-2 rounded-lg"
              >
                <div className="flex flex-col items-center justify-start w-8 mr-3 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-lg mb-1">
                    <IoDocumentTextOutline className="text-white text-xl" />
                  </div>
                  <span className="text-xs">PDF</span>
                </div>
                <div>
                  <span className="text-blue-600 hover:underline mr-2">
                    Enhancing Data Literacy On-demand: LLMs as Guides for
                    Novices in Chart Interpretation
                  </span>
                  <p className="text-sm text-gray-600">
                    Kiroong Choe, Chaerin Lee, Soohyun Lee, Jiwon Song, Aeri Cho,
                    Nam Wook Kim, Jinwook Seo (VIS 2024 Full Paper; TVCG)
                  </p>
                </div>
              </a>
            </li>
            <li className="flex items-start mt-4">
              <a
                href="http://hcil.snu.ac.kr/system/publications/pdfs/000/000/198/original/vis24b-sub1173-cam-i7_%283%29.pdf?1726028942"
                className="flex items-start w-full hover:bg-gray-100 p-2 rounded-lg"
              >
                <div className="flex flex-col items-center justify-start w-8 mr-3 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-lg mb-1">
                    <IoDocumentTextOutline className="text-white text-xl" />
                  </div>
                  <span className="text-xs">PDF</span>
                </div>
                <div>
                  <span className="text-blue-600 hover:underline mr-2">
                    Fields, Bridges, and Foundations: How Researchers Browse
                    Citation Network Visualizations
                  </span>
                  <p className="text-sm text-gray-600">
                    Kiroong Choe, Eunhye Kim, Sangwon Park, Jinwook Seo (VIS 2024
                    Short Paper)
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Research Focus Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Research Focus</h2>
          <p>
            My research focuses on building{" "}
            <span className="underline">systems that balance between</span>:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Using AI for easy data analyses,</strong> such as
              literature reviews and chart interpretation.
            </li>
            <li>
              <strong>Using VIS & UI for direct data engagement</strong>, rather
              than just receive AI-generated responses.
            </li>
          </ul>
        </div>

        {/* Complex Charts Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Complex Charts</span>, made
            understandable
          </h2>
          <h3 className="text-md font-semibold mt-4">
            <a href="https://ieeexplore.ieee.org/document/10555321">
              Enhancing Data Literacy On-demand: LLMs as Guides for Novices in
              Chart Interpretation
            </a>{" "}
            <a href="http://hcil.snu.ac.kr/system/publications/pdfs/000/000/197/original/Submission_Manuscript_R1.pdf?1718443507">
              [PDF]
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Kiroong Choe,{" "}
            <span className="text-gray-400">
              Chaerin Lee, Soohyun Lee, Jiwon Song, Aeri Cho, Nam Wook Kim,
              Jinwook Seo
            </span>{" "}
            (TVCG; presented at VIS 2024)
          </p>
          <div className="py-6 border-b-2">
            <p className="text-sm">
              The general public increasingly encounters complex charts, but
              their primary resource for understanding these is often just
              Google.
            </p>
            <img
              src={ImageClvpExample}
              className="w-full max-w-[400px] mx-auto"
            />
          </div>
          <div className="py-6 border-b-2">
            <p className="text-sm pb-2">
              We have facilitated chart discussions using LLM through both
              textual and visual annotations.
            </p>
            <img src={ImageClvpInterface} className="w-full" />
          </div>
          <div className="py-6">
            <p className="text-sm pb-2">
              LLM and visual communication effectively onboarded people to
              complex visualizations but may also posed risks, such as creating
              performance illusions and reducing engagement.
            </p>
            <img
              src={ImageClvpBarcharts}
              className="w-full max-w-[480px] mx-auto"
            />
          </div>
        </div>

        {/* Citation Networks Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          {/* <h2 className="text-xl font-semibold mb-4">Citation Networks</h2> */}
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Citation Networks</span>, manually
            browsable
          </h2>
          {/* <p>I make citation networks manually browsable.</p> */}
          <h3 className="text-md font-semibold mt-4">
            <a href="http://hcil.snu.ac.kr/system/publications/pdfs/000/000/198/original/vis24b-sub1173-cam-i7_%283%29.pdf?1726028942">
              Fields, Bridges, and Foundations: How Researchers Browse Citation
              Network Visualizations
            </a>{" "}
            <a href="http://hcil.snu.ac.kr/system/publications/pdfs/000/000/198/original/vis24b-sub1173-cam-i7_%283%29.pdf?1726028942">
              [PDF]
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Kiroong Choe,{" "}
            <span className="text-gray-400">
              Eunhye Kim, Sangwon Park, Jinwook Seo
            </span>{" "}
            (VIS 2024 Short Paper)
          </p>
          <div className="py-6 border-b-2">
            <p className="text-sm">
              Citation network is inherently complex. This image shows a depth-1
              graph of a single paper!
            </p>
            <img
              src={ImageCitenetExample}
              className="w-full max-w-[400px] mx-auto"
            />
          </div>

          <div className="py-6 border-b-2">
            <p className="text-sm">
              We investigated the specific elements researchers want to see in a
              citation network{" "}
              <span className="text-gray-400">
                (Collected 179 records from N=18 researchers)
              </span>
              .
            </p>
            <img src={ImageCitenetInterface} className="w-full" />
          </div>

          <div className="py-6 border-b-2">
            <p className="text-sm mb-2">
              Researchers were interested in exploring{" "}
              <strong>topics, intersections, and macro trends</strong> within
              these networks <strong>from two distinct perspectives</strong>.
            </p>
            <img src={ImageCitenetSixtypes} className="w-full" />
          </div>

          <div className="py-6 border-b-2">
            <p className="text-sm">
              Layout-oriented perspectives, despite their popularity, were
              misleading and call for better alignment.
            </p>
            <img src={ImageCitenetBarcharts} className="w-full" />
          </div>

          <h3 className="text-lg font-semibold mt-4">
            System for Manually Browsing Citation Networks
          </h3>
          <p className="text-gray-600 text-sm">
            (In development for UIST 2025)
          </p>
          <div className="py-6">
            <p className="text-sm">
              I believe that creating a system to manually browse citation
              networks will synergize with emerging intelligent search tools.
              I'm working on a system that utilizes graph simplification and an
              LLM as a compass.
            </p>
            <img src={ImageNewIdea} className="w-full" />
          </div>
        </div>

        {/* Literature Reviews Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            <span className="underline">Literature Reviews</span>, more engaging
          </h2>

          <h3 className="text-md font-semibold mt-4">
            <a href="https://dl.acm.org/doi/10.1145/3613905.3650787">
              Supporting Novice Researchers to Write Literature Review using
              Language Models
            </a>{" "}
            <a href="http://hcil.snu.ac.kr/system/publications/pdfs/000/000/193/original/3613905.3650787.pdf?1718209740">
              [PDF]
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Kiroong Choe,{" "}
            <span className="text-gray-400">
              Seokhyeon Park, Seokweon Jung, Hyeok Kim, Jiwon Yang, Hwajung
              Hong, Jinwook Seo
            </span>{" "}
            (CHI EA'24)
          </p>
          <div className="py-6 border-b-2">
            <p className="text-sm mb-2">
              Writing the Related Work section is not just a final step, yet is
              overwhelming task for novice researchers.
            </p>
            <img
              src={ImageLWExample}
              className="w-full max-w-[480px] mx-auto"
            />
          </div>
          <div className="py-6 border-b-2">
            <p className="text-sm mb-2">
              We integrated interaction with large language models atop Notion
              to encourage and enhance engagement with literature review
              writing.
            </p>
            <img src={ImageLWInterface} className="w-full" />
          </div>
          <div className="py-6 border-b-2">
            <p className="text-sm mb-2">
              LLMs not only helped initiate and develop narratives but also
              acted as supportive companions, boosting confidence and fostering
              a sense of agency.
            </p>
            <img src={ImageLWResult} className="w-full max-w-[350px] mx-auto" />
          </div>

          <h3 className="text-md font-semibold mt-12">
            <a href="https://ieeexplore.ieee.org/abstract/document/9438793">
              Papers101: Supporting the discovery process in the literature
              review workflow for novice researchers
            </a>{" "}
            <a href="http://hcil.snu.ac.kr/system/publications/pdfs/000/000/150/original/pacificvis21c-sub1033-cam-i5_%283%29.pdf?1618301220">
              [PDF]
            </a>
          </h3>
          <p className="text-gray-600 text-sm">
            Kiroong Choe,{" "}
            <span className="text-gray-400">
              Seokhyeon Park, Seokweon Jung, Hwajung Hong, Jinwook Seo
            </span>{" "}
            (PacificVis'21)
          </p>
          <div className="mt-4 pb-6 border-b-2">
            <p className="text-sm pb-2">
              Searching on Google Scholar often results in numerous disorganized
              outcomes. We designed a unified visualization that ranks relevant
              papers.
            </p>
            <img src={ImageP101Interface} className="w-full" />
          </div>
        </div>

        {/* Medical Data Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Other Experience</h2>

          <h3 className="text-md font-semibold mt-4">
            Medical data collection and analysis
          </h3>
          <ul>
            <li>
              <h3 className="text-sm font-normal mt-4">
                Use of continuous infusion of nicardipine to control persistent
                postpartum hypertension: A retrospective study
              </h3>
              <p className="text-gray-400 text-xs">
                Min Kyung Kim*,{" "}
                <span className="text-gray-600">Kiroong Choe*</span>, Kyong-No
                Lee, Iseop Cho, Hyeon Ji Kim, Jee Yoon Park{" "}
                <span className="text-gray-600">(2022)</span>
              </p>
            </li>
            <li>
              <h3 className="text-sm font-normal mt-4">
                Association between cesarean section rate and maternal age in
                twin pregnancies
              </h3>
              <p className="text-gray-400 text-xs">
                Seongbeen Kim, Eunjin Song, Ye Hyon Park, Aeri Cho,{" "}
                <span className="text-gray-600">Kiroong Choe</span>, Hyeon Ji
                Kim, Jee Yoon Park, Bohyoung Kim, Kyung Joon Oh{" "}
                <span className="text-gray-600">(2022)</span>
              </p>
            </li>
            <li>
              <h3 className="text-sm font-normal mt-4">
                Pregnancy outcomes of cerclage in twin gestations: a multicenter
                retrospective cohort study
              </h3>
              <p className="text-gray-400 text-xs">
                Jee Yoon Park, Kyong-No Lee, Hyeon Ji Kim,{" "}
                <span className="text-gray-600">Kiroong Choe</span>, and 14 more
                authors{" "}
                <span className="text-gray-600">(To apper in 2024)</span>
              </p>
            </li>
          </ul>

          <h3 className="text-md font-semibold mt-8">
            Enhancing Screen Reader Experience
          </h3>
          <ul>
            <li>
              <h3 className="text-sm font-normal mt-4">
                Soundglance: Briefing the glanceable cues of web pages for
                screen reader users
              </h3>
              <p className="text-gray-400 text-xs">
                Jaeyoon Song,{" "}
                <span className="text-gray-600">Kiroong Choe</span>, Jaemin Jo,
                Jinwook Seo <span className="text-gray-600">(CHI EA’19)</span>
              </p>
            </li>
            <li>
              <h3 className="text-sm font-normal mt-4">
                Compatible 2D table navigation system for visually impaired
                users
              </h3>
              <p className="text-gray-400 text-xs">
                <span className="text-gray-600">Kiroong Choe</span>, Jinwook Seo{" "}
                <span className="text-gray-600">(Demo)</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

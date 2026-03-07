interface Talk {
  venue: string
  venueUrl?: string
  lab?: string
  host?: string
  description?: string
  date: string
}

export const TalksSection = () => {
  const talks: Talk[] = [
    {
      venue: "University of Notre Dame",
      host: "Prof. Toby Jia-Jun Li",
      description: "Guest Lecture",
      date: "Mar 2026",
    },
    {
      venue: "Carnegie Mellon University",
      lab: "Augmented Perception Lab",
      host: "Prof. David Lindlbauer",
      date: "Feb 2026",
    },
    {
      venue: "BlendED",
      venueUrl: "https://www.blendedlearn.org/",
      description: "AI+X On-Campus Experience Program",
      date: "Feb 2026",
    },
    {
      venue: "Tufts University",
      host: "Prof. Remco Chang",
      date: "Feb 2026",
    },
  ]

  return (
    <section className="pt-8 pb-12 border-t">
      <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-8">Invited Talks</h2>
        <ul className="space-y-3 text-gray-700 list-disc list-inside text-base">
          {talks.map((talk, idx) => (
            <li key={idx}>
              {talk.venueUrl ? (
                <a href={talk.venueUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 no-underline hover:underline hover:text-blue-600 transition-colors">{talk.venue}</a>
              ) : (
                <span className="font-semibold text-gray-900">{talk.venue}</span>
              )}{talk.lab && `, ${talk.lab}`}{talk.description && `, ${talk.description}`}{talk.host && `, hosted by ${talk.host}`} <span className="text-gray-400 text-sm ml-1">{talk.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

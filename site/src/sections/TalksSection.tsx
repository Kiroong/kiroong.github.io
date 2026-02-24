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
      venue: "Carnegie Mellon University",
      lab: "Augmented Perception Lab",
      host: "David Lindlbauer",
      date: "Feb 2025",
    },
    {
      venue: "BlendED",
      venueUrl: "https://www.blendedlearn.org/",
      description: "AI+X On-Campus Experience program",
      date: "Feb 2025",
    },
    {
      venue: "Tufts University",
      host: "Remco Chang",
      date: "Feb 2025",
    },
  ]

  return (
    <section className="pt-8 pb-12 border-t">
      <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-8">Invited Talks</h2>
        <ul className="space-y-3">
          {talks.map((talk, idx) => (
            <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <span className="font-semibold text-gray-900">
                {talk.venueUrl ? (
                  <a href={talk.venueUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 transition-colors">{talk.venue}</a>
                ) : (
                  talk.venue
                )}
              </span>
              <span className="text-gray-500">
                {talk.lab && <>{talk.lab}, </>}
                {talk.host ? `hosted by ${talk.host}` : talk.description}
              </span>
              <span className="text-gray-400 text-sm">{talk.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

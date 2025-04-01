export default function StaticMovieDetails() {
    // Hardcoded movie data
    const movie = {
      title: "The Dark Knight",
      backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      release_date: "2008-07-16",
      runtime: 152,
      genres: [
        { id: 28, name: "Action" },
        { id: 80, name: "Crime" },
        { id: 18, name: "Drama" }
      ],
      vote_average: 8.5,
      vote_count: 29999,
      overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      credits: {
        cast: [
          {
            id: 51329,
            name: "Christian Bale",
            character: "Bruce Wayne",
            profile_path: "/qCpZn2e3dimwbryLnqxZuI88PTi.jpg"
          },
          {
            id: 6193,
            name: "Heath Ledger",
            character: "Joker",
            profile_path: "/zixTWuMZ1D8EopgOhLVZ6Js2ux3.jpg"
          },
          {
            id: 3896,
            name: "Aaron Eckhart",
            character: "Harvey Dent",
            profile_path: "/9Yw7Tb1suH9xGDQ47Zqy3hvdXOU.jpg"
          },
          {
            id: 380,
            name: "Michael Caine",
            character: "Alfred",
            profile_path: "/nlIjMLp9zvvYM2eFm77UhI7s1nW.jpg"
          },
          {
            id: 6968,
            name: "Gary Oldman",
            character: "Gordon",
            profile_path: "/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg"
          }
        ],
        crew: [
          {
            id: 525,
            name: "Christopher Nolan",
            job: "Director",
            profile_path: "/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg"
          }
        ]
      },
      similar: {
        results: [
          {
            id: 155,
            title: "The Dark Knight Rises",
            poster_path: "/85cWkCVftiVs0BVey6pxX8uNmLt.jpg"
          },
          {
            id: 49026,
            title: "The Dark Knight Returns Part 1",
            poster_path: "/aZvOkdo203bm1kpcY0A0Tn074ER.jpg"
          },
          {
            id: 272,
            title: "Batman Begins",
            poster_path: "/8RW2runSEc34IwKN2D1aPcJd2UL.jpg"
          },
          {
            id: 414906,
            title: "The Batman",
            poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg"
          },
          {
            id: 297761,
            title: "Suicide Squad",
            poster_path: "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg"
          }
        ]
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-900 text-white">
      
        <div className="container mx-auto px-4 py-8  relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster Column */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
  
            {/* Details Column */}
            <div className="w-full md:w-2/3 lg:w-3/4">
              {/* Title and Basic Info */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                  <div className="flex items-center">
                    <span className="inline-block w-5 h-5 mr-1 text-center">📅</span>
                    <span>{movie.release_date.split('-')[0]}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-5 h-5 mr-1 text-center">⏱️</span>
                    <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-5 h-5 mr-1 text-center">🎬</span>
                    <span>{movie.genres.map(g => g.name).join(', ')}</span>
                  </div>
                </div>
  
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-yellow-500 bg-opacity-20 px-3 py-1 rounded-full">
                    <span className="inline-block w-5 h-5 mr-1 text-center">⭐</span>
                    <span className="font-semibold">{movie.vote_average.toFixed(1)}</span>
                    <span className="text-gray-300 text-sm ml-1">/10</span>
                  </div>
                  <span className="text-gray-400 ml-2">({movie.vote_count.toLocaleString()} votes)</span>
                </div>
              </div>
  
              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
              </div>
  
              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cast */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Top Cast</h3>
                  <div className="flex space-x-4 overflow-x-auto pb-2">
                    {movie.credits.cast.slice(0, 5).map(person => (
                      <div key={person.id} className="flex-shrink-0 text-center">
                        <img
                          src={person.profile_path 
                            ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                            : '/default-avatar.jpg'}
                          alt={person.name}
                          className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
                        />
                        <p className="text-sm font-medium">{person.name}</p>
                        <p className="text-xs text-gray-400">{person.character}</p>
                      </div>
                    ))}
                  </div>
                </div>
  
                {/* Crew */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Director</h3>
                  {movie.credits.crew.filter(p => p.job === 'Director').map(person => (
                    <div key={person.id} className="flex items-center mb-4">
                      <img
                        src={person.profile_path 
                          ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                          : '/default-avatar.jpg'}
                        alt={person.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-sm text-gray-400">Director</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
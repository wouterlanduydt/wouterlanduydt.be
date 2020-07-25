const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const appleMusicData = await getAppleMusicData()
  const stravaData = await getStravaData()

  const allExtraData = {
    ...appleMusicData,
    ...stravaData
  }

  console.log({ allExtraData })

  createNode({
    ...allExtraData,

    id: `extra-data`,
    parent: null,
    children: [],
    internal: {
      type: `ExtraData`,
      contentDigest: createContentDigest(allExtraData),
    },
  })
}

const getStravaData = async () => {
  const CLIENT_SECRET = "579a6bb93673b04749e7d309a963efcd1d76dc9c"
  const CLIENT_ID = 46373
  const REFRESH_TOKEN = "feb5644f1fb82731f24a438dc29c1a7f30e76eb1"
  const ATHLETE_ID = "14325651"

  const accessToken = await fetch(`https://www.strava.com/oauth/token?client_secret=${CLIENT_SECRET}&client_id=${CLIENT_ID}&grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`, {
    method: "POST",
  }).then(x => x.json()).then(x => `${x.token_type} ${x.access_token}`)

  console.log({ accessToken })

  const stravaStats = await fetch(`https://www.strava.com/api/v3/athletes/${ATHLETE_ID}/stats`, {
    headers: { Authorization: accessToken }
  }).then(x => x.json())

  console.log({ stravaStats })

  const cycleDistanceInMeters = stravaStats.ytd_ride_totals.distance
  const cycleTime = stravaStats.ytd_ride_totals.elapsed_time

  return {
    cycleDistanceInMeters,
    cycleTime
  }
}

const getAppleMusicData = async () => {
  const resp = await fetch("https://amp-api.music.apple.com/v1/me/music-summaries/year-2020?views=top-artists%2Ctop-albums%2Ctop-songs&include[music-summaries]=playlist&include[playlists]=tracks&includeOnly=playlist%2Ctracks%2Csong%2Cartist%2Calbum", {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IldlYlBsYXlLaWQifQ.eyJpc3MiOiJBTVBXZWJQbGF5IiwiaWF0IjoxNTg3MDYxMzE4LCJleHAiOjE2MDI2MTMzMTh9.RVFjMLdnQtZd01LW0KqySOie3IzSrNw4d9-rUxUjtyCXwP2B76E9d21e_HlTm_VxZfiurw5tJdT5dMPsqbKfqw',
      'Music-User-Token': 'Ah60KSfJell5A9ZNyMsRXnY3MA3YomEgj2k9dkmuq9pT/Bi1iPMg/ltr/dsM9YbiBpKXNiFPiXG7oWsFI9UmwJvbf5nvfwQ77SFyoSKMRfF9C0HhpBqu/a9y4IKeZHQvXSnx1oiFF6I0YT6wOGP30ka+U7o+6251RRz+7dQ7wcYT1gsxYPzMFb1SZFa9VhhIHtIV/9/PcRBN3S8tRgbzgl9RtBhnO3OH2cAWnT/lEXCbulU6pQ=='
    },
  })
  const respData = await resp.json()

  const data = respData.data[0]
  const listenTimeInMinutes = data.attributes.listenTimeInMinutes
  const artists = data.views["top-artists"].data.map(artist => artist.relationships.artist.data[0].attributes.name)

  return {
    listenTimeInMinutes, artists
  }

}
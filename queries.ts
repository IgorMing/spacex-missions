export const LAUNCHES_QUERY = `
  query GetPastLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      ships {
        id
        name
        image
      }
    }
  }
`;

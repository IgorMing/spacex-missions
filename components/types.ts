interface Site {
  site_name_long: string;
}

interface Links {
  article_link: string;
  video_link: string;
  mission_patch: string;
}

interface Rocket {
  rocket_name: string;
  rocket_type: string;
}

export interface Ship {
  id: string;
  name: string;
  image?: string;
}

interface LaunchProps {
  id: string;
  mission_name: string;
  launch_date_local: Date;
  launch_site: Site;
  links: Links;
  rocket: Rocket;
  ships: Ship[];
}

export interface HomeProps {
  launches: LaunchProps[];
}

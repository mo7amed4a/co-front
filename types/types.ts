export interface Image {
  documentId?: string;
  url: string;
  alternativeText: string;
}
export interface Video {
  url: string;
}

export interface HeroType {
  title: string;
  description: string;
  background: Image;
}

export interface PersonType {
  documentId: string;
  name: string;
  photo: {
    alternativeText: string;
    url: string;
  };
  title: string;
}
export interface Slider {
  id: string;
  Image?: Image;
  title: string;
  description?: string;
  buttons?: Button[];
}

export interface Button {
  id: string;
  text: string;
  link: string;
  color: string;
}

export interface AboutSectionType {
  title: string;
  description: string;
  image?: Image;
  state: StateType[];
}

export interface FAQSectionType {
  title: string;
  questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export interface StateType {
  id: string;
  text: string;
  description: string;
}

export interface DiplomaType {
  documentId: string;
  text: string;
  description: string;
  long_description: any;
  image: Image;
  images: Image[];
  createdAt: string;
  price: number;
  date: string;
  video: Video;
  discount: number;
  badge: string;
}

export interface DiplomasSectionType {
  title: string;
  diplomas: DiplomaType[];
}

export interface HomeType {
  slider: Slider[];
  coming_soon: {
    title: string;
    diploma: DiplomaType;
  };
  AboutSection: AboutSectionType;
  faqs: FAQSectionType;
  team: {
    teams: PersonType[];
  };
  diplomas: DiplomasSectionType;
  blogs: {
    blogs: Blog[];
  };
  register: {
    title: string;
    image: {
      alternativeText: string;
      url: string;
    };
  };
}

export interface Blog {
  documentId: string;
  title: string;
  descripton: string;
  content: any;
  image: Image;
  createdAt: string;
}

export interface BlogsQuery {
  blogs: Blog[];
  blog: Blog;
  blogsPage: {
    hero: HeroType;
  };
}

export interface WebsiteType {
  title: string;
  description: string;
  keywords: string;
};
export interface LinkType {
  id: string;
  title: string;
  link: string;
}

export interface FooterType {
  description: string;
  links: LinkType[];
  social_links: {
    facebook: string;
    x: string;
    instagram: string;
  };
  contact_links :{
    email: string;
    address: string;
    phone: string;
  }
}

export interface LayoutType {
  website: WebsiteType
  navbar: {
    links: LinkType[];
    whatsapp:string
  };
  footer: FooterType;
}

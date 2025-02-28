export interface Image {
  documentId?: string;
  url: string;
  alternativeText: string;
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
}

export interface DiplomasSectionType {
  title: string;
  diplomas: DiplomaType[];
}

export interface HomeType {
  slider: Slider[];
  AboutSection: AboutSectionType;
  faqs: FAQSectionType;
  diplomas: DiplomasSectionType
  blogs: {
    blogs: Blog[]
  }
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
}

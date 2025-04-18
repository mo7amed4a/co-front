export const diplomaString = `{
  documentId
  text
  description
  long_description
  image {
    alternativeText
    url
  }
  images {
    documentId
    alternativeText
    url
  }
  price
  date 
  video {
    url
  }
  discount
  badge
  createdAt
}
`;

const blogString = `{
    documentId
    title
    descripton
    content
    image {
      alternativeText
      url
    }
    createdAt
  }
`;

export const QueryHome = ` query HomePage {
  homePage {
    slider {
      id
      Image {
        alternativeText
        url
      }
      title
      description
      buttons {
        id
        text
        link
        color
      }
    }
    coming_soon {
      title
      diploma ${diplomaString}
    }
    AboutSection {
      id
      title
      description
      image {
        alternativeText
        url
      }
      state {
        text
        description
        id
      }
    }
    team {
      teams {
        documentId
        name
        photo {
          alternativeText
          url
        }
        title
      }
    }
    faqs {
      title
      questions {
        id
        question
        answer
      }
    }
    diplomas {
      title
      diplomas ${diplomaString}
    }
    blogs {
      blogs ${blogString} 
    }
    register {
      title
      image {
        alternativeText
        url
      }
    }
    tot {
      title_section
      description
      image {
         alternativeText
         url
      }
    }
    logos {
      title_section
      image {
        alternativeText
        url
      }
    }
    rating {
      title
      ratings {
        comment
        job
        full_name
        image {
          alternativeText
          url
        }
      }
    }
  }
}
`;

export const QueryLayout = `
    query Layout {
  website {
    title
    description
    keywords
  }
  navbar {
    links {
      id
      title
      link
    }
    whatsapp
  }
  footer {
    description
    links {
      id
      title
      link
    }
    social_links {
      facebook
      x
      instagram
    }
      contact_links {
      email
      address
      phone
    }
  }
}
`;
export const QueryGetDiplomas = `
  query Diplomas {
    diplomas ${diplomaString}
    diplomasPage {
      hero {
        title
        description
        background {
          alternativeText
          url
        }
      }
    }
  }
`;

export const QueryGetDiploma = `
  query Diplomas($documentId: ID!) {
    diplomas ${diplomaString}
    diploma(documentId: $documentId) ${diplomaString}
}
`;

export const QueryGetBlog = `
  query Blogs($documentId: ID!) {
  blogs ${blogString}
  blog(documentId: $documentId) ${blogString}
}
`;
export const QueryGetBlogs = `
  query Blogs {
    blogs ${blogString}
    blogsPage {
      hero {
        title
        description
        background {
          alternativeText
          url
        }
      }
    }
}
`;

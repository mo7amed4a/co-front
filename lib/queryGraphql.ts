export const QueryHome = ` 
query HomePage {
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
      diplomas {
        documentId
        text
        description
        long_description
        image {
          alternativeText
          url
        }
        images {
          alternativeText
          url
        }
        createdAt
      }
    }
    blogs {
      blogs {
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
    }
  }
}
`

export const QueryLayout = `
query Layout {
  global {
    siteName
    siteDescription
    favicon {
      url
      alternativeText
      caption
    }
    defaultSeo {
      metaKeywords
      shareImage {
        url
        alternativeText
        caption
      }
    }
  }
  sidebar {
    image {
      url
      alternativeText
      caption
    }
    title
    description
    links {
      id
      icon
      text
      url
    }
    social {
      id
      icon
      text
      url
    }
  }
}
`


export const QueryGetProject = `
  query Project($documentId: ID!) {
  project(documentId: $documentId) {
    title
    short_description
    image {
      documentId
      url
      alternativeText
    }
    album {
      documentId
      url
      alternativeText
    }
    link
    video {
      url
      alternativeText
    }
    description
    services {
      documentId
      title
    }
    tools {
      documentId
      title
    }
  }
}
`

export const QueryGetDiplomas = `
  query Diplomas {
  diplomas {
    documentId
    text
    description
    long_description
    image {
      alternativeText
      url
    }
    images {
      alternativeText
      url
    }
    createdAt
  }

}
`

export const QueryGetDiploma = `
  query Diplomas($documentId: ID!) {
  diplomas {
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
    createdAt
  }
     diploma(documentId: $documentId) {
 documentId
    text
    description
    long_description
    image {
      alternativeText
      url
    }
    images {
      alternativeText
      url
    }
    createdAt
}
}
`

export const QueryGetBlog = `
  query Blogs($documentId: ID!) {
  blogs {
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
  blog(documentId: $documentId) {
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
}
`
export const QueryGetBlogs = `
  query Blogs {
  blogs {
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
}
`
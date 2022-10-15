
const config = {
    siteMetadata: {
        fileName: 'Yearbook Draft'
    }
}

if (process.env.NODE_ENV === 'development') {
    config.siteMetadata.domain = 'localhost:3000'
}

export default config

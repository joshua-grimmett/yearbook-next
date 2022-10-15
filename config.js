
const config = {
    siteMetadata: {
        fileName: 'Yearbook Draft',
        footerText: '<b>Yearbook 2022</b> | Coomera Rivers State School | <b>Be Safe. Be Respectful Be a Learner</b>'
    }
}

if (process.env.NODE_ENV === 'development') {
    config.siteMetadata.domain = 'localhost:3000'
}

export default config

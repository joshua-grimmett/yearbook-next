
const config = {
    siteMetadata: {
        fileName: 'Yearbook Draft',
        footerText: '<b>Yearbook 2022</b> <span class="sep">|</span> Coomera Rivers State School <span class="sep">|</span> <b>Be Safe. Be Respectful Be a Learner</b>'
    }
}

if (process.env.NODE_ENV === 'development') {
    config.siteMetadata.domain = 'localhost:3000'
}

export default config

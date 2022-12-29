import axios from 'axios'

const url = {
  local: 'https://us-central1-graaab-app-staging.cloudfunctions.net/',
  staging: 'https://us-central1-graaab-app-staging.cloudfunctions.net/',
  'live-test': 'https://us-central1-graaab-app-staging.cloudfunctions.net/',
  live: 'https://us-central1-redideas-79527.cloudfunctions.net/',
}

const instance = axios.create({
  baseURL: url[process.env.APP_ENV],
})

export default instance

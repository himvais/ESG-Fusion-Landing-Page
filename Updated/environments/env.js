window['env'] = {
    production: false,
    urls: {
      apiUrl: '#API_URL#',        
      clientLoginUrl: '#CLIENT_LOGIN_URL#',
      videoUrl: '#VIDEO_URL#',
      powerBIReportUrl: '#POWERBI_REPORT_URL#'
    }
}
localStorage.setItem('env', JSON.stringify(window['env']));
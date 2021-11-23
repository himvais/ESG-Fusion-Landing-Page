window['env'] = {
    production: false,
    urls: {
      apiUrl: 'https://erm-esg-web-api-dev.azurewebsites.net/',        
      clientLoginUrl: 'https://erm.com',
      videoUrl: 'https://eusrgdesg01storage.blob.core.windows.net/microsite-video/erm.mp4',
      powerBIReportUrl: 'https://app.powerbi.com/view?r=eyJrIjoiODExMzBhMzEtN2E1NS00MzNkLWFjYzMtYmI3NGQ1YzdhMGNhIiwidCI6ImI5ZDJlMjMwLWZiNTktNDNhNS1hZDMxLTAxNGI2OGQ3YWZkZiJ9&pageName=ReportSectiona9f71e51080208c83851'
    }
}
localStorage.setItem('env', JSON.stringify(window['env']));
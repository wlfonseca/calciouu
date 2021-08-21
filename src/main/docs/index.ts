import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'IOUU - Challenge (API priceTableCalc)',
    description: 'API documentation made by Wellington Fonseca for the IOUU challenge.',
    version: '1.0.0',
    contact: {
      name: 'Wellington Fonseca',
      email: 'wellington.fonseca@cw2tecnologia.com.br'
    }
  },
  servers: [{
    url: '/api',
    description: 'Main Server'
  }],
  paths,
  schemas,
  components
}


// const app = require('../index')

// const mongoose = require('mongoose')
// const Properties = require('../../server/models/properties')

// //Require the dev-dependencies
// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const should = chai.should()

// chai.use(chaiHttp)
// //Our parent block

// beforeEach(done => {
//     Properties.remove({})
//       .then(() => done())
//   })

// /*
//   * Test the /GET route
//   */
//   describe('/GET properties', () => {
//     it('it should GET all the propertiess', (done) => {
//       chai.request(app)
//           .get('/properties')
//           .end((err, res) => {
//               res.should.have.status(200)
//               res.body.should.be.a('array')
//               res.body.length.should.be.eql(0)
//             done()
//           })
//     })
// })

//   /*
//   * Test the /POST route
//   */

//   describe('/POST properties', () => {
//     it('it should not POST a properties without pages category', (done) => {
//       let properties = {
//           name: 'retina',
//       }
//       chai.request(app)
//           .post('/properties')
//           .send(properties)
//           .end((err, res) => {
//               res.should.have.status(200)
//               res.body.should.be.a('object')
//               res.body.should.have.property('errors')
//               res.body.errors.should.have.property('category')
//               res.body.errors.category.should.have.property('kind').eql('required')
//             done()
//           })
//     })

//     it('it should POST a book ', (done) => {
//         let props = {
//             name: 'display',
//             category: 'phones'
//         }
//         chai.request(app)
//             .post('/properties')
//             .send(props)
//             .end((err, res) => {
//                 res.should.have.status(200)
//                 res.body.should.be.a('object')
//                 res.body.should.have.property('message').eql('properties successfully added!')
//                 res.body.doc.should.have.property('name')
//                 res.body.doc.should.have.property('category')
                
//               done()
//             })
//       })

// })

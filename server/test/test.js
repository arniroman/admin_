const request = require('supertest')
const app = require('../index').app


it('i can use rest api',(done)=>{
    request(app)
        .get('/')
        .expect(200)
})











// const routerUnderTest = require('../routs/api')

// const express = require('express')

// describe('I can use the REST api', () => {
//   it('displays text for the landing page', (done) => {
//     httptest(app)
//       .get('/')
//       .end((err, res) => {
//         try {
//           expect(err).toBeNull()
//           expect(res.status).toEqual(200)
//           expect(res.text).toEqual('You have reached the SPDZ Rest interface. See ....')
//           done()
//         } catch (err) {
//           done.fail(err)
//         }
//       })
//   })
// })

const app = require('../index')

const mongoose = require('mongoose')
const Products = require('../../server/models/product')

//Require the dev-dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)
//Our parent block
beforeEach(done => {
    done()
    // Products.remove({})
    //   .then(() => done())
  })

describe('/GET vghcvbnndzVzxghmjjxz', () => {
    it('it should ', (done) => {
      chai.request(app)
          .get('/upload')
          .end((err, res) => {
              res.should.have.status(200)
              let products = res.body
              //  let foo = products.split('\r\n') 
                //console.log(foo.lenght)

            done()
          })
    })
})



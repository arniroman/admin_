
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
    Products.remove({})
      .then(() => done())
  })

/*
  * Test the /GET route
  */
  describe('/GET products', () => {
    it('it should GET all the products with pagination object', (done) => {
      chai.request(app)
          .get('/product/:id')
          .end((err, res) => {
              res.should.have.status(200)
              res.body.should.be.a('object')
              Object.keys(res.body).length.should.be.eql(3)
            done()
          })
    })
})

  /*
  * Test the /POST route
  */

 describe('/POST products', () => {
    it('it should not POST a products without pages images', (done) => {
      let product = {
        name          : 'dsds',
        descr         : 'czx',
        originalPrice : 1,
        price         : 2,
        weight        : 3,
        active        : true,
        available     : false,
        category      : 'tv',
        tags          : ['hi'],
        props         : { key:'value'}
      }
      chai.request(app)
          .post('/product')
          .send(product)
          .end((err, res) => {
              res.body.should.be.a('object')
              res.body.should.have.property('errors')
              res.body.errors.should.have.property('images')
              res.body.errors.images.should.have.property('kind').eql('required')
            done()
          })
    })
     it('it should POST a product ', (done) => {
         let product = {
          name          : 'new name',
          descr         : 'add new product',
          originalPrice : 1,
          price         : 2,
          weight        : 3,
          active        : true,
          available     : false,
          category      : 'tv',
          tags          : ['hi'],
          props         : { 'key':'value'},
          images        : 'some.png'
        }
        chai.request(app)
            .post('/product')
            .send(product)
            .end((err, res) => {
                res.should.have.status(200)
              
                res.body.should.be.a('object')
                res.body.should.have.property('message').eql('product successfully added!')
                res.body.doc.should.have.property('name')
                res.body.doc.should.have.property('descr')
                res.body.doc.should.have.property('originalPrice')
                res.body.doc.should.have.property('price')
                res.body.doc.should.have.property('weight')
                res.body.doc.should.have.property('active')
                res.body.doc.should.have.property('available')
                res.body.doc.should.have.property('category')
                res.body.doc.should.have.property('tags')
                res.body.doc.should.have.property('props')
                res.body.doc.should.have.property('images')
              done()
            })
     })

 /*
  * Test the /PUT/:id route
  */

     describe('/PUT/:id product', () => {
      it('it should UPDATE a product given the id', (done) => {
        let product = new Products({
            name          : 'updated',
            descr         : 'test product',
            originalPrice : 1,
            price         : 2,
            weight        : 3,
            active        : true,
            available     : false,
            category      : 'sdf',
            tags          : ['hi'],
            props         : { 'key':'value'},
            images        : 'some.png',
          
        })
        product.save((err, product) => {
                chai.request(app)
                .put('/product/' + product.id)
                .send(product)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('product updated!')
                    res.body.doc.should.have.property('name').eql('updated')
                  done()
                })
          })
        })
      })

  /*
  * Test the /DELETE/:id route
  */
 /* describe('/DELETE/:id product', () => {
    it('it should DELETE a product given the id', (done) => {
      let product = new Products(
          {
            name          : 'deleted',
            descr         : 'test product',
            originalPrice : 1,
            price         : 2,
            weight        : 3,
            active        : true,
            available     : false,
            category      : 'tv',
            tags          : ['hi'],
            props         : { 'key':'value'},
            images        : 'some.png',
          
        }
      )
      product.save((err, product) => {
              chai.request(app)
              .delete('/product/' + product.id)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                done()
              })
        })
    })
})*/

})

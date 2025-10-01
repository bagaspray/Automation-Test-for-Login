/// <reference types="cypress" />

describe('API Testing', () => {
    
    let apiKey
    beforeEach(() => {
    apiKey = 'reqres-free-v1'
    })

    it('TC001 - GET Users List API', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users?page=2', 
            headers: {'X-API-Key': apiKey}
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
            expect(response.body).to.have.property('page')
            expect(response.body).to.have.property('per_page')
            expect(response.body).to.have.property('total')
            expect(response.body).to.have.property('total_pages')
            expect(response.body).to.have.property('data')
        })
    })    

    it('TC002 - GET Single User (User 2)', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/2', 
            headers: {'X-API-Key': apiKey}
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
            expect(response.body.data.id).to.be.a('number')
            expect(response.body.data.email).to.be.a('string')
            expect(response.body.data.first_name).to.be.a('string')
            expect(response.body.data.last_name).to.be.a('string')
            expect(response.body.data.avatar).to.be.a('string')
        })
    })  

    it('TC003 - GET Single User (User 23)', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/23', 
            headers: {'X-API-Key': apiKey},
            failOnStatusCode: false 
        })
        .then((response) => {
            expect(response.status).to.eq(404)
        })
    })  

    it('TC004 - GET List Resource', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/unknown', 
            headers: {'X-API-Key': apiKey},
            failOnStatusCode: false 
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
            expect(response.body).to.have.property('page')
            expect(response.body).to.have.property('per_page')
            expect(response.body).to.have.property('total')
            expect(response.body).to.have.property('total_pages')
            expect(response.body).to.have.property('data')
        })
    })  

    it('TC005 - GET Single Resource', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/unknown/2', 
            headers: {'X-API-Key': apiKey}
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
            expect(response.body.data.id).to.be.a('number')
            expect(response.body.data.name).to.be.a('string')
            expect(response.body.data.year).to.be.a('number')
        })
    })  

    it('TC006 - POST Create User', () => {
        cy.request({
            method: 'POST', 
            url: 'https://reqres.in/api/users', 
            headers: {'X-API-Key': apiKey},
            body: {
                  name: 'bagas yana prayoga',
                  job: 'quality assurance'
                }
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('name')
            expect(response.body).to.have.property('job')
        })
    })  

    it('TC007 - PUT Update User', () => {
        cy.request({
            method: 'PUT', 
            url: 'https://reqres.in/api/users/2', 
            headers: {'X-API-Key': apiKey},
            body: {
                  name: 'bagas yana prayoga',
                  job: 'quality assurance'
                }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eql('bagas yana prayoga')
            expect(response.body.job).to.eql('quality assurance')
        })
    })  

    it('TC008 - PATCH Update User (job)', () => {
        cy.request({
            method: 'PATCH', 
            url: 'https://reqres.in/api/users/2', 
            headers: {'X-API-Key': apiKey},
            body: {
                  job: 'ui/ux designer'
                }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.job).to.eql('ui/ux designer')
        })
    })  

    it('TC009 - DELETE User', () => {
        cy.request({
            method: 'DELETE', 
            url: 'https://reqres.in/api/users/2', 
            headers: {'X-API-Key': apiKey}
        })
        .then((response) => {
            expect(response.status).to.eq(204)
            expect(response.duration).to.be.lessThan(500)
            expect(response.body).to.be.empty
        })
    })  

    it('TC010 - GET Delayed Response', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users?delay=3', 
            headers: {'X-API-Key': apiKey}
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })  
})
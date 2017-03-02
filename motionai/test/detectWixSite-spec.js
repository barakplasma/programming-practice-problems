//Test detectWixSite.js to make sure changes don't break it
const chai = require('chai')
, chaihttp = require('chai-http');
const should = chai.should();

const querystring = require('querystring')

const motionAiEndpoint = 'https://api.motion.ai/1.0/messageBot'

const chatBotQueryParams = {
    bot: 36231,
    msg: '',
    session: Date.now(),
    key: 'fd2e96e0e6f74353a8903226d6059102',//generated a new API key, which I won't commit in the future.
    from: ''
}

var currQuery = chatBotQueryParams;

function Query(msg) {
    this.currQuery = chatBotQueryParams;
    this.currQuery.msg = msg;
    this.currQuery.session = Date.now();
    this.send = ()=>{chai.request(motionAiEndpoint + '?' + querystring.stringify(this.currQuery))};
}

chai.use(chaihttp)

describe('loads', () => {
    it('should return a 200 response to our GET request', (done) => {
        // WRITE A CONSTRUCTOR FOR QUERIES SO I DONT HAVE TO KEEP TRACK OF SESSIONS BETWEEN TESTS
        //var session = Date.now()
        //Query('hi',session)
        var q = new Query()
        done()
    })
})
describe('URL parser', () => {
    it('should not allow a bad input',(done)=>{
        var q = new Query('hi',Date.now())
        q.
        done()
    })
    it('should return a properly formatted URL from a normal URL')
})
describe.skip('detect HTTPS Wix site', () => {
    it('should detect NS connected testthiswix.com')
    it('should detect Free Site michaelsalaverry.wix.com/sandbox')
    it('should detect Pointed Domain')
})

describe.skip('detect HTTP Wix site', () => {
    it('should detect NS connected RU site')
    it('should detect Free Site michaelsalaverry.wix.com/loadingtime')
    it('should detect Pointed Domain')
})

describe.skip('report not a Wix site', () => {
    it('should fail on a non-wix site google.com')
    it('should fail when DNS correct but premium not paid for')
    it('should fail when A record wrong queendina.com')
    it('should fail when CName wrong but A record correct')
})
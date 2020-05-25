const functions = require('firebase-functions')
const stripe = require('stripe')('sk_test_TG4gbGOo2Dmofero01wHS82c00xyXn4wtl')

exports.payWithStripe = functions.https.onRequest((request, response) => {
  stripe.charges
    .create({
      amount: request.body.amount,
      currency: request.body.currency,
      source: request.body.token,
    })
    // eslint-disable-next-line promise/always-return
    .then((charge) => {
      response.send(charge)
    })
    .catch((error) => {
      console.log(error)
    })
})

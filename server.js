// // my secrete key
// // sk_test_51M0p2TJjFKHFVjIvKPO2F6SshQSXKh0tCS17ItLbSKHboKy9Kj1CqO0gjMMu6A6ZndXuTO4DULjbKn14bVFzgWLI008aahiGoQ


// // These below will be added insted of id's in my store items
// // jam : price_1M0pCwJjFKHFVjIvKVRB3xzH

// // pin: price_1M0pGZJjFKHFVjIv9mwLonjd

// // flag: price_1M0pHCJjFKHFVjIvPcUevcQh

// const express = require('express');
// const cors = require('cors');
// const stripe = require('stripe')('sk_test_51M0p2TJjFKHFVjIvKPO2F6SshQSXKh0tCS17ItLbSKHboKy9Kj1CqO0gjMMu6A6ZndXuTO4DULjbKn14bVFzgWLI008aahiGoQ');

// // create express server
// const app = express();
// app.use(cors());
// app.use(express.static("public")); //recomended by stripe docs
// app.use(express.json());

// app.post("/checkout", async (req, res) => {
//     console.log(req.body);
//     const items = req.body.items;
//     let lineItems = [] //stripe call items as lineitems for API call
//     items.forEach((item)=> {
//         lineItems.push(
//             { //format that required by stripe
//                 price: item.id,
//                 quantity: item.quantity
//             }
//         )
//     });
// // initialize stripe sessio; stripe call requires await
//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: "http://localhost:3000/success", //if checkout is succsesful point to this url
//         cancel_url: "http://localhost:3000/cancel"
//     });

//     //sending object to front-end;this allows us to show user the session that stripe created for them
//     res.send(JSON.stringify({
//         url: session.url
//     }));
// });

// app.listen(3003, () => console.log("Server is listening on 3003!🎧🎧🎧"));
//sk_test_51M0p2TJjFKHFVjIvKPO2F6SshQSXKh0tCS17ItLbSKHboKy9Kj1CqO0gjMMu6A6ZndXuTO4DULjbKn14bVFzgWLI008aahiGoQ

// jam : price_1M0pCwJjFKHFVjIvKVRB3xzH

// pin: price_1M0pGZJjFKHFVjIv9mwLonjd

// flag: price_1M0pHCJjFKHFVjIvPcUevcQh

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51M0p2TJjFKHFVjIvKPO2F6SshQSXKh0tCS17ItLbSKHboKy9Kj1CqO0gjMMu6A6ZndXuTO4DULjbKn14bVFzgWLI008aahiGoQ');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
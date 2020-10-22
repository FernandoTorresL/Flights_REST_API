# Flights-API

## Build a REST API with Node.js

I will try to build a REST API using Node.js with the help of this awesome tutorial series [Let's Build a Node.js REST API](https://hashnode.com/series/lets-build-a-nodejs-rest-api-ckcov1aob00dcfms19o5g2x42) made by [Victoria Lo](https://lo-victoria.com/)

### Planning our Flights-API

I will be making a simple API for some example data flight that we got from another scraping project (WIP).

To plan this API, like Victoria taught us, we must first understand what we want it to do, so we write down some **user stories** to help us understand what he need it:

1. I can create a data flight object and add it to the database
2. I can get all the data flight from the database
3. I can delete all the data flight in the database
4. I can get a single data flight (with stopovers) by querying by departure, arrival and date
5. I can delete a single data flight from the database

#### Our Data Flight

These is, so far, an example of data flight:

![Data Flight JSON example](https://i.imgur.com/21KX89i.png)

```json
{
  departure: "EZE",
  departure_time: "18:35",
  arrival: "MAD",
  arrival_time: "13:10",
  flight_duration: 875,
  flight_url: "a flight website url",
  stopovers: [
    {
    stopover_departure: "EZE",
    stopover_departure_time: "18:35",
    stopover_arrival: "GRU",
    stopover_arrival_time: "21:20",
    stopover_flight_duration: 165,
    stopover_flight_number: "LA8011",
    stopover_flight_airplane_model: "Airbus 320-200",
    stopover_airline_image: "an image file url",
    stopover_duration: 95,
    },
    {
    stopover_departure: "GRU",
    stopover_departure_time: "22:55",
    stopover_arrival: "MAD",
    stopover_arrival_time: "13:10+1",
    stopover_flight_duration: 615,
    stopover_flight_number: "LA8064",
    stopover_flight_airplane_model: "Boeing 777-300",
    stopover_airline_image: "an image file url",
    stopover_duration: 0,
    },
  ],
  prices: [
    {
    category: "LIGHT",
    currency: "US$",
    price: 551
    },
    {
    category: "PLUS",
    currency: "US$",
    price: 624
    },
    {
    category: "TOP",
    currency: "US$",
    price: 707
    },
  ]
}
```
Created with [jsonviewer.stack.hu](http://jsonviewer.stack.hu/)

## Designing Structure

Routes  HTTP Methods  Description
| Routes   | HTTP Methods | Description               |
|----------|:-------------|:--------------------------|
| /flights | GET    | Display all flights on database |
| /flight?q={"id": "1"} | GET | Displays a specific flight, given and id |
| /flights?q={"dep": "MEX", "arr": "CUN", "date":"2020-09-01"} | GET | Displays all flights that match with the given departure, arrival and a date    |
| /flight  | POST   | Creates a new flight            |
| /flight?q={"id": "1"} | DELETE | Deletes a specific flight, given an id |
| /flights | DELETE | Deletes all flights             |

---

### How to view this project at this point

#### Clone this repo

```cmd
git clone https://github.com/FernandoTorresL/Flights_REST_API.git
```

#### Install

```cmd
npm install
```

#### Test

Now, open a new terminal, in the same folder, and test it with

```cmd
node server.js
```
If it works, you should see in the console the output message telling you that the server is listening

---


## Follow me

### [fertorresmx.dev](https://www.fertorresmx.dev/)

#### :globe_with_meridians: Twitter, Instagram: [@fertorresmx](http://www.twitter/fertorresmx)

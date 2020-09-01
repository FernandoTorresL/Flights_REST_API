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

![Data Flight JSON example](https://i.imgur.com/IM8sbX2.png)

```json
{'flight_schedules': 
  {'departure': 'EZE',
   'departure_time': '18:35',
   'arrival': 'MAD',
   'arrival_time': '13:10',
   'flight_duration': '14H35M',
   'currency': 'US$',
   'price': '551'},
  'stopovers': [
    {'departure': 'EZE',
    'departure_time': '18:35',
    'flight_duration': '2:45',
    'arrival': 'GRU',
    'arrival_time': '21:20',
    'flight_number': 'LA8011',
    'flight_airplane_model': 'Airbus 320-200',
    'stopover_duration': '1:35'},
    {'departure': 'GRU',
    'departure_time': '22:55',
    'flight_duration': '10:15',
    'arrival': 'MAD',
    'arrival_time': '13:10+1',
    'flight_number': 'LA8064',
    'flight_airplane_model': 'Boeing 777-300',
    'stopover_duration': []}],
   'prices': [
     {'LIGHT': {'moneda': 'US$', 'valor': '551'}},
     {'PLUS': {'moneda': 'US$', 'valor': '624'}},
     {'TOP': {'moneda': 'US$', 'valor': '707'}}]
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

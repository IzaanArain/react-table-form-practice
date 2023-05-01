export const user = {
  id: 0,
  fname: "",
  lname: "",
  email: "",
  contact: "",
  address: {
    country: "",
    city: "",
    FullAddress: function (country, city) {
      country = this.country;
      city = this.city;
      return `${country},${city}`;
    },
  },
  fullName: function (fname, lname) {
    fname = this.fname;
    lname = this.lname;
    return `${fname} ${lname}`;
  },
};

const people = [
  {
    id: 1,
    fname: "Izaan",
    lname: "Arain",
    email: "izaan@yahoo.com",
    contact: "023343254",
    address: {
      country: "Pakistan",
      city: "Karachi",
      FullAddress: function (country, city) {
        country = this.country;
        city = this.city;
        return `${country},${city}`;
      },
    },
    fullName: function (fname, lname) {
      fname = this.fname;
      lname = this.lname;
      return `${fname} ${lname}`;
    },
  },
  {
    id: 2,
    fname: "John",
    lname: "Doe",
    email: "Doe@gmail.com",
    contact: "4123423",
    address: {
      country: "Canada",
      city: "Vancover",
      FullAddress: function (country, city) {
        country = this.country;
        city = this.city;
        return `${country},${city}`;
      },
    },
    fullName: function (fname, lname) {
      fname = this.fname;
      lname = this.lname;
      return `${fname} ${lname}`;
    },
  },
  {
    id: 3,
    fname: "Ali",
    lname: "Ahemd",
    email: "Ali@hotmail.com",
    contact: "77856756",
    address: {
      country: "Pakistan",
      city: "Lahore",
      FullAddress: function (country, city) {
        country = this.country;
        city = this.city;
        return `${country},${city}`;
      },
    },
    fullName: function (fname, lname) {
      fname = this.fname;
      lname = this.lname;
      return `${fname} ${lname}`;
    },
  },
  {
    id: 4,
    fname: "Jane",
    lname: "Willson",
    email: "jane28@gmail.com",
    contact: "023343254",
    address: {
      country: "USA",
      city: "New York",
      FullAddress: function (country, city) {
        country = this.country;
        city = this.city;
        return `${country},${city}`;
      },
    },
    fullName: function (fname, lname) {
      fname = this.fname;
      lname = this.lname;
      return `${fname} ${lname}`;
    },
  },
  {
    id: 5,
    fname: "Salaman",
    lname: "Khan",
    email: "Khan98@yahoo.com",
    contact: "0456434654",
    address: {
      country: "India",
      city: "Mumbai",
      FullAddress: function (country, city) {
        country = this.country;
        city = this.city;
        return `${country},${city}`;
      },
    },
    fullName: function (fname, lname) {
      fname = this.fname;
      lname = this.lname;
      return `${fname} ${lname}`;
    },
  },
  {
    id: 6,
    fname: "Vlad",
    lname: "Ivenkov",
    email: "Vlad@hotmail.com",
    contact: "9923123231",
    address: {
      country: "Russia",
      city: "Moscow",
      FullAddress: function (country, city) {
        country = this.country;
        city = this.city;
        return `${country},${city}`;
      },
    },
    fullName: function (fname, lname) {
      fname = this.fname;
      lname = this.lname;
      return `${fname} ${lname}`;
    },
  },
];

export default people;

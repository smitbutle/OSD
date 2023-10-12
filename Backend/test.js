const axios = require('axios');

const data = {
  name: "asdas",
  email: "smit.butle@walchandsangli.ac.in",
  phone: "1234567891",
  college: "asdasd",
  yearOfStudy: "Second Year",
  isDualBooted: "true",
  referralCode: "asdasd",
};

axios.post('http://localhost:5001/api/reg', data)
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

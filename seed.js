const  mongoose = require("mongoose");
const dotenv = require("dotenv");
const Destination = require("./model/destinationModel");
const Package = require("./model/packageModel");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const dataInsert = async() =>{

  try{

  await Destination.deleteMany()
  await Package.deleteMany()

  const destinations = [
      {
        name: 'Jammu & Kashmir',
        image: 'https://i.pinimg.com/736x/c4/14/52/c41452695be0b6fbf0194e91c5d8274f.jpg',
        startingFrom: 4999,
      },
      {
        name: 'HIMACHAL PRADESH',
        image: 'https://i.pinimg.com/736x/d8/4e/e5/d84ee5c443a65009088b66e3d78c5371.jpg',
        startingFrom: 4999,
      },
      {
         name: 'GOA',
        image: 'https://i.pinimg.com/736x/55/e1/88/55e1888b438e06b26ef0f390e6a1c72f.jpg',
        startingFrom: 4999,
      },
      {
        name: 'ASSAM',
        image: 'https://i.pinimg.com/736x/0f/f1/e6/0ff1e612085c4f35069e7300f513365b.jpg',
        startingFrom: 4999,
      },
      {
        name: 'MAHARASHTRA',
        image: 'https://i.pinimg.com/736x/76/01/ea/7601ea9a6fd6b04cda5f3d446862fbc0.jpg',
        startingFrom: 4999,
      },
      {
        name: 'KERALA',
        image: 'https://i.pinimg.com/736x/51/24/4c/51244cb157113f48a0ac86a63c0c9e19.jpg',
        startingFrom: 4999,
      },

      
    ]


    const tours = [
      {
        name: 'GOLDEN TEMPLE TOUR',
        image: 'https://i.pinimg.com/736x/10/d9/5e/10d95e70a285a05104108cd6a6e4eb5d.jpg',
      },
      {
        name: 'AMAZING KERALA TOUR',
        image: 'https://i.pinimg.com/736x/c7/50/e4/c750e43c5327a3c1cddc6ad49b6c03d5.jpg',
      },
      {
        name:'KASHMIR HOLIDAY TOUR',
        image:'https://i.pinimg.com/736x/b1/02/81/b10281469917a66a3ff29165b12c91d4.jpg',

      },
      {
        name:'RAJASTHAN TOUR',
        image:'https://i.pinimg.com/736x/aa/5d/92/aa5d9273ec5f92954c510d75f4f1b19f.jpg'
      },
      {
        name:'TRIP TO GOA',
        image:'https://i.pinimg.com/736x/55/e1/88/55e1888b438e06b26ef0f390e6a1c72f.jpg'
      },
      {
        name:'NAINITAL TOUR',
        image:'https://i.pinimg.com/736x/b8/a6/78/b8a6786820aeb7b421797ce3e45ce4b5.jpg'
      }
    ];

    
    await Destination.insertMany(destinations);
    await Package.insertMany(tours);
    console.log('Mock data inserted!');
    process.exit();
  
  }catch (error) {
    console.error('Error inserting mock data:', error);
    process.exit(1);
  }
} 

dataInsert();
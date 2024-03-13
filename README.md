<!-- PROJECT SHIELDS -->
<!--

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/394-w24/obd-app">
    <img src=readme-images/LoginLogo.png alt=LoginLogo width="150" height="80"/>
  </a>

  <h3 align="center">RepairMate</h3>

  <p align="center">
    RepairMate helps car owners diagnose and repair car problems!
    <br />
    <a href="https://github.com/394-w24/obd-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="repairmate-dev-c33ee.web.app/">View Demo</a>
  </p>
</div>

## About The Project
<!-- screenshot -->

![product-screenshot]

RepairMate allows users to diagnose repairs their car needs. Once a car owner sees a repair light come on, they can use RepairMate in tandem with an On-Board Diagnostics (OBD) device to get more information about their repair. In the product screenshot above, the user would input their car's VIN number, mileage, and the DTC code given by the OBD device they used on their car. From there, RepairMate tells the user what the most likely problem is and gives possible next steps. 

After diagnosing a repair, RepairMate aims to give its users: 
* The location of the necessary repair in the car 
* A step-by-step repair guide to aid the car owners should they choose to repair the problem themselves 
* A video which also walks through how to complete the repair 
* A marketplace to buy the parts needed in the repair (Not yet completed, part of the roadmap)
* A way to request quotes from local mechanics for the given repair (Not completely done, but the concept is mocked in RepairMate's current version)

## Built With

* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/394-w24/obd-app
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up your firebase  and enter your firebase config in `firebase.js`
   ```js
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.appspot.com",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
        };
   ```

### Firebase Initialization
In addition to add the config information `firebase.js`, you'll also need to start with some data in your firebase Realtime Database and Storage 

#### Realtime Database 
After setting up your Firebase project, you should create a Realtime Database to hook up to the project and import the starter data. 
1. Create Realtime Database
2. Create `Mechanics` endpoint 
2. Under the `Mechanics` endpoint, import the `firebase-realtime-starter.json` to the database. The file is available in the repo. 

Your structure should look something like the photo below
![firebase-realtime]

#### Firebase Storage 
After creating a Firebase Storage instance, you should upload all of the files in the `firebase-storage-starter/` folder. You can find the folder in the repo. After uploading the files, your starting storage should look like the image below 
![firebase-storage]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
* The mechanics page calculates the users location from mechanics in the database. Currently, this location is hardcoded as Northwestern University's Technological Institude longitude and latitude in `MechanicCard.jsx`. This should be changed to reflect the desired location or the user's current location 
* Currently, the app only supports the p0150 DTC code as input. All information that populates in the repair guide is specific to this code. To expand usage, multiple DTC codes should be transferred to a firebase Realtime Database and data should be read from there. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add user profile page 
    - [ ] User can see history of repair guide they have accessed 
    - [ ] User can store different cars under their profile 
- [ ] Have realtime database with more local mechanics 
- [ ] Add a real mechanism for contacting mechanics for a wuote when "Request Quote" button on <MechanicPage /> is clicked
- [ ] Incorporate a car parts market place in the greyed out "Buy Parts" button on the <RepairOptionsPage />
    - [ ] User can see necessary car parts for the repair from multiple stores and compare prices 
- [ ] Add "Maintenance" sections of RepairMate under greyed out "Maintenance" button on the <NavPage />
    - This is very similar to the Repair user flow, but maintenance issue would be preset like "Change windshield wipers" and then have maintenane options similar to the repair options



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/394-w24/obd-app](https://github.com/394-w24/obd-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[product-screenshot]: readme-images/requestPage.png
[login-logo]: readme-images/LoginLogo.png
[firebase-realtime]: readme-images/firebaseRealtime.png
[firebase-storage]: readme-images/firebaseStorage.png

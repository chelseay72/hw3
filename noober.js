// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  //  Drop off Location

  let dropLocAddress = ride.dropoffLocation.address

  // console.log(dropLocAddress)

  let dropLocCity = ride.dropoffLocation.city

  // console.log(dropLocCity)

  let dropLocState = ride.dropoffLocation.state

  // console.log(dropLocState)

  let dropLocZip = ride.dropoffLocation.zip

  // console.log(dropLocZip)

// Number of Passengers

  let numPass = ride.numberOfPassengers

  // console.log(numPass)

// Passenger Details

  let passDetailsFirstName = ride.passengerDetails.first

  // console.log(passDetailsFirstName)
  
  let passDetailsLastName = ride.passengerDetails.last

  // console.log(passDetailsLastName)
  
  let passDetailsNum = ride.passengerDetails.phoneNumber

 //  console.log(passDetailsNum)

// Pick up location

  let pickupLocAddress = ride.pickupLocation.address

  // console.log(pickupLocAddress)

  let pickupLocCity = ride.pickupLocation.city

  // console.log(pickupLocCity)

  let pickupLocState = ride.pickupLocation.state

  // console.log(pickupLocState)

  let pickupLocZip = ride.pickupLocation.zip

  // console.log(pickupLocZip)

  // Purple requested

  let purpleReq = ride.purpleRequested 

  // console.log(purpleReq)

  // Conditional statement for level of service - use an empty variable to call into the if statement 

  let levelOfService 

    if(purpleReq == true) {
      levelOfService = `Noober Purple`
    } else if(numPass > 3) {
      levelOfService = `Noober XL`
    } else {
      levelOfService = `Noober X`
    }

    // console.log(levelOfService)

  // Final Output

  console.log(`${levelOfService} Passenger: ${passDetailsFirstName} ${passDetailsLastName} - ${passDetailsNum}. Pickup at ${pickupLocAddress}, ${pickupLocCity}, ${pickupLocState} ${pickupLocZip}. Drop-off at ${dropLocAddress}, ${dropLocCity}, ${dropLocState} ${dropLocZip}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})

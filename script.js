// Get button, spinner, and user
const button = document.getElementById('generate');
const spinner = document.querySelector('.spinner');
const user = document.querySelector('#user');

// Function that retrieves data from API and updates the page

function generateUser(){
    showSpinner();
    fetch('https://randomuser.me/api/')
    .then((resp) => {
      if(!resp.ok){
        throw new Error('Something went wrong!');
      }
      return resp.json();})
    .then((data) => {
        const userData = data.results[0];
        displayUser(userData);
        hideSpinner();
    }).catch(error => {
      console.log(error);
    });
}

function displayUser(userData){
    // Check for gender and change background color accordingly
    if(userData.gender === 'male'){
        document.body.style.backgroundColor = 'steelblue';
    }else{
        document.body.style.backgroundColor = 'purple';
    }

    user.innerHTML = `<div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${userData.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${userData.name.first} ${userData.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${userData.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${userData.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${userData.location.city} ${userData.location.state}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${userData.dob.age}</p>
      </div>
    </div>
  </div>`;
}


// Function to show and hide spinner when loading

function showSpinner(){
    spinner.style.display = 'block';
}

function hideSpinner(){
    spinner.style.display = 'none';
}


// Event listener to button
button.addEventListener('click', generateUser);
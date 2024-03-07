<template>
  <div class="shape shape-style-1 bg-gradient-default">
    <!-- First Page -->
    <!-- Progress Bar -->


    <div class="container-flex">
      <div class="card">
        <base-progress type="success" :value="progressValue" label="Registeration process"></base-progress>
        <div v-if="currentPage === 1">
          <div class="row">
            <div class="col-md-6">
              <label>First Name <small class="text-muted">Required</small></label>
              <base-input alternative placeholder="First Name" v-model="formData.firstName" required></base-input>
            </div>
            
            <div class="col-md-6">
              <label>Last Name <small class="text-muted">Required</small></label>
              <base-input alternative placeholder="Last Name" v-model="formData.lastName" required></base-input>
            </div>
            <div class="col-md-6">
              <label>email <small class="text-muted">Required</small></label>
              <base-input alternative placeholder="someone@example.com" v-model="formData.email" required></base-input>
            </div>
            <div class="col-md-6">
              <label>Do you have a nickname? <small class="text-muted">Optional</small></label>
              <base-input alternative placeholder="A name you like to be called with?" v-model="formData.email"></base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Country of Birth <small class="text-muted">Optional</small></label>
              <div>
                <multiselect v-model="formData.countryOfBirth"  :options="countries">
                </multiselect>
              </div>

            </div>
            <div class="col-md-6">
              <label>Nationality <small class="text-muted">Optional</small> </label>
              <div>
                <multiselect v-model="formData.nationality" :options="countries">
                </multiselect>
              </div>

            </div>
          </div>
          <br>

          <div class="row">
            <div class="col-md-6">
              <label>Date of Birth <small class="text-muted">Optional</small></label>
              <base-input alternative type="date" placeholder="Date of Birth"
                v-model="formData.dateOfBirth"></base-input>
            </div>
            <br>
            <br>
            <div class="col-md-6">
              <label>Password <small class="text-muted">Required</small> </label>
              <base-input alternative type="password" placeholder="Password" v-model="formData.password"></base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Confirm Password <small class="text-muted">Required</small> </label>
              <base-input alternative type="password" placeholder="Retype Password"
                v-model="formData.retypePassword"></base-input>
            </div>
            <div class="col-md-6">
              <label>Gender <small class="text-muted">Required</small> </label>
              <div>
                <multiselect v-model="formData.gender" :options="genders">
                </multiselect>
              </div>
            </div>
          </div>


          <div class="text-center mt-4">
            <button class="btn btn-success" @click="goToPage(2)">Next</button>
          </div>
        </div>

        <!-- Second Page -->
        <div v-if="currentPage === 2">

          <h4>Personality Traits </h4>
          <br>
          <h5>All questions are required so we can assist you in finding the best care provider.</h5>
          <br>
          <h6>Please take your time!</h6>
          <br>
          <div v-for="(question, index) in personalityQuestions" :key="index" class="slider-container">
  <label>{{ question }} <small class="text-muted">Rate from 1 to 100</small></label>
  <div class="slider-with-value">
    <input type="range" min="1" max="100" v-model="formData.personalityScores[index]" class="custom-range">
    <span class="slider-value">{{ formData.personalityScores[index] }}</span>
  </div>
</div>

          <div class="text-center mt-4">
            <button class="btn btn-danger" @click="goToPage(1)">Back</button>
            <button class="btn btn-success" @click="goToPage(3)">Next</button>
          </div>
        </div>

        <!-- Third Page -->
        <div v-if="currentPage === 3">
          <form>
            <label>Biography, <large class="text-muted">Tell us more about yourself</large></label>
            <textarea class="form-control form-control-alternative" rows="3" placeholder="Tell us more about you ..."
              v-model="formData.biography"></textarea>
          </form>
          <br>
          <br>
          <label>You look amazing, add a picture if you want! <large class="text-muted"></large></label>

          <div class="pic">    
    <picture-input 
      v-model="formData.picture"
      ref="formData.picture"
      width="500" 
      height="500" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Upload a Picture 😺'
      }"

      @change="onChange">
    </picture-input>
  </div>
          <br>
          <div class="text-center mt-4">
            <button class="btn btn-danger" @click="goToPage(2)">Back</button>
            <button class="btn btn-success" @click="submitForm">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

const { countryList } = require('./static-data/countries.js');


import Multiselect from 'vue-multiselect'

import 'vue-multiselect/dist/vue-multiselect.min.css';
export default {
  name: "seniorForm",
  components: {
    Multiselect,
    PictureInput
  },
  data() {
    return {
      currentPage: 1,
      countries: [],
      genders: ['M', 'F', 'X'],
      formData: {
        email: '',
        firstName: '',
        gender: null,
        lastName: '',
        countryOfBirth: 'Canada',
        nationality: 'Canada',
        dateOfBirth: '',
        password: '',
        retypePassword: '',
        personalityScores: Array(7).fill(0),
        biography: '',
        picture: PictureInput,

      },

      personalityQuestions: [
        "How much do you enjoy trying new activities and visiting new places?",
        "Rate your interest in arts, culture, and new ideas.",
        "How often do you plan and organize your tasks in advance?",
        "How much importance do you place on following rules and guidelines?",
        "Rate your level of enjoyment in social gatherings and being around people.",
        "How comfortable are you with making new friends and initiating conversations?",
        "Rate your level of empathy and understanding towards others' feelings",
        "Rate your tendency to experience negative emotions like sadness, anxiety, and anger.",
        "How do you assess your communication skills, both listening and speaking?",
      ],

    };
  },


  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.progressValue = (pageNumber - 1) * 33.3;
    },
    handleFileUpload(event) {
      this.formData.picture = event.target.files[0];
    },
    submitForm() {
      this.progressValue = 100;
      console.log(this.formData);
      //backend shit
    },
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.formData.picture = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
  
    fetchCountries() {
      console.log('here');
      this.countries = countryList;
      console.log(this.countries)
    },

    applySearchFilter(search, countries) {
      return countries.filter((country) =>
        country.toLowerCase().startsWith(search.toLowerCase())
      )
    }
  },
  mounted() {
    this.fetchCountries(); // Fetch countries when the component is mounted
  },
};
</script>

<style scoped>
.container-flex {
  display: flex;

  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* Make it at least as tall as the viewport */
  padding: 20px;
  /* Add some padding around the card */
  background: url('');
  /* Add your background image URL here */
  background-size: cover;
  /* Cover the entire page */
  background-position: center;
  /* Center the background image */
}

.card {
  background: white;
  /* Use your background color */
  border-radius: 8px;
  /* Rounded corners for the card */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* A subtle shadow */
  border: 2px solid #007bff;
  /* Add a border around the card, choose a color that fits the design */
  max-width: 600px;
  /* Maximum width of the card */
  width: 100%;
  /* Make the card take up to 100% of the container width */
  padding: 20px;
  /* Padding inside the card */
  margin: 20px;
  /* Margin around the card */
}

.slider-with-value {
  display: flex;
  align-items: center;
}

.slider-value {
  margin-left: 10px;
  font-weight: bold;
}


/* Additional styling for form elements */
label {
  font-weight: bold;
  /* Make labels bold */
}

input[type="range"].custom-range {
  width: 100%;
  /* Ensure range inputs take up the full width */
}

button {
  margin: 10px 0;
  /* Add some margin above and below buttons */
}
</style>

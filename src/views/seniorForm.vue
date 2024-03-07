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
              <base-input alternative placeholder="First Name" v-model="formData.firstName"></base-input>
            </div>
            <div class="col-md-6">
              <label>Last Name <small class="text-muted">Required</small></label>
              <base-input alternative placeholder="Last Name" v-model="formData.lastName"></base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Country of Birth </label>
              <base-input alternative placeholder="Country of Birth" v-model="formData.countryOfBirth"
                addon-right-icon="ni ni-zoom-split-in"></base-input>
            </div>
            <div class="col-md-6">
              <label>Nationality </label>
              <base-input alternative placeholder="Nationality" v-model="formData.nationality"
                addon-right-icon="ni ni-zoom-split-in"></base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Date of Birth <small class="text-muted">Optional</small></label>
              <base-input alternative type="date" placeholder="Date of Birth"
                v-model="formData.dateOfBirth"></base-input>
            </div>
            <div class="col-md-6">
              <label>Password </label>
              <base-input alternative type="password" placeholder="Password" v-model="formData.password"></base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label>Confirm Password </label>
              <base-input alternative type="password" placeholder="Retype Password"
                v-model="formData.retypePassword"></base-input>
            </div>
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-success" @click="goToPage(2)">Next</button>
          </div>
        </div>

        <!-- Second Page -->
        <div v-if="currentPage === 2">
          <div v-for="(question, index) in personalityQuestions" :key="index">
            <label>{{ question }} <small class="text-muted">Rate from 1 to 100</small></label>
            <input type="range" min="1" max="100" v-model="formData.personalityScores[index]" class="custom-range">
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

          <div class="col-md-10">
            <base-input type="file" placeholder="choose a picture"></base-input>
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
export default {
  name: "seniorForm",
  data() {
    return {
      currentPage: 1,
      formData: {
        firstName: '',
        lastName: '',
        countryOfBirth: '',
        nationality: '',
        dateOfBirth: '',
        password: '',
        retypePassword: '',
        personalityScores: Array(7).fill(0),
        biography: '',
        picture: null,
      },
      personalityQuestions: [
        "Do you eat dogs?",
        "Can you make bombs?",
        "Do you like to kill people?",
        "Do you like to kill animals?",
        // Add all your questions
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
    }
  }
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

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
                            <base-input alternative placeholder="First Name" v-model="formData.firstName"
                                :error="validField.firstName ? null : ' '" required></base-input>
                        </div>
                        <div class="col-md-6">
                            <label>Last Name <small class="text-muted">Required</small></label>
                            <base-input alternative placeholder="Last Name" v-model="formData.lastName"
                                :error="validField.lastName ? null : ' '" required></base-input>
                        </div>
                        <div class="col-md-6">
                            <label>Email <small class="text-muted">Required</small></label>
                            <base-input alternative placeholder="someone@example.com" v-model="formData.email"
                                :error="validField.email ? null : invalidEmailFormat ? 'Invalid format' : ' '"
                                required></base-input>
                        </div>
                        <div class="col-md-6">
                            <label>Do you have a nickname? <small class="text-muted">Optional</small></label>
                            <base-input alternative placeholder="nickname" v-model="formData.nickname"></base-input>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-md-6">
                            <label>Nationality <small class="text-muted">Optional</small> </label>
                            <div>
                                <multiselect v-model="formData.nationality" :options="countries">
                                </multiselect>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <label>Address <small class="text-muted"> </small></label>
                            <base-input alternative placeholder="address" v-model="formData.address"></base-input>

                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <div class="col-md-6">
                            <label>Date of Birth <small class="text-muted">Required</small></label>
                            <base-input alternative type="date" placeholder="Date of Birth"
                                :error="validField.dateOfBirth ? null : ' '"
                                v-model="formData.dateOfBirth"></base-input>
                        </div>
                        <br>
                        <br>
                        <div class="col-md-6">
                            <label>Password <small class="text-muted">Required</small> </label>
                            <base-input alternative type="password" placeholder="Password"
                                :error="validField.password ? null : retypePasswordRequired ? 'Passwords do not match' : 'Cannot be empty'"
                                v-model="formData.password"></base-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Confirm Password <small class="text-muted">Required</small> </label>
                            <base-input alternative type="password" placeholder="Retype Password"
                                :error="validField.retypePassword ? null : retypePasswordRequired ? 'Passwords do not match' : 'Cannot be empty'"
                                v-model="formData.retypePassword"></base-input>
                        </div>
                        <div class="col-md-6">
                            <label>Gender <small class="text-muted">Required</small> </label>
                            <div :class="{ 'invalid': validField.gender }">
                                <multiselect v-model="formData.gender" :allowEmpty="false" :options="genders">
                                </multiselect>
                                <label class="" v-show="!validField.gender">Must select a gender!</label>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <label>Occupation <small class="text-muted">Required</small> </label>

                            <multiselect v-model="formData.position" :allowEmpty="false" :options="positions">
                            </multiselect>
                            <label class="" v-show="!validField.gender">Must select a position!</label>
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
                        <label>{{ question }} <small class="text-muted">Rate from 1 to 5</small></label>
                        <div class="slider-with-value">
                            <input type="range" min="1" max="5" v-model="formData.personalityScores[index]"
                                class="custom-range">
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
                        <label>Biography and Medical Conditions<br>
                            <span class="text-muted">Tell us more about yourself, this will help us find you the best
                                provider!</span></label>
                        <textarea class="form-control form-control-alternative" rows="3"
                            placeholder="I enjoy watching TV, I am an ongoing person and I am really calm..."
                            v-model="formData.biography"></textarea>
                    </form>
                    <br>
                    <br>
                    <label>Please add a formal picture <h3 class="text-muted"></h3></label>

                    <div class="pic">
                        <picture-input ref="pictureInput" width="300" height="300" margin="16"
                            accept="image/jpeg,image/png" size="10" :removable="true" :customStrings="{
                    upload: '<h1>Bummer!</h1>',
                    drag: 'Select a picture 😺',
                }">
                        </picture-input>
                    </div>

                    <br>
                    <br>
                    <div>
                        <label for="certUpload">Please upload your certifications</label>
                        <input type="file" id="certUpload" name="certUpload" multiple>
                        <div class="text-muted">Supported file types: .pdf, .docx</div>


                    </div>

                    <br>
                    <div class="text-center mt-4">
                        <button class="btn btn-danger" @click="goToPage(2)">Back</button>
                        <button class="btn btn-success" @click="submitForm">Submit</button>
                    </div>
                </div>
                <div v-if="currentPage === 4">
                    <div class="text-center">
                        <i class="ni ni-badge ni-3x"></i>
                        <h1 class="font-bold text-3xl">Thank you for registering! Your information is pending approval</h1>
                        <h5 class="font-bold text-3xl">You'll recieve an email upon approval.</h5>
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
import axios from 'axios';


const url = 'https://sbeve.mooo.com/api/'

const isEmptyOrSpaces = (str) => {
    return str === null || str.match(/^ *$/) !== null;
}

const validatePage = (pageNumber, data) => {
    let hasInvalidFields = false;
    const validatePage1 = () => {
        if (isEmptyOrSpaces(data.formData.firstName)) {
            data.validField.firstName = false;
            hasInvalidFields = true;
        }
        else {
            data.validField.firstName = true;
        }

        if (isEmptyOrSpaces(data.formData.lastName)) {
            data.validField.lastName = false;
            hasInvalidFields = true;
        }
        else {
            data.validField.lastName = true;
        }
        if (isEmptyOrSpaces(data.formData.email)) {
            data.validField.email = false;
            hasInvalidFields = true;
            data.invalidEmailFormat = false;
        }
        else {
            if (String(data.formData.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null) {
                data.validField.email = true;
                data.invalidEmailFormat = false;
            }
            else {
                hasInvalidFields = true;
                data.validField.email = false;
                data.invalidEmailFormat = true;
            }
        }

        if (isEmptyOrSpaces(data.formData.password)) {
            data.validField.password = false;
            hasInvalidFields = true;
            data.retypePasswordRequired = false;
        }
        else {
            data.validField.password = true;
        }

        if (isEmptyOrSpaces(data.formData.retypePassword)) {
            data.validField.retypePassword = false;
            hasInvalidFields = true;
            data.retypePasswordRequired = false;
        }
        else {
            data.validField.retypePassword = true;
        }

        if (isEmptyOrSpaces(data.formData.dateOfBirth)) {
            data.validField.dateOfBirth = false;
            hasInvalidFields = true;
        }
        else {
            data.validField.dateOfBirth = true;
        }

        if (!isEmptyOrSpaces(data.formData.password) && !isEmptyOrSpaces(data.formData.retypePassword)) {
            if (data.formData.password !== data.formData.retypePassword) {
                data.validField.password = false;
                data.validField.retypePassword = false;
                data.retypePasswordRequired = true;
                hasInvalidFields = true;
            }
            else {
                data.validField.password = true;
                data.validField.retypePassword = true;
                data.retypePasswordRequired = false;
            }
        }

        if (isEmptyOrSpaces(data.formData.gender)) {
            data.validField.gender = false;
            hasInvalidFields = true;
        }
        else {
            data.validField.gender = true;
        }
    }

    console.log(pageNumber)
    switch (pageNumber) {
        case 1:
            validatePage1();
            break;
        case 2:
            console.log("here2")
            break;
        case 3:
            console.log("here3")
            break;
        default:
            break;
    }

    return !hasInvalidFields;
}

export default {
    name: "seniorForm",
    components: {
        Multiselect,
        PictureInput,

    },
    data() {
        return {
            currentPage: 1,
            countries: [],
            genders: ['M', 'F', 'X'],
            positions: ['Registred Nurses (RNs)', 'Health Care Aides (HCAs)'],
            progressValue: 0,
            formData: {
                email: '',
                firstName: '',
                gender: 'M',
                lastName: '',
                nickname: '',
                countryOfBirth: '',
                address: ' ',
                dateOfBirth: '',
                password: '',
                position: '',
                personalityScores: Array(9).fill(0),
                biography: '',
                picture: PictureInput,
            },
            
            base64_img: '',
            
            validField: {
                firstName: true,
                lastName: true,
                email: true,
                password: true,
                retypePassword: true,
                dateOfBirth: true,
                gender: true,
            },

            retypePasswordRequired: false,
            invalidEmailFormat: false,

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
            var result = validatePage(this.currentPage, this);
            if (result === true) {
                this.currentPage = pageNumber;
                this.progressValue = (pageNumber - 1) * 33.3;
            }
            else {
                console.log("Validation failed")
            }
        },
        handleFileUpload(event) {
            this.formData.picture = event.target.files[0];
        },
        async submitForm() {
            //backend shit
            this.base64_img = this.$refs.pictureInput.image;
            this.formData.personalityScores = this.formData.personalityScores.map(element => parseInt(element));
            await this.fetchApi();
        },

        async fetchApi() {
            const registerLink = url + 'register/';
            const currentDate = new Date();
            var dateOfBirth = new Date(this.formData.dateOfBirth)
            var data = {
                username: this.formData.email,
                first_name: this.formData.firstName,
                last_name: this.formData.lastName,
                nickname: this.formData.nickname,
                nationality: this.formData.nationality,
                address: this.formData.address,
                biography: this.formData.biography,
                user_type: 'nurse',
                occupation: this.formData.position,
                age: parseInt(currentDate.getUTCFullYear()) - parseInt(dateOfBirth.getUTCFullYear()),
                address: this.formData.address,
                date_of_birth: this.formData.dateOfBirth,
                personality_traits: this.formData.personalityScores,
                password: this.formData.password,
                gender: this.formData.gender,
            }

            try {
                axios.post(registerLink, data).then(response => {
                    var token = response.data.token;
                    // upload picture, if any
                    if (this.base64_img) {
                        const config = {
                            headers: {
                                'content-type': 'application/json',
                                'Authorization': 'Token ' + token
                            }
                        }
                        axios.post(url + 'profile/image/', {
                            image: this.base64_img
                        }, config).then(response => {
                            this.currentPage = 4;
                            this.progressValue = 100;
                            this.isLoading = false;
                        }).catch(error => {
                            console.log(error);
                            this.registrationFailed = true;
                        });
                    console.log(response);
                    }
                });

            } catch (error) {
                console.error('Registration failed', error);
                this.registrationFailed = true;
            }
        },

        fetchCountries() {
            this.countries = countryList;
        },

        applySearchFilter(search, countries) {
            return countries.filter((country) =>
                country.toLowerCase().startsWith(search.toLowerCase())
            )
        }
    },

    computed: {

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
    max-height: fit-content;
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
    max-height: fit-content;
    margin-top: 60px;
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

<template>
    <section class="contact -mt-48 pb-16">
        <div class="container mx-auto">
            <div class="lg:flex w-full md:w-4/5 md:mx-auto">
                <div
                    class="flex flex-col w-full lg:w-1/2 p-8 bg-blue-900 text-white"
                >
                    <div>
                        <h1
                            class="text-xl md:text-2xl lg:text-4xl mb-8 font-bold leading-snug"
                        >
                            For Contact
                        </h1>
                    </div>
                    <div class="flex flex-row mb-12">
                        <div class="mr-4 pt-1">
                            <i class="bx bx-map text-2xl"></i>
                        </div>
                        <div class="text-lg font-light leading-snug">
                            <p>Fabres Orbis Pvt. Ltd</p>
                            <p>3rd Floor, J.C.Chambers</p>
                            <p>NO 60/44, Panampilly Nagar</p>
                            <p>Kochi, Keralam - 682036</p>
                        </div>
                    </div>
                    <div class="flex flex-row mb-12">
                        <div class="mr-4 pt-1">
                            <i class="bx bx-phone text-2xl"></i>
                        </div>
                        <div class="text-lg font-light leading-snug">
                            <p>+91 7012575518, 9074294969</p>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <div class="mr-4 pt-1">
                            <i class="bx bx-mail-send text-2xl"></i>
                        </div>
                        <div class="text-lg font-light leading-snug">
                            <p>info@fogroups.com, fabresorbispvtltd@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div
                    class="d w-full lg:w-1/2 py-8 px-10 bg-white text-blue-900"
                >
                    <div>
                        <h1
                            class="text-xl md:text-2xl lg:text-4xl mb-4 font-bold leading-snug"
                        >
                            Send us a Message
                        </h1>
                        <div
                            v-if="suc_msg == 'OK'"
                            class="px-4 py-2 bg-green-700 text-white font-semibold text-base mb-4"
                        >
                            Your Enquiry Submitted! Thank you!
                        </div>
                    </div>
                    <form @submit.prevent="submitForm">
                        <div
                            class="flex flex-col md:flex-row justify-between md:mb-4"
                        >
                            <div class="md:w-1/2 pb-4 md:pb-0 md:pr-4">
                                <label
                                    for="name"
                                    class="block text-gray-500 mb-2"
                                    >Name</label
                                >
                                <input
                                    type="text"
                                    name="name"
                                    class="w-full h-10 border-b-2 border-yellow-400 bg-gray-100 py-2 px-3"
                                    v-model="name"
                                    :class="{
                                        textBoxErr:
                                            submitLogin && $v.name.$invalid
                                    }"
                                />
                                <div
                                    class="text-red-400"
                                    v-if="submitLogin && $v.name.$invalid"
                                >
                                    This field is required.
                                </div>
                            </div>
                            <div class="md:w-1/2 pb-4 md:pb-0 md:pl-4">
                                <label
                                    for="email"
                                    class="block text-gray-500 mb-2"
                                    >Email</label
                                >
                                <input
                                    type="email"
                                    name="email"
                                    class="w-full h-10 border-b-2 border-yellow-400 bg-gray-100 py-2 px-3"
                                    v-model="email"
                                    :class="{
                                        textBoxErr:
                                            submitLogin && $v.email.$invalid
                                    }"
                                />
                                <div
                                    class="text-red-400"
                                    v-if="submitLogin && $v.email.$invalid"
                                >
                                    This field is required.
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col md:flex-row justify-between md:mb-4"
                        >
                            <div class="md:w-1/2 pb-4 md:pb-0 md:pr-4">
                                <label
                                    for="phone_number"
                                    class="block text-gray-500 mb-2"
                                    >Phone Number</label
                                >
                                <input
                                    type="text"
                                    name="phone_number"
                                    class="w-full h-10 border-b-2 border-yellow-400 bg-gray-100 py-2 px-3"
                                    v-model="phone_number"
                                    :class="{
                                        textBoxErr:
                                            submitLogin &&
                                            $v.phone_number.$invalid
                                    }"
                                />
                                <div
                                    class="text-red-400"
                                    v-if="
                                        submitLogin && $v.phone_number.$invalid
                                    "
                                >
                                    This field is required.
                                </div>
                            </div>
                            <div class="md:w-1/2 pb-4 md:pb-0 md:pl-4">
                                <label
                                    for="company"
                                    class="block text-gray-500 mb-2"
                                    >Company</label
                                >
                                <input
                                    type="text"
                                    name="company"
                                    class="w-full h-10 border-b-2 border-yellow-400 bg-gray-100 py-2 px-3"
                                />
                            </div>
                        </div>
                        <div>
                            <div class="w-full">
                                <label
                                    for="message"
                                    class="block text-gray-500 mb-2"
                                    >Message</label
                                >
                                <textarea
                                    name="message"
                                    id=""
                                    cols="30"
                                    class="w-full border-b-2 border-yellow-400 bg-gray-100 py-2 px-3"
                                    rows="10"
                                    v-model="message"
                                    :class="{
                                        textBoxErr:
                                            submitLogin && $v.message.$invalid
                                    }"
                                >
                                </textarea>
                                <div
                                    class="text-red-400"
                                    v-if="submitLogin && $v.message.$invalid"
                                >
                                    This field is required.
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="w-full">
                                <button
                                    type="submit"
                                    :disabled="submitLogin == true"
                                    class="px-10 py-2 bg-yellow-400 text-blue-900 font-bold"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
require("dotenv").config();

import emailjs from "emailjs-com";

import {
    required,
    minLength,
    maxLength,
    email,
    numeric
} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            name: "",
            email: "",
            phone_number: "",
            company: "",
            message: "",
            submitLogin: false,
            suc_msg: ""
        };
    },
    validations: {
        name: {
            required
        },
        email: {
            required,
            email
        },
        phone_number: {
            required,
            numeric,
            minLength: minLength(10),
            maxLength: maxLength(10)
        },
        message: {
            required
        }
    },
    methods: {
        submitForm: function(e) {
            this.submitLogin = true;
            this.$v.$touch();
            if (!this.$v.$invalid) {
                emailjs
                    .sendForm(
                        "service_1rh1mhb",
                        "template_vmr8fdq",
                        e.target,
                        "user_IUTi4iPGLp7nRi0SOj2Pn"
                    )
                    .then(response => {
                        this.suc_msg = response.text;
                        this.name = "";
                        this.email = "";
                        this.phone_number = "";
                        this.company = "";
                        this.message = "";
                        this.submitLogin = false;
                    });
            }
        }
    }
};
</script>

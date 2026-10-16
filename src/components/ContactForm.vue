<template>
    <section class="fo-contact">
        <div class="contact-container">
            <div class="contact-card">
                <div class="contact-details">
                    <p class="section-label">CONTACT FO GROUPS</p>
                    <h1>Let’s discuss your project.</h1>
                    <p class="contact-intro">
                        Tell us about your requirements. Our team will
                        get in touch to discuss how we can help.
                    </p>

                    <div class="contact-item">
                        <h2>Visit us</h2>
                        <p>
                            Fabres Orbis Private Limited<br />
                            3rd Floor, J.C. Chambers<br />
                            No. 60/44, Panampilly Nagar<br />
                            Kochi, Kerala – 682036
                        </p>
                    </div>

                    <div class="contact-item">
                        <h2>Call us</h2>
                        <a href="tel:+917012575518">+91 7012575518</a>
                        <a href="tel:+919074294969">+91 9074294969</a>
                    </div>

                    <div class="contact-item">
                        <h2>Email us</h2>
                        <a href="mailto:info@fogroups.com">
                            info@fogroups.com
                        </a>
                        <a href="mailto:fabresorbispvtltd@gmail.com">
                            fabresorbispvtltd@gmail.com
                        </a>
                    </div>
                </div>

                <div class="contact-form-panel">
                    <h2>Send us a message</h2>
                    <p class="form-intro">
                        Fields marked with * are required.
                    </p>

                    <div
                        v-if="successMessage"
                        class="form-notice notice-success"
                        role="status"
                    >
                        {{ successMessage }}
                    </div>

                    <div
                        v-if="errorMessage"
                        class="form-notice notice-error"
                        role="alert"
                    >
                        {{ errorMessage }}
                    </div>

                    <form
                        ref="contactForm"
                        :aria-busy="isSending ? 'true' : 'false'"
                        @submit.prevent="submitForm"
                    >
                        <div class="form-row">
                            <div class="form-field">
                                <label for="contact-name">Name *</label>
                                <input
                                    id="contact-name"
                                    v-model="form.name"
                                    name="name"
                                    type="text"
                                    autocomplete="name"
                                    maxlength="100"
                                    required
                                />
                            </div>

                            <div class="form-field">
                                <label for="contact-email">Email *</label>
                                <input
                                    id="contact-email"
                                    v-model="form.email"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    maxlength="254"
                                    required
                                />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-field">
                                <label for="contact-phone">
                                    Phone number *
                                </label>
                                <input
                                    id="contact-phone"
                                    v-model="form.phone_number"
                                    name="phone_number"
                                    type="tel"
                                    autocomplete="tel"
                                    maxlength="30"
                                    required
                                />
                            </div>

                            <div class="form-field">
                                <label for="contact-company">Company</label>
                                <input
                                    id="contact-company"
                                    v-model="form.company"
                                    name="company"
                                    type="text"
                                    autocomplete="organization"
                                    maxlength="150"
                                />
                            </div>
                        </div>

                        <div class="form-field">
                            <label for="contact-message">Message *</label>
                            <textarea
                                id="contact-message"
                                v-model="form.message"
                                name="message"
                                rows="6"
                                maxlength="5000"
                                placeholder="Tell us about your project or enquiry."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="submit-button"
                            :disabled="isSending"
                        >
                            {{ isSending ? "Sending..." : "Send Message" }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from "emailjs-com";

const emptyForm = () => ({
    name: "",
    email: "",
    phone_number: "",
    company: "",
    message: ""
});

export default {
    name: "ContactForm",

    data() {
        return {
            form: emptyForm(),
            isSending: false,
            successMessage: "",
            errorMessage: ""
        };
    },

    methods: {
        async submitForm() {
            if (this.isSending) {
                return;
            }

            this.successMessage = "";
            this.errorMessage = "";

            const requiredFields = [
                this.form.name,
                this.form.email,
                this.form.phone_number,
                this.form.message
            ];

            if (requiredFields.some(value => !value.trim())) {
                this.errorMessage =
                    "Please complete all required fields.";
                return;
            }

            this.isSending = true;

            try {
                await emailjs.sendForm(
                    "service_zo9n1ob",
                    "template_2a960xd",
                    this.$refs.contactForm,
                    "XxYs8MFKrYKl8unWc"
                );

                this.successMessage =
                    "Thank you! Your enquiry has been submitted successfully.";
                this.form = emptyForm();
            } catch (error) {
                this.errorMessage =
                    "Your message could not be sent. Please try again, or email us at info@fogroups.com.";
            } finally {
                this.isSending = false;
            }
        }
    }
};
</script>

<style scoped>
.fo-contact {
    --fo-blue: #022c4b;
    --fo-yellow: #ffcc00;
    position: relative;
    padding: 64px 20px;
    background: #f4f6f8;
    color: var(--fo-blue);
}

.contact-container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
}

.contact-card {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    overflow: hidden;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 12px 36px rgba(2, 44, 75, 0.08);
}

.contact-details {
    padding: 48px 36px;
    background: var(--fo-blue);
    color: #ffffff;
}

.section-label {
    margin: 0 0 14px;
    color: var(--fo-yellow);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
}

.contact-details h1 {
    margin: 0 0 18px;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.2;
}

.contact-intro {
    margin: 0 0 34px;
    color: #dce6ee;
    font-size: 16px;
    line-height: 1.8;
}

.contact-item {
    margin-top: 28px;
}

.contact-item h2 {
    margin: 0 0 10px;
    color: var(--fo-yellow);
    font-size: 17px;
    font-weight: 700;
}

.contact-item p,
.contact-item a {
    margin: 0;
    color: #ffffff;
    font-size: 15px;
    line-height: 1.9;
}

.contact-item a {
    display: block;
    width: fit-content;
    overflow-wrap: anywhere;
    text-decoration: none;
}

.contact-item a:hover {
    color: var(--fo-yellow);
    text-decoration: underline;
}

.contact-form-panel {
    min-width: 0;
    padding: 48px 36px;
}

.contact-form-panel h2 {
    margin: 0 0 10px;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
}

.form-intro {
    margin: 0 0 26px;
    color: #586b7b;
    font-size: 14px;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}

.form-field {
    min-width: 0;
    margin-bottom: 22px;
}

.form-field label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
}

.form-field input,
.form-field textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 14px;
    border: 1px solid #cbd5df;
    border-radius: 6px;
    background: #ffffff;
    color: var(--fo-blue);
    font: inherit;
    font-size: 16px;
    line-height: 1.5;
}

.form-field textarea {
    min-height: 160px;
    resize: vertical;
}

.form-field input:focus,
.form-field textarea:focus {
    border-color: var(--fo-blue);
    outline: 2px solid var(--fo-yellow);
    outline-offset: 2px;
}

.submit-button {
    min-height: 48px;
    padding: 13px 28px;
    border: none;
    border-radius: 6px;
    background: var(--fo-yellow);
    color: var(--fo-blue);
    font: inherit;
    font-weight: 700;
    cursor: pointer;
}

.submit-button:hover {
    background: #edbd00;
}

.submit-button:disabled {
    opacity: 0.65;
    cursor: wait;
}

.submit-button:focus-visible,
.contact-item a:focus-visible {
    outline: 3px solid var(--fo-yellow);
    outline-offset: 4px;
}

.form-notice {
    margin-bottom: 22px;
    padding: 14px 16px;
    border-radius: 6px;
    font-size: 14px;
    line-height: 1.6;
}

.notice-success {
    background: #e7f5ec;
    color: #176536;
}

.notice-error {
    background: #fff0f0;
    color: #9c2525;
}

@media (max-width: 900px) {
    .contact-card {
        grid-template-columns: 1fr;
    }

    .contact-details,
    .contact-form-panel {
        padding: 36px 28px;
    }
}

@media (max-width: 540px) {
    .fo-contact {
        padding: 44px 16px;
    }

    .contact-details,
    .contact-form-panel {
        padding: 30px 22px;
    }

    .contact-details h1 {
        font-size: 28px;
    }

    .contact-form-panel h2 {
        font-size: 25px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .submit-button {
        width: 100%;
    }
}
</style>

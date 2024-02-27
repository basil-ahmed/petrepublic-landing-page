import React from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";
import './OnboardingForm.css';

function OnboardingForm() {

    return (
        <div className='onboarding-form'>
        <div className="onboarding-header">
          <h2>Pet Republic</h2>
          <h1>Grow your business with PetRepublic! </h1>
          <p className='onboarding-desc'>Join forces with us to connect with a wider audience, increase your earnings, and thrive online – your journey to success starts right here.</p>
        </div>

        <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/105076702415125403461/form/1FAIpQLSfffLLNvbsp_6Og9sG3DTvwB8YWtNy1gVUiAQV6JgOjpOYJ0w/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
</div>
    );
}

export default OnboardingForm;


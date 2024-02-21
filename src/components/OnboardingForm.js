import React from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";

function OnboardingForm() {

    return (
        <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/105076702415125403461/form/1FAIpQLSfffLLNvbsp_6Og9sG3DTvwB8YWtNy1gVUiAQV6JgOjpOYJ0w/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
    );
}

export default OnboardingForm;


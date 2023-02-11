import * as Yup from 'yup';


const rsvpValidation = Yup.object({
    guest1: Yup.string().required('You must add at least one guest name'),
    day1: Yup.string().required("Please confirm").oneOf(['yes', 'no']),
    day2: Yup.string().required("Please confirm")
})

export default rsvpValidation;
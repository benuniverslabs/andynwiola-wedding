import * as Yup from 'yup';


const qNaireSchema = Yup.object({
    guest1: Yup.string().required('You must add at least one guest name'),
    arrivalDate: Yup.date().required("Please Enter your arrival date"),
    arrivalTime: Yup.string().required("Please Enter your arrival time"),
    noNights: Yup.number().required("Please enter the amount of nights you are staying"),
})

export default qNaireSchema;
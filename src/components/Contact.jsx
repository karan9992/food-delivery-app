import React from 'react'
import contactImg from '../assets/c895e81db80d0d8b4e2c065eff0f67eefdeec057.png'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import { toast } from 'react-toastify'

const Contact = () => {

    const messageSchema = z.object({
        fName: z.string(),
        lName: z.string(),
        email: z.email(),
        mobile: z.string()
            .min(1, "Mobile number is required")
            .regex(/^[0-9]+$/, "Must be only digits")
            .length(10, "Mobile must be exactly 10 digits"),

        password: z.string(),
        confirmPassword: z.string(),

        gender: z.enum(["male", "female"], {
            errorMap: () => ({ message: "Please select your gender" })
        }),
        time: z.string().min(1, "Please select a date")

    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

    const defaultValues = {
        fName: "",
        lName: "",
        email: "",
        gender:"male"

    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(messageSchema),
        defaultValues: defaultValues
    });

    const onSubmit = (data) => {
        const result = messageSchema.safeParse(data)
        if (!result.success) {
            console.log(result.error);   // ZodError instance
        } else {
            console.log("Form Data:", result.data);
            toast.success("Message sent")
        }

    };
    return (
        <section className='w-full flex justify-center bg-white' >
            <div className='flex flex-col md:flex-row m-4 md:m-12 py-12 md:py-24 items-center container mx-auto  '>

                <div className="left w-full md:w-1/3 flex justify-center md:justify-end">
                    <img
                        src={contactImg}
                        alt="Contact"
                        className='hidden md:block w-[300px] lg:w-[364px]'
                    />
                </div>


                <div className="right flex flex-col justify-center w-full md:w-2/3 px-6 md:px-16 mt-8 md:mt-0">
                    <h1 className='text-3xl md:text-[40px] font-bold font-merriweather text-center md:text-left mb-6'>
                        Contact Us
                    </h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-[660px]'>

                            <div>
                                <input {...register("fName")} type="text" placeholder='First Name' className='border border-gray-300 rounded-lg p-4 text-sm w-full' />

                            </div>
                            <div>
                                <input {...register("lName")} type="text" placeholder='Last Name' className='border border-gray-300 rounded-lg p-4 text-sm w-full' />

                            </div>
                            <div>
                                <input {...register("email")} placeholder='Email Address' className='border border-gray-300 rounded-lg p-4 text-sm w-full' />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                            </div>

                            <div>
                                <input {...register("mobile")} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} type="tel" placeholder='Mobile Number' className='border border-gray-300 rounded-lg p-4 text-sm w-full' />
                                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}

                            </div>
                            <div>
                                <input {...register("password")} type="password" placeholder='Enter Password' className='border border-gray-300 rounded-lg p-4 text-sm w-full' />

                            </div>
                            <div>
                                <input {...register("confirmPassword")} type="password" placeholder='Confirm Password' className='border border-gray-300 rounded-lg p-4 text-sm w-full' />
                                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

                            </div>
                            <div>
                                <input {...register("time")} type="date" className='border border-gray-300 rounded-lg p-4 text-sm w-full' />
                                {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}

                            </div>
                            <div className='p-4 '>
                                <span>Gender:</span>
                                <label className='p-2'>
                                    <input
                                        {...register("gender")}
                                        type="radio"
                                        value='male'
                                        className='p-2'
                                    />
                                    Male
                                </label>

                                <label className='p-2'>
                                    <input
                                        {...register("gender")}
                                        type="radio"
                                        value='female'
                                        className='p-2'
                                    />
                                    Female
                                </label>
                                {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
                            </div>

                        </div>

                        <div className='max-w-165 mt-2'>

                            <textarea
                                {...register("message")}
                                placeholder='Message'
                                rows="4"
                                className='border border-gray-300 rounded-lg p-4 text-sm w-full'
                            ></textarea>
                        </div>

                        <div className='mt-4 flex justify-center md:justify-start'>
                            <button

                                value="Send Message"
                                className='bg-red hover:bg-red-700 transition-colors cursor-pointer py-3 text-white px-10 text-lg md:text-xl rounded-lg w-full md:w-auto'
                            > Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default Contact
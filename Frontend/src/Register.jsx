import React from 'react'
import { useState, useEffect } from 'react'
import styles from './Register.module.css'
import axios from 'axios'
import swal from 'sweetalert2'

import { InfinitySpin, ThreeDots } from 'react-loader-spinner'


const API = axios.create({
    // baseURL: 'https://linuxdiary-4-0-backend.onrender.com',
    // baseURL: 'http://localhost:5000',
    baseURL: " https://osd-backend-v2.onrender.com"
})


const Register = () => {

    const [isLoading, setisLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        collegeName: '',
        yearOfStudy: '',
        isDualBooted: '',
        referralCode: ''
    })

    const handleChange = (event) => {
        event.preventDefault()

        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
        console.log(formData)
    }

    const handleReset = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setisLoading(true)
        try {
            setisLoading(true)
            const res = await API.post('/createUser', formData)
            setisLoading(false)
            handleReset(e)
            console.log('res :')
            console.log(res)
            if (res.status === 201) {
                swal
                    .fire({
                        title: 'Registered Successfully!! Check email for confirmation.',
                        imageHeight: 200,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Continue',
                        imageUrl:
                            'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066882/TechnoTweet/hurray_uptaef.png',
                        customClass: {
                            popup: 'animated fadeInDown faster',
                            confirmButton: 'animated bounceIn faster',
                            cancelButton: 'animated bounceIn faster',
                        },
                    })
                return true
            }
            console.log(res)
            return true
        }

        catch (err) {
            console.log('err :')
            console.log(err)
            setisLoading(false)
            if (
                err.response.data.success === 'false' &&
                err.response.data.message === 'Email Already Registered'
            ) {
                swal.fire({
                    title: 'Email already registered!!! Try using different email.',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 200,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            } else if (
                err.response.data.success === 'false' &&
                err.response.data.message === 'Transaction id already used'
            ) {
                swal.fire({
                    title: 'Transaction ID already used. Try different one!!',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 200,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            } else if (
                err.response.data.success === 'false' &&
                err.response.data.message === 'Invalid mobile number'
            ) {
                // console.log('catch');
                swal.fire({
                    title: 'Invalid mobile number',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 300,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            }
            else {
                swal.fire({
                    title: 'Something went wrong!! Try again after some time.',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 300,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                    animation: 'true',
                    customClass: {
                        popup: 'animated fadeInDown faster',
                        confirmButton: 'animated bounceIn faster',
                        cancelButton: 'animated bounceIn faster',
                    },
                })
                return false
            }
        }

    }

    useEffect(() => {
        const handleMouseMove = e => {
            for (const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            };
        };

        window.onload = function () {
            document.getElementById("cards").onmousemove = handleMouseMove;
        };
    }, []);

    return (
        <div className={styles.reg}>
            <div className={styles.head} id='snapRegister'>
                <h1>Register Here</h1>
            </div>
            <div id='cards'>

                <div className='card'>

                    <div className={styles.register} id="register">
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label htmlFor="name" className={styles.inputLabels}>
                                {" "}
                                Name{" "}
                            </label>
                            <input
                                required=""
                                placeholder="Your Name"
                                name="name"
                                id="name"
                                type="text"

                                onChange={handleChange}
                            />
                            <label htmlFor="email" className={styles.inputLabels}>
                                {" "}
                                Email ID{" "}
                            </label>
                            <input
                                required=""
                                placeholder="Your Email"
                                name="email"
                                id="email"
                                type="email"

                                onChange={handleChange}
                            />
                            <label htmlFor="phone" className={styles.inputLabels}>
                                {" "}
                                Phone Number{" "}
                            </label>
                            <input
                                required=""
                                placeholder="Your Phone Number"
                                name="phone"
                                id="phone"
                                type="tel"

                                onChange={handleChange}
                            />
                            <label htmlFor="collegeName" className={styles.inputLabels}>
                                {" "}
                                College Name{" "}
                            </label>
                            <input
                                required=""
                                placeholder="Your College Name"
                                name="collegeName"
                                id="collegeName"
                                type="text"
                                onChange={handleChange}
                            />

                            <label htmlFor="yearOfStudy" className={styles.inputLabels}>
                                {" "}
                                Year of Study{" "}
                            </label>
                            <br />

                            <div className={styles.selectdropdown}>
                                <select id="yearOfStudy" name="yearOfStudy" required=""
                                    onChange={handleChange} className={styles.mySelectArrow} defaultValue="">
                                    <option value="" disabled defaultValue hidden>
                                        Select your option
                                    </option>
                                    <option value="First Year">First Year</option>
                                    <option value="Second Year">Second Year</option>
                                    <option value="Third Year">Third Year</option>
                                    <option value="Fourth Year">Fourth Year</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <label htmlFor="isDualBooted" className={styles.inputLabels}>
                                Do you have dual booted laptop ?{" "}
                            </label>
                            <br />
                            <div className={styles.selectdropdown}>
                                <select id="isDualBooted" name="isDualBooted" required="" onChange={handleChange} className={styles.mySelectArrow} defaultValue="">
                                    <option value="" disabled defaultValue hidden>
                                        Select your option
                                    </option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            {/* <label htmlFor="transactionId" className={styles.inputLabels}>
                    {" "}
                    Transaction ID{" "}
                </label>
                <input
                    required=""
                    placeholder="Payment Transaction ID"
                    name="transactionId"
                    id="transactionId"
                    type="text"
                    onChange={handleChange}
                /> */}
                            <label htmlFor="referralCode" className={styles.inputLabels}>
                                {" "}
                                Referral Code{" "}
                            </label>
                            <input
                                required=""
                                placeholder="Referral Code"
                                name="referralCode"
                                id="referralCode"
                                type="text"
                                onChange={handleChange}
                            />
                            <div className={styles.submitSection}>
                                {!isLoading && (<div className={styles.submitButton}>
                                    <input type="submit" defaultValue="REGISTER" className='button' />
                                </div>
                                )}
                                {/* {isLoading && (
                                <div className={styles.submitButton}>
                                    <ThreeDots
                                        height="80"
                                        width="80"
                                        radius="9"
                                        color="#4fa94d"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle={{}}
                                        wrapperClassName=""
                                        visible={true}
                                    />
                                </div>
                            )} */}
                                {isLoading && (
                                    <div className={styles.submitButton} id='loader'>
                                        <InfinitySpin
                                            width='100'
                                            color="#ffaa00"
                                        />
                                    </div>
                                )}

                            </div>
                        </form>
                    </div>
                </div>
            </div></div>
    )
}

export default Register
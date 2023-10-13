import React from 'react'
import { useState, useEffect } from 'react'
import styles from './Register.module.css'
import axios from 'axios'
import swal from 'sweetalert2'

import { ProgressBar } from 'react-loader-spinner'


const API = axios.create({
    // baseURL: 'https://linuxdiary-4-0-backend.onrender.com',
    baseURL: 'http://localhost:5001/api',
})


const Register = () => {

    const [isLoading, setisLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
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
            const res = await API.post('/reg', formData)
            setisLoading(false)
            handleReset(e)
            console.log('res :')
            console.log(res)
            if (res.status === 200) {
                swal
                    .fire({
                        title: 'Registered Successfully!! Check email for confirmation.',
                        imageHeight: 200,
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Continue',
                        imageUrl:
                            'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066882/TechnoTweet/hurray_uptaef.png',
                        
                    })
                return true
            }
            console.log(res)
            return true
        }

        catch (err) {
            console.log('fuck ')
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
                     
                })
                return false
            } else if (
                err.response.data.success === 'false' &&
                err.response.data.message === 'Invalid mobile number'
            ) {

                swal.fire({
                    title: 'Invalid mobile number',
                    imageUrl:
                        'https://res.cloudinary.com/dizrxbb27/image/upload/v1681066890/TechnoTweet/oops_qo58xk.png',
                    imageHeight: 300,
                    imageWidth: 200,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK',
                     
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
    
        window.onload = function() {
          document.getElementById("cards").onmousemove = handleMouseMove;
        };
      }, []);

    return (
        <div id='cards'>
            <div className='card'>
        
        <div className={styles.register} >
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
                <label htmlFor="college" className={styles.inputLabels}>
                    {" "}
                    College Name{" "}
                </label>
                <input
                    required=""
                    placeholder="Your College Name"
                    name="college"
                    id="college"
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
                        <input type="submit" defaultValue="REGISTER" className='btn-hover color-5' />
                    </div>
                    )}
                    {isLoading && (
                        <ProgressBar
                            height="160"
                            width="auto"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperclassName="progress-bar-wrapper"
                            borderColor='#00d12d'
                            barColor='#ffffff'
                        />
                    )}

                </div>
            </form>
        </div>
</div>
        </div>
    )
}

export default Register
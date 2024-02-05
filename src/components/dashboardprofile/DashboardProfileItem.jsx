import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../../redux/slice/register-slice";
import { getResponInput } from "../../redux/slice/register-slice";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const DashboardProfileItem = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const resultResponRegister = useSelector((state) => state.register).responRegister

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        dispatch(postRegister(data))
    }

    const clearMessageAPI = () => {
        dispatch(getResponInput({}))
    }

    const alertSucces = () => {
        withReactContent(Swal).fire({
            position: "center",
            icon: "success",
            title: "Registrasi Berhasil. Silahkah Login terlebih dahulu.",
            showConfirmButton: false,
            timer: 1500
        })
    }

    useEffect(() => {
        if (resultResponRegister.user) {
            alertSucces()
            setTimeout(() => {
                dispatch(getResponInput({}))
                navigate('/login')
            }, 1500)
        }
    })

    return (
        <>
            <div className="flex flex-col items-stretch px-8 py-11 bg-zinc-50 max-md:px-5">
                <div className="text-4xl font-semibold tracking-tighter leading-10 text-zinc-800 max-md:max-w-full">
                    Profil
                </div>
                <div className="p-6 mt-6 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                        <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col justify-center items-stretch max-md:mt-10">
                                <div className="flex flex-col justify-center items-stretch bg-red-300 rounded-lg">
                                    <img
                                        loading="lazy"
                                        srcSet="..."
                                        className="object-center w-full aspect-[1.16]"
                                    />
                                </div>
                                <div className="flex gap-3 justify-between items-stretch mt-5">
                                    <div className="flex gap-1 justify-between items-stretch px-5 py-3.5 text-sm font-semibold leading-5 text-center text-white whitespace-nowrap bg-emerald-900 rounded-md shadow-sm">
                                        <img
                                            loading="lazy"
                                            src="../plus-svgrepo-com.svg"
                                            className="object-center w-2.5 aspect-square fill-zinc-50"
                                        />
                                        <button className="grow">Unggah foto baru</button>
                                    </div>
                                    <button className="flex flex-col justify-center items-center px-3 py-3.5 bg-emerald-900 rounded-md shadow-sm aspect-[1.37]">
                                        <img
                                            
                                            src="../trash-alt-svgrepo-com.svg"
                                            className=""
                                        />
                                    </button>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-stretch max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col justify-center items-stretch text-xl font-semibold tracking-tight leading-8 rounded-lg border-2 border-solid border-zinc-100 text-zinc-900 max-md:max-w-full">
                                    <div className="flex gap-4 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
                                        <div className="flex flex-col w-4 h-8 bg-fuchsia-300 rounded" />
                                        <div className="grow max-md:max-w-full">Informasi Profil</div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex flex-col items-stretch px-8 py-10 mt-8 text-xs leading-5 rounded-lg border border-solid border-slate-500 text-slate-500 max-md:px-5 max-md:max-w-full">
                                        <div className="text-sm leading-5 max-md:max-w-full">
                                            Nama Lengkap

                                        </div>
                                        <input {...register('name', {
                                            required: ' Nama harus diisi ! ',
                                            onChange: clearMessageAPI,
                                        })} type="text" name="name" className="justify-center items-start py-3.5 pr-16 pl-3 mt-3 text-emerald-900 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full" placeholder="Isi Nama Lengkap Anda"
                                        />
                                        <div className="mt-8 text-sm leading-5 max-md:max-w-full">
                                            Email
                                        </div>
                                        <input type="text" {...register('email', {
                                            required: ' Email harus diisi ! ',
                                            pattern: {
                                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                message: 'Isi email dengan benar !'
                                            },
                                            onChange: clearMessageAPI,
                                        })} className="justify-center items-start py-3.5 pr-16 pl-3 mt-3 text-emerald-900 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full" placeholder="Email" />
                                        <div className="mt-8 text-sm leading-5 max-md:max-w-full">
                                            Password
                                        </div>
                                        <input type="password" {...register('password', {
                                            required: "Password harus diisi !",
                                            onChange: clearMessageAPI,
                                        })} className="justify-center items-start py-3.5 pr-16 pl-3 mt-3 text-emerald-900 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full" placeholder="*****"/>
                                    </div>
                                    <div className="mt-8 text-sm leading-5 max-md:max-w-full">
                                        Bio
                                    </div>
                                    <input type="text" {...register('bio', {
                                        required: "Bio Harus diisi !",
                                        onChange: clearMessageAPI,
                                    })} className="justify-center items-start py-3.5 pr-16 pl-3 mt-3 text-emerald-900 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full" placeholder="Usaha yang sedang anda jalani" />
                                    <div className="mt-8 text-sm leading-5 max-md:max-w-full">
                                        Lokasi
                                    </div>
                                    <div className="flex gap-3 justify-between items-stretch mt-3 text-emerald-900 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                        <input type="text" {...register('city', {
                                        required: "Kota harus diisi !",
                                        onChange: clearMessageAPI,
                                    })} className="grow justify-center items-start py-3.5 pr-16 pl-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5" placeholder="Kota" />
                                        <input type="text" {...register('provinci', {
                                        required: "Provinsi Harus di Isi !",
                                        onChange: clearMessageAPI,
                                    })} className="grow justify-center items-start py-3.5 pr-16 pl-3 bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5" placeholder="Provinsi"/>
                                    </div>
                                    <div className="mt-8 text-sm leading-5 max-md:max-w-full">
                                        Alamat Lengkap
                                    </div>
                                    <input type="text" {...register('address', {
                                        required: "Anda Belum Melengkapi Alamat !",
                                        onChange: clearMessageAPI,
                                    })} className="justify-center items-start py-3.5 pr-16 pl-3 mt-3 text-emerald-900 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full" placeholder="Lengkapi Alamat" />
                                    <div className="mt-3 text-xs italic font-extralight leading-5 text-black max-md:max-w-full">
                                        alamat tidak akan di tampilkan di halaman utama, hanya akan
                                        digunakan untuk melengkapi data jika memilih paket pendukung
                                        hebat
                                    </div>
                                    <div className="mt-8 text-sm leading-5 max-md:max-w-full">
                                        Nomor Telepon
                                    </div>
                                    <input type="text" {...register('no', {
                                        required: "No Telp Harus di isi ",
                                        onChange: clearMessageAPI,
                                    })} className="justify-center items-start py-3.5 pr-16 pl-3 mt-3 text-emerald-900 whitespace-nowrap bg-white rounded-md border border-solid shadow-sm border-[color:var(--Neutral-colors-300,#F1F3F7)] max-md:pr-5 max-md:max-w-full" placeholder="Nomor yang bisa dihubungi" />
                                    <div className="mt-3 text-xs italic font-extralight leading-5 text-black max-md:max-w-full">
                                        nomor telepon tidak akan di tampilkan di halaman utama, hanya
                                        akan digunakan untuk melengkapi data jika memilih paket
                                        pendukung hebat
                                    </div>
                                    <button type="submit" className="text-white text-center text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center shadow-sm bg-emerald-900 mt-10 px-16 py-3.5 rounded-md max-md:max-w-full max-md:px-5">
                                        Edit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>


    )
}

export default DashboardProfileItem
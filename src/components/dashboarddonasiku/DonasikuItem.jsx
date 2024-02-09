import React, { useEffect } from "react";
import useFetch from "react-fetch-hook";
import { useDispatch, useSelector } from "react-redux";
import { getPaketYangDidukungAPI, getYangDidukung, getYangDidukungAPI } from "../../redux/slice/dukungan-slice";
import Cookies from "js-cookie";
import { getUsersAPI } from "../../redux/slice/inovasi-slice";


const DonasikuItem = () => {
    const dispatch = useDispatch()
    const dukungan = useSelector((state) => state.dukungan);
    const yangDidukung = dukungan?.yangDidukung.data ? Object.values(dukungan.yangDidukung.data.supports) : [];
    const semuaUser = useSelector((state => state.inovasi)).users

    const userId = JSON.parse(Cookies.get('responLogin')).user.id 

    // mendapatkan data yang cuma di dukung user ini, LOL.
    const yangDidukungUserINI = yangDidukung.filter(item => item.giver_id === userId);

    // console.log(yangDidukungUserINI)
    // console.log(yangDidukung) // user lain ikutan ke get, LOL.

    useEffect(() => {
        dispatch(getYangDidukungAPI())
        dispatch(getUsersAPI)
        // dispatch(getOpsiDukunganAPI(id))
    }, [])

    // format tanggal
    const optionFormatDate = { year: 'numeric', month: 'long', day: 'numeric' }

    const namaUser = {}
    semuaUser.data?.forEach(user => {
        namaUser[user.id] = user.name.replace(/\b\w/g, match => match.toUpperCase())
    })

    const idInovAllHereMap = new Map()
    if (yangDidukung) {
        Object.values(yangDidukung).forEach(data => {
            if (!idInovAllHereMap.has(data.inovation_id)) {
                idInovAllHereMap.set(data.inovation_id, {
                    inovation_id: data.inovation_id
                })
            }
        })
    }

    // id untuk panggil paket donasi biar bisa akses suvenirnya apa aja
    const idInovAllHere = Array.from(idInovAllHereMap.values()) 



    return (
        <>
            <div className="flex flex-col items-stretch px-8 py-11 max-md:px-5">
                <div className="text-4xl font-semibold tracking-tighter leading-10 text-emerald-900 max-md:max-w-full">
                    <h2>Dukunganku</h2>
                </div>

                <div className="justify-between max-md:mt-10 max-md:max-w-full">
                    {yangDidukungUserINI?.map((project) => (
                        < div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch mb-5 bg-green-100 px-3 py-5 mt-12 rounded-xl border">
                            <div className="flex flex-col items-stretch w-[76%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow items-stretch self-stretch pb-1.5 max-md:mt-5 max-md:max-w-full">
                                    <div className="flex gap-3 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
                                        <img

                                            className="object-contain object-center shrink-0 justify-center items-center w-16 aspect-square"
                                            key={project.id + 2} src={project.supports.image}
                                        />
                                        <div className="flex flex-col flex-1 items-stretch my-auto text-emerald-900 max-md:max-w-full" key={project.id}>
                                            <div className="text-lg font-extrabold leading-6 max-md:max-w-full">
                                                <p>{project.supports.inovation_name}</p>
                                            </div>
                                            <div className="mt-3 text-base leading-6 max-md:max-w-full">
                                                <p>Oleh : {namaUser[project.supports.user_id]}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shrink-0 mt-2 h-0.5 bg-emerald-900 max-md:max-w-full" />
                                    <div className="flex gap-1 justify-between items-stretch mt-2.5 text-xs text-emerald-900 max-md:flex-wrap max-md:max-w-full">
                                        <div className="whitespace-nowrap leading-[200%]">
                                            <p>Jenis Dukungan :</p>
                                        </div>
                                        <div className="grow leading-[200%] max-md:max-w-full">
                                            <p>Pendukung {project.package_id === 0 ? 'Sejati' : 'Hebat'}</p>
                                        </div>
                                    </div>

                                    {/* trobel mapping data disini */}
                                    {/* <div className="flex gap-1 justify-between mt-3 text-xs text-emerald-900 max-md:flex-wrap max-md:max-w-full">
                                        <div className="leading-[200%] grow sm:w-3/4 lg:w-1/6"><p>Sovenir : &nbsp;</p></div>
                                        <div className="leading-[200%] max-md:max-w-full">
                                            <p>list 1 apa aja disini, adsas, dsadaskjda.asdadash.a dkjsahds.d hslahda asdjashda  dhasld dlashdlkas d lisahdlksahd  sdlsahdl lsadlashd lsadlahdlksad &nbsp; (paket suvenir #1 / package_name)</p>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[24%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow items-stretch self-stretch text-emerald-900 max-md:mt-5">
                                    <div className="flex flex-col items-stretch px-2 py-1 rounded-lg border border-green-500 border-solid">
                                        <div className="text-xs tracking-normal leading-6">
                                            <p>Tanggal dukungan</p>
                                        </div>
                                        <div className="text-base font-semibold tracking-normal leading-6">
                                            <p>{new Date(project.createdAt).toLocaleDateString('id-ID', optionFormatDate)}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch py-1 pr-10 pl-2 mt-2 rounded-lg border border-green-500 border-solid max-md:pr-5">
                                        <div className="text-xs tracking-normal leading-6">
                                            <p>Nominal dukungan</p>
                                        </div>
                                        <div className="text-base font-semibold tracking-normal leading-6">
                                            <p>{project.nominal.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>


    )
}

export default DonasikuItem
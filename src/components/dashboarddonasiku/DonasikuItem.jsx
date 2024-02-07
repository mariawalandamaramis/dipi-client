import React from "react";
import useFetch from "react-fetch-hook";


const DonasikuItem = () => {
  const { data: projects, isLoading, error } = useFetch('https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/3/project');
  const imageUrl = "https://i.imgur.com/kYcorhc.png"; //sample

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

  // format tanggal
  const optionFormatDate = { year: 'numeric', month: 'long', day: 'numeric' }

  const yangDidukung = [
    {
        "id": 1,
        "nominal": 10000,
        "inovation_id": 1,
        "giver_id": 1,
        "createdAt": "2024-02-01T01:27:50.000Z",
        "updatedAt": "2024-02-01T01:27:50.000Z",
        "support": {
            "id": 1,
            "user_id": 1,
            "category_id": 1,
            "inovation_name": "tes",
            "description": "description",
            "city_id": 1,
            "province_id": 1,
            "image": "https://res.cloudinary.com/drlam8rrl/image/upload/v1706447912/uploads/spil6f4uk3spdxzk7mf0.png",
            "video": "https://res.cloudinary.com/drlam8rrl/video/upload/v1706350370/uploads/bgcaxlz7rfw6qostkzlp.mp4",
            "amount": 1,
            "duration": 1,
            "flag_active": true,
            "createdAt": "2024-02-01T01:24:37.000Z",
            "updatedAt": "2024-02-01T01:24:37.000Z"
        }
    },
    {
        "id": 2,
        "nominal": 10000,
        "inovation_id": 1,
        "giver_id": 1,
        "createdAt": "2024-02-01T13:57:48.000Z",
        "updatedAt": "2024-02-01T13:57:48.000Z",
        "support": {
            "id": 1,
            "user_id": 1,
            "category_id": 1,
            "inovation_name": "tes",
            "description": "description",
            "city_id": 1,
            "province_id": 1,
            "image": "https://res.cloudinary.com/drlam8rrl/image/upload/v1706447912/uploads/spil6f4uk3spdxzk7mf0.png",
            "video": "https://res.cloudinary.com/drlam8rrl/video/upload/v1706350370/uploads/bgcaxlz7rfw6qostkzlp.mp4",
            "amount": 1,
            "duration": 1,
            "flag_active": true,
            "createdAt": "2024-02-01T01:24:37.000Z",
            "updatedAt": "2024-02-01T01:24:37.000Z"
        }
    }
]
    return (
        <>
            <div className="flex flex-col items-stretch px-8 py-11 max-md:px-5">
                <div className="text-4xl font-semibold tracking-tighter leading-10 text-emerald-900 max-md:max-w-full">
                   <h2>Dukunganku</h2>
                </div>

                <div className="justify-between max-md:mt-10 max-md:max-w-full">
                {yangDidukung.map((project) => (
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch mb-5 bg-green-100 px-3 py-5 mt-12 rounded-xl border">
                        <div className="flex flex-col items-stretch w-[76%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-stretch self-stretch pb-1.5 max-md:mt-5 max-md:max-w-full">
                                <div className="flex gap-3 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
                                    <img
                                       
                                        className="object-contain object-center shrink-0 justify-center items-center w-16 aspect-square"
                                        key={imageUrl} src={project.support.image} 
                                    />
                                    <div className="flex flex-col flex-1 items-stretch my-auto text-emerald-900 max-md:max-w-full" key={project.id}>
                                        <div className="text-lg font-extrabold leading-6 max-md:max-w-full">
                                        <p>{project.support.inovation_name}</p>
                                        </div>
                                        <div className="mt-3 text-base leading-6 max-md:max-w-full">
                                        <p>Oleh : {project.support.user_id}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="shrink-0 mt-2 h-0.5 bg-emerald-900 max-md:max-w-full" />
                                <div className="flex gap-1 justify-between items-stretch mt-2.5 text-xs text-emerald-900 max-md:flex-wrap max-md:max-w-full">
                                    <div className="whitespace-nowrap leading-[200%]">
                                       <p>Jenis Dukungan :</p>
                                    </div>
                                    <div className="grow leading-[200%] max-md:max-w-full">
                                        <p>Pendukung Sejati</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 justify-between mt-3 text-xs text-emerald-900 max-md:flex-wrap max-md:max-w-full">
                                    <div className="leading-[200%] grow sm:w-3/4 lg:w-1/6"><p>Sovenir : &nbsp;</p></div>
                                    <div className="leading-[200%] max-md:max-w-full">
                                    <p>list 1 apa aja disini, adsas, dsadaskjda.asdadash.a dkjsahds.d hslahda asdjashda  dhasld dlashdlkas d lisahdlksahd  sdlsahdl lsadlashd lsadlahdlksad &nbsp; (paket suvenir #1 / package_name)</p>
                                    </div>
                                </div>
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
import React, { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";


const DonasikuItem = () => {
    const { data: projects, isLoading, error } = useFetch('https://6565fad2eb8bb4b70ef2b86d.mockapi.io/api/projectpi/users/3/project');
  const imageUrl = "https://i.imgur.com/kYcorhc.png"; //sample

  const [img, setImg] = useState([]);

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };


  useEffect(() => {
    fetchImage();
  }, []);

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }

    return (
        <>
            <div className="flex flex-col items-stretch px-8 py-11 -mt-px bg-zinc-50 max-md:px-5">
                <div className="text-4xl font-semibold tracking-tighter leading-10 text-emerald-900 max-md:max-w-full">
                    Dukunganku
                </div>

                <div className="justify-between px-3 py-5 mt-12 bg-white rounded-xl border border-white border-solid max-md:mt-10 max-md:max-w-full">
                {projects.map((project) => (
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                        <div className="flex flex-col items-stretch w-[76%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-stretch self-stretch pb-1.5 max-md:mt-5 max-md:max-w-full">
                                <div className="flex gap-3 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
                                    <img
                                       
                                        className="object-contain object-center shrink-0 justify-center items-center w-16 aspect-square"
                                        key={img} src={img} 
                                    />
                                    <div className="flex flex-col flex-1 items-stretch my-auto text-emerald-900 max-md:max-w-full" key={project.id}>
                                        <div className="text-lg font-extrabold leading-6 max-md:max-w-full">
                                        {project.title}
                                        </div>
                                        <div className="mt-3 text-base leading-6 max-md:max-w-full">
                                        {project.city}
                                        </div>
                                    </div>
                                </div>
                                <div className="shrink-0 mt-2 h-0.5 bg-emerald-900 max-md:max-w-full" />
                                <div className="flex gap-1 justify-between items-stretch mt-2.5 text-xs text-emerald-900 max-md:flex-wrap max-md:max-w-full">
                                    <div className="whitespace-nowrap leading-[200%]">
                                        Jenis Dukungan :
                                    </div>
                                    <div className="grow leading-[200%] max-md:max-w-full">
                                        Pendukung Sejati
                                    </div>
                                </div>
                                <div className="flex gap-1 justify-between items-stretch mt-3 text-xs text-emerald-900 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                                    <div className="leading-[200%]">Sovenir :</div>
                                    <div className="grow leading-[200%] max-md:max-w-full">-</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-stretch self-stretch px-10 text-emerald-900 max-md:px-5 max-md:mt-5">
                                <div className="flex flex-col items-stretch px-2 py-1 rounded-lg border border-white border-solid">
                                    <div className="text-xs tracking-normal leading-6">
                                        Tanggal dukungan
                                    </div>
                                    <div className="text-base font-semibold tracking-normal leading-6 whitespace-nowrap">
                                        31 Desember 2023
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch py-1 pr-10 pl-2 mt-2 rounded-lg border border-white border-solid max-md:pr-5">
                                    <div className="text-xs tracking-normal leading-6 whitespace-nowrap">
                                        Nominal dukungan
                                    </div>
                                    <div className="text-base font-semibold tracking-normal leading-6">
                                        Rp 75.000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
              ))}

                </div>
            </div>
            
            <div className="flex relative flex-col items-stretch mt-5 h-auto">
                <div _text="" />
            </div>
        </>


    )
}

export default DonasikuItem
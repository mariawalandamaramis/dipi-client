import Cookies from "js-cookie";

export const uploadImageAPI = async (imgFile) => {
    try {
        const formData = new FormData();
        formData.append("file", imgFile, imgFile.name)
        const APIURL = "http://localhost:3000/inovation/uploadImage"

        const response = await fetch(APIURL, {
            method: 'POST',
            body: formData
        })

        if (response.ok) {
            const resultImg = await response.json()
            console.log(resultImg)
            const resultImgString = JSON.stringify(resultImg)
            Cookies.set('dataImage', resultImgString)
        } else {
            console.log('respon upload image : GAGAL')
        }

    } catch (error) {
        console.log(error)
    }
}

export const uploadVideoAPI = async (videoFile) => {
    try {
        const formData = new FormData();
        formData.append("video", videoFile, videoFile.name)
        const APIURL = "http://localhost:3000/inovation/uploadvideo"

        const response = await fetch(APIURL, {
            method: 'POST',
            body: formData
        })

        if (response.ok) {
            const resultVid = await response.json()
            console.log(resultVid)
            const resultVidString = JSON.stringify(resultVid)
            Cookies.set('dataVideo', resultVidString)
        } else {
            console.log('respon upload video :  GAGAL')
        }

    } catch (error) {
        console.log(error)
    }
}

export const uploadInovasiAPI = async (dataInovation) => {
    try {
        const token = JSON.parse(Cookies.get('responLogin')).token
        const APIURL = "http://localhost:3000/inovation";

        const response = await fetch(APIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(dataInovation),
        });

        if (response.ok) {
            const resultInovasi = await response.json()
            console.log(resultInovasi)
            const resultInovasiString = JSON.stringify(resultInovasi)
            Cookies.set('dataInovasi', resultInovasiString)
        } else {
            console.log('respon upload inovasi: GAGAL');
        }

    } catch (error) {
        console.log(error);
    }
};

export const uploadPackageDonate = async (dataPackage) => {
    try {
        const APIURL = "http://localhost:3000/package";

        const response = await fetch(APIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataPackage),
        });

        if (response.ok) {
            const resultPackage = await response.json();
            console.log(resultPackage);
            const resultPackageString = JSON.stringify(resultPackage);
            Cookies.set('dataPackage', resultPackageString);
        } else {
            console.log('respon upload package: GAGAL');
        }
    } catch (error) {
        console.log(error);
    }
};

